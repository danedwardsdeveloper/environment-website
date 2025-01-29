import Image from 'next/image'

import image1 from '@/app/images/1.webp'
import image4 from '@/app/images/4.webp'
import image5 from '@/app/images/5.webp'
import image6 from '@/app/images/6.webp'
import image7 from '@/app/images/7.webp'
import image8 from '@/app/images/8.webp'
import image12 from '@/app/images/12.webp'
import image13 from '@/app/images/13.webp'
import image14 from '@/app/images/14.webp'
import image15 from '@/app/images/15.webp'
import image16 from '@/app/images/16.webp'
import image17 from '@/app/images/17.webp'
import image18 from '@/app/images/18.webp'
import image19 from '@/app/images/19.webp'
import image20 from '@/app/images/20.webp'
import image21 from '@/app/images/21.jpeg'

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Image
        data-component="image1"
        src={image1}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority
      />
      <div className="w-full max-w-3xl mx-auto">
        <h1>{`Environment Company`}</h1>
        <p>
          {`Funded by the UK Government, through the West Midlands Combined Authority, the programme is being delivered by a consortium including the Black Country Industrial Cluster, Environment Company, Coventry City Council and Aston University. The programme is open to SMEs across the Black County and provides FREE energy assessments, shares expert advice and provides support for businesses to help them identify cost-effective energy-saving measures and embed low-carbon strategy measures to support net zero targets.`}
        </p>

        <h2>{`Funding Opportunities`}</h2>
        <p>{``}</p>
        <h2>{`About Environment Company`}</h2>
        <p>{`Environment Company is a specialist energy engineering, carbon abatement and process optimisation consultancy, with over 30 years' experience working with organisations in energy intensive sectors.
We are leaders in developing and implementing Low Carbon and net-zero carbon strategies for organisations in all sectors.`}</p>
        <p>{`We have helped thousands of businesses improve their energy efficiency, implement a Low Carbon strategy, reduce their carbon footprint and, most importantly, save money.`}</p>
        <h2>{`Our Pro Services`}</h2>
        <p>{`Environment Company will support you in developing innovative and effective solutions to decarbonise your operations.  At the heart of our solutions and services, there is an innovative suite of digital platforms and online software, facilitating accurate advanced diagnostics. These enable energy monitoring and targeting, performance analysis and carbon accounting and reporting.`}</p>

        <h2>{`Developing low carbon strategies for businesses`}</h2>
        <p>{`Globally, we are currently emitting 51 billion tonnes of carbon per annum. To meet the challenging target of limiting global warming to well below 2 degrees Celsius (preferably to 1.5 degrees Celsius) compared to pre-industrial levels, we need to make changes that reduce our carbon emissions immediately. The concept of low carbon development has its roots in the UNFCCC, which was adopted in Rio in 1992. In the context of this convention, low-carbon development is now generally expressed using the term low-emission development strategies (LEDS - also known as low-carbon development strategies or low-carbon growth plans).`}</p>

        <h2>{`Micro-Metering Surveys`}</h2>
        <p>{`There are multiple levels of Micro-metering that Environment Company offers. Short term micro metering involves sub metering energy intensive plant for up to 2 weeks, or we offer permanent installation through our Automated Monitoring and Targeting (aM&T) system, which we call SEE Change`}</p>
        <h2>{`CFAR - Carbon Footprinting, Accounting, and Reporting`}</h2>
        <p>{`CFAR is Environment Company's purpose-built Carbon Footprinting, Accounting and Reporting software that enables companies to quantify their Scopes 1, 2 or 3 GHG emissions.`}</p>
        <h2>{`CBAM (Cross Border Adjustment Mechanism)`}</h2>
        <p>{`The Carbon Border Adjustment Mechanism (CBAM) is an EU legislation introduced in a transitional state in October 2023. As of October 1, 2023, Regulation 2023/956 introduced the EU’s Carbon Border Adjustment Mechanism (CBAM), intending to reduce carbon emissions, put a fair price on the carbon emitted during the production of carbon-intensive goods imported into the EU and encourage a cleaner industrial production through a methodology for calculating embedded emissions according to the Paris Agreement and the EU Fit for 55 packages.`}</p>

        <h2>{``}</h2>
        <p>{``}</p>

        <h2>{`What Our Clients Say`}</h2>

        <h2>{`Galebreaker Agri
Keith Hardie Special Projects Director`}</h2>
        <p>{`Thanks to the Environment Company team carrying out a Business Energy Efficiency Assessment, we identified several ways we could further improve our energy efficiency. Environment Company’s findings identified that, by making their recommended changes, we could achieve annual financial savings of up to £18,872 and 62.81 tonnes of CO2e. They then helped us prioritise the required changes, identify and access the best available funding opportunities, and supported our grant application processes. As a result, and with the minimum of disruption, we have improved our working environment considerably and reduced our energy bills. Environment Company will continue to support us with meeting our energy efficiency targets and the implementation of our low carbon strategy, and I am happy to recommend them to other businesses wishing to develop a low carbon strategy and reduce their own energy costs.`}</p>

        <h2>{`Our Pro Toolkit`}</h2>
        <p>{`Our suite of easy to use web-based software tools, with powerful diagnostic modules can identify opportunities for energy and carbon reduction. Our automated monitoring and targeting tool (SEE Change) and the online carbon footprinting accounting and reporting tool (CFAR) can help develop innovative strategies to reduce your carbon emissions. Our powerful set of web-based tools eliminates the need for manual analysis of your energy data. This then provides a clear pattern of usage, detailed reports of energy consumption and costs, profiles your carbon emissions while tracking reduction over time.
`}</p>

        <h2>{`Our Latest News`}</h2>
        <h3>{`Carbon leakage and CBAM`}</h3>
        <p>{`Carbon leakage refers to the movement of production and associated emissions from one country to another due to less stringent carbon pricing and climate regulations. In summary: Carbon leakage is the shifting of greenhouse gas emitting industries outside the EU to avoid tighter standards.`}</p>

        <h2>{`What makes a good ESOS action plan?`}</h2>
        <p>{`All participants who qualified for ESOS in a given compliance period are required to subsequently produce an action plan and report against it. The purpose of the action plan and progress updates is to increase participants' accountability for taking action to reduce their energy use.`}</p>
        <h2>{`Next Steps for UK Businesses - Practical Advice on Aligning with COP29 Outcomes`}</h2>
        <p>{`As the UK embraces its leadership role in the fight against climate change, the outcomes of COP29 present businesses with a mix of challenges and unprecedented opportunities. Building on Prime Minister Keir Starmer's commitments to decarbonise the power sector and achieve an ambitious 81% emissions reduction by 2035, the UK is accelerating its journey toward Net Zero.`}</p>
        <p>{`Environment Company is a specialist energy engineering and process optimisation consultancy, with over 30 years' experience working with manufacturing and other business clients.  Rapidly rising energy costs, combined with new regulatory compliance, mean that having a comprehensive understanding of how you use energy is increasingly a business necessity.`}</p>
        <h2>{`Contact Us`}</h2>
        <p>{`Environment Company Ltd, 10 Business Park, Businessland, Busineshire. AA1 1AA`}</p>
        <p>{`+44 (0)11111 123 123`}</p>
        <p>{`info@environmentcompany.co.uk`}</p>
      </div>
      <Image
        data-component="image5"
        src={image5}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority
      />
      <Image
        data-component="image6"
        src={image6}
        alt=""
        className="w-full"
        sizes="(max-width: 1100px) 100vw, 1100px"
        priority
      />
      <Image
        data-component="image7"
        src={image7}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <Image
        data-component="image8"
        src={image8}
        alt=""
        className="w-full"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <Image
        data-component="image12"
        src={image12}
        alt=""
        className="w-full"
        sizes="(max-width: 721px) 100vw, 721px"
      />
      <Image
        data-component="image13"
        src={image13}
        alt=""
        className="w-full"
        sizes="(max-width: 717px) 100vw, 717px"
      />
      <Image
        data-component="image14"
        src={image14}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <Image
        data-component="image15"
        src={image15}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <Image
        data-component="image16"
        src={image16}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <Image
        data-component="image17"
        src={image17}
        alt=""
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />
      <Image
        data-component="image18"
        src={image18}
        alt=""
        className=""
        sizes="(max-width: 500px) 100vw, 500px"
      />
      <Image
        data-component="image19"
        src={image19}
        alt=""
        className=""
        sizes="(max-width: 500px) 100vw, 500px"
      />
      <Image
        data-component="image20"
        src={image20}
        alt=""
        className=""
        sizes="(max-width: 500px) 100vw, 500px"
      />
      <Image
        data-component="image21"
        src={image21}
        alt=""
        className=""
        sizes="(max-width: 400px) 100vw, 400px"
      />
      <Image
        data-component="image4"
        src={image4}
        alt=""
        className="max-w-96"
        sizes="(max-width: 400px) 100vw, 400px"
      />
    </div>
  )
}
