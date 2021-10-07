import { Fade } from '@material-ui/core'
import SectionComponent from 'components/SectionComponent'
import TitleComponent from 'components/TitleComponent'
import React from 'react'
import Data from './Data'

const topics = Data.about.topics
const classesTopic = Data.about.classesTopic

const text =
  'Founded in 2021, Impactful Capital helps entrepreneurs launch projects that have a positive impact on people and planet.'

export default function AboutSection() {
  return (
    <>
      <SectionComponent id="about-us" _background="bg-dark min-h-screen ">
        <div className="flex flex-wrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {(text.split(' ') ?? [])?.map((wordContent, wordIndex) => (
            <div
              key={wordIndex}
              data-aos="fade-zoom-in"
              data-aos-duration={500}
              data-aos-delay={wordIndex * 300}
            >
              {wordContent}
            </div>
          ))}
        </div>
      </SectionComponent>
      <SectionComponent _background="bg-white h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-28 mb-36">
          <div className="lg:pr-28 xl:pr-28">
            {topics?.slice(0, topics?.length / 2).map((topic, i) => {
              return (
                <div
                  className="pt-40"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={i}
                >
                  <TitleComponent titles={topic} classes={classesTopic} />
                </div>
              )
            })}
          </div>
          <div>
            {topics
              ?.slice(topics?.length / 2, topics?.length)
              .map((topic, i) => {
                return (
                  <div
                    className="pt-40"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={i}
                  >
                    <TitleComponent titles={topic} classes={classesTopic} />
                  </div>
                )
              })}
          </div>
        </div>
      </SectionComponent>
    </>
  )
}
