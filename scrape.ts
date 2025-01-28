// pnpm add -D tsx fs-extra @types/fs-extra puppeteer axios
// pnpm tsx scrape
import axios from 'axios'
import fs from 'fs-extra'
import path from 'path'
import puppeteer from 'puppeteer'
import { URL } from 'url'

const TARGET_URL = '!website.com'
const OUTPUT_DIR = './downloaded_images'

async function downloadImage(url: string, filename: string): Promise<void> {
  try {
    const response = await axios({
      url,
      responseType: 'arraybuffer',
    })

    await fs.writeFile(filename, response.data)
    console.log(`✓ Downloaded: ${filename}`)
  } catch (error) {
    console.error(`✗ Failed to download ${url}:`, error instanceof Error ? error.message : error)
  }
}

async function isValidImageUrl(url: string): Promise<boolean> {
  try {
    const parsedUrl = new URL(url)
    return true
  } catch {
    return false
  }
}

async function getImageUrls(): Promise<string[]> {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  console.log('Navigating to website...')
  await page.goto(TARGET_URL, { waitUntil: 'networkidle0' })

  // Get all image URLs from various sources
  const imageUrls = await page.evaluate(() => {
    const urls = new Set<string>()

    // Regular img tags
    document.querySelectorAll('img').forEach(img => {
      if (img.src) urls.add(img.src)
      if (img.dataset.src) urls.add(img.dataset.src)
    })

    // Background images in CSS
    document.querySelectorAll('*').forEach(element => {
      const style = window.getComputedStyle(element)
      const bgImage = style.backgroundImage
      if (bgImage && bgImage !== 'none') {
        const url = bgImage.slice(4, -1).replace(/['"]/g, '')
        if (url) urls.add(url)
      }
    })

    // Source sets
    document.querySelectorAll('source').forEach(source => {
      if (source.srcset) {
        source.srcset.split(',').forEach(src => {
          const url = src.trim().split(' ')[0]
          if (url) urls.add(url)
        })
      }
    })

    return Array.from(urls)
  })

  await browser.close()
  return imageUrls
}

async function main() {
  try {
    // Create output directory
    await fs.ensureDir(OUTPUT_DIR)

    // Get all image URLs
    const imageUrls = await getImageUrls()
    console.log(`Found ${imageUrls.length} images`)

    // Filter and download images
    const downloadPromises = imageUrls
      .filter(url => url.startsWith('http'))
      .map(async url => {
        if (await isValidImageUrl(url)) {
          const filename = path.join(OUTPUT_DIR, `${path.basename(url).split('?')[0]}`)
          await downloadImage(url, filename)
        }
      })

    await Promise.all(downloadPromises)
    console.log('\nDownload complete! Check the downloaded_images directory.')
  } catch (error) {
    console.error('Script failed:', error)
    process.exit(1)
  }
}

main()
