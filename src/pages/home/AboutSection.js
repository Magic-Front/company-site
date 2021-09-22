import React from 'react'
import SectionComponent from 'components/SectionComponent'
import TitleComponent from 'components/TitleComponent'
import Data from './JsonData'

const titles = Data.about.titles
const classesTitle = Data.about.classesTitle
const topics = Data.about.topics
const classesTopic = Data.about.classesTopic

export default function AboutSection() {
  return (
    <>
      <SectionComponent _background="bg-dark h-screen">
        {titles.map((title, i) => {
          return (
            <div
              className="flex text-6xl md:text-7xl lg:text-7xl xl:text-7xl font-bold pt-7"
              key={i}
            >
              {title?.map((t, j) => (
                <TitleComponent
                  titles={[t]}
                  classes={classesTitle}
                  isAnimate={true}
                  _aos="fade-zoom-in"
                  _duration="500"
                  _delay={i * 700 + j * 300}
                  key={j}
                />
              ))}
            </div>
          )
        })}
      </SectionComponent>
      <SectionComponent _background="bg-white h-full">
        <div className="lg:px-12 xl:px-64 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-28 mb-36">
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
