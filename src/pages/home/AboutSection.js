import SectionComponent from 'components/SectionComponent'
import React from 'react'

const textList = [
  {
    subTitle: 'Ruby',
    content:
      'We specialize in Ruby on Rails programming with frontend part done with React (with Redux), Backbone, SASS and PostCSS, ES2015 and СoffeeScript, Gulp, Webpack. Also, we do fancy stuff, like Flash, Unity, WebGL, and Canvas.',
  },
  {
    subTitle: '24/7',
    content:
      'All our team members work in-house. To better interact with our clients from different parts of the world, we form a team with an individual schedule for every project. We’ll make sure to have several working hours overlap with your team wherever you are.',
  },
  {
    subTitle: 'Scrum',
    content:
      'We use scrum methodology and task tracking tools. You know exactly which part of the project is already done and what we are doing right now. No risk for the deadline.',
  },
  {
    subTitle: 'Long-term',
    content:
      'We can save a project with a fast-approaching deadline or develop a project from scratch. Majority of our clients have worked with us for many years.  90% of our clients choose to work with us again, for 75% of them we have done 5 or more projects.',
  },
]
const text = 'Founded in 2021, Impactful Capital helps entrepreneurs launch projects that have a positive impact on people and planet.'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-20 mb-36">
            {textList.map((topic, i) => {
                return (
                  <div
                    className="pt-40"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={i}
                  >
                    <div className='px-3 text-5xl md:text-7xl lg:text-7xl font-bold text-black'>
                      {topic.subTitle}
                    </div>
                    <div className='text-lg pt-14'>
                      {topic.content}
                    </div>
                  </div>
                )
              })}
        </div>
      </SectionComponent>
    </>
  )
}
