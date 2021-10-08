import React, { useState, useEffect } from 'react'
import SectionComponent from 'components/SectionComponent'
import NewsComponent from 'components/NewsComponent'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { Button } from '@material-ui/core'

const textList = [
  {
    url: '0001.jpg',
    author: 'By Wendy Wei',
    title: "China's successful elimination of malaria, and its global impact",
    content: 'Senior Program Officer, Malaria',
  },
  {
    url: '0003.jpg',
    author: 'By Anita Zaidi',
    title:
      'Geographically distributed manufacturing capacity is needed for improved global health security',
    content:
      'President, Gender Equality and Director, Vaccine Development and Surveillance, and Director, EDD, Bill Melinda Gates Foundation',
  },
  {
    url: '0004.jpg',
    author: 'By Cheikh Oumar Seydi',
    title:
      'As COVID-19 cases surge, African institutions lead response efforts',
    content: 'Director, Africa, Bill & Melinda Gates Foundation',
  },
  {
    url: '0002.jpg',
    author: 'By Mark Suzman',
    title: 'Work in progress: An update on our DEII journey',
    content: 'Chif Executive Officer, Bill & MElinda Gates Foundation',
  },
]
const text =
  'Founded in 2021, Impactful Capital helps entrepreneurs launch projects that have a positive impact on people and planet.'
export default function AboutSection() {
  const [unitStamp, setUnitStamp] = useState(150)
  useEffect(() => {
    setUnitStamp(Math.floor(3000 / text?.split(' ').length / 50) * 50)
  }, [])
  return (
    <>
      <SectionComponent id="ideas" _background="bg-light min-h-screen ">
        <div className="flex flex-wrap text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          <div className="m-auto mb-8 text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-extrabold text-center text-title">
            Heaifng : Our Ideas
          </div>
        </div>
      </SectionComponent>
      <SectionComponent _background="bg-white min-h-screen pt-40">
        <div className="flex justify-between">
          <div className="text-4xl text-black font-bold">Latest updates</div>
          <div className="p-5">
            <Button>
              <ArrowBack />
            </Button>
            <Button>
              <ArrowForward />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-10 mb-36">
          {textList.map((topic, i) => {
            return (
              <div
                key={i}
                className="pt-40"
                data-aos="fade-zoom-in"
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <NewsComponent data={topic} />
              </div>
            )
          })}
        </div>
      </SectionComponent>
    </>
  )
}
