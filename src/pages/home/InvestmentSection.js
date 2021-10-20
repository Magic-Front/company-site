import SectionComponent from 'components/SectionComponent'
import InvestmentCard from 'components/InvestmentCard'
import air from 'assets/images/air.png'
import water from 'assets/images/water.png'
import waste from 'assets/images/waste.png'
import climate from 'assets/images/climate.png'
import energy from 'assets/images/energy.png'
import farm from 'assets/images/farm.png'
import React from 'react'

const text =
  'We are a boutique advisory and investment firm focused on helping entrepreneurs solve some of the intractable challenges facing our planet. Our investment thematic includes clean air, clean water, climate change, waste and biodiversity loss.'
const investList = [
  {
    image: air,
    title: "Clean Air"
  },
  {
    image: water,
    title: "Clean Water"
  },
  {
    image: waste,
    title: "Waste"
  },
  {
    image: climate,
    title: "Climate Change"
  },
  {
    image: energy,
    title: "Energy Equity"
  },
  {
    image: farm,
    title: "Future Farm"
  },
]
export default function InvestmentSection() {
  return (
    <>
      <SectionComponent id="investment" _background="min-h-screen bg-light ">
        <div>
          <span data-aos="zoom-in"
          data-aos-duration="2000" className="text-4xl font-bold">Our Investment Themes</span>
        </div>
        <div  data-aos="fade-up"  data-aos-duration="2000" className = "grid grid-row-2 grid-cols-3 lg:grid-row-1 lg:grid-cols-6 xl:grid-row-1 xl:grid-cols-6 grid-flow-row gap-6">
          {
            (investList ?? []).map((item, index)=>(
              <InvestmentCard key={index} title={item?.title ?? ''} img= {item?.image ?? ''} />
            ))
          }
        </div>
      </SectionComponent>
      <SectionComponent id="about-us" _background="bg-dark min-h-screen ">
        <div
          className="flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {(text.split(' ') ?? [])?.map((wordContent, wordIndex) => (
            <div
              key={wordIndex}
              className="p-2 lg:p-4 xl:p-4 text-white delay-200"
            >
              {wordContent}
            </div>
          ))}
        </div>
      </SectionComponent>
    </>
  )
}
