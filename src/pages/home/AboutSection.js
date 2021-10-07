import SectionComponent from 'components/SectionComponent'
import React from 'react'
import Data from './Data'

const topics = Data.about.topics
const text = Data.about.title.text

export default function AboutSection() {
  return (
    <>
      <SectionComponent id="about-us" _background="bg-dark min-h-screen ">
        <div className="flex flex-wrap text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          {(text.split(' ') ?? [])?.map((wordContent, wordIndex) => (
            <div
              key={wordIndex}
              className="p-6 text-white"
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
            {topics?.textList
              ?.slice(0, topics?.textList?.length / 2)
              .map((topic, i) => {
                return (
                  <div
                    className="pt-40"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={i}
                  >
                    <div className={topics.topicClass.subClass}>
                      {topic.subTitle}
                    </div>
                    <div className={topics.topicClass.contentClass}>
                      {topic.content}
                    </div>
                  </div>
                )
              })}
          </div>
          <div>
            {topics?.textList
              ?.slice(topics?.textList?.length / 2, topics?.textList?.length)
              .map((topic, i) => {
                return (
                  <div
                    className="pt-40"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={i}
                  >
                    <div className={topics.topicClass.subClass}>
                      {topic.subTitle}
                    </div>
                    <div className={topics.topicClass.contentClass}>
                      {topic.content}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </SectionComponent>
    </>
  )
}
