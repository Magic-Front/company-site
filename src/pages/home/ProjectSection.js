import React from 'react'
import ProjectComponent from 'components/ProjectComponent'
import SectionComponent from 'components/SectionComponent'
import Data from './Data'

export default function ProjectSection() {
  return (
    <div>
      <SectionComponent>
        <div className={Data.project.title.textClass}>
          {Data.project.title.text}
        </div>
      </SectionComponent>
      <div className="relative">
        <div className="absolute right-5 top-16 text-side lg:text-xl xl:text-2xl">
          {Data.project.subList.map((item, i) => {
            return <div key={i}>{item.name}</div>
          })}
        </div>
        {Data.project.images.imgList.map((imgItem, index) => {
          return (
            <div key={index}>
              <SectionComponent>
                <ProjectComponent
                  imgClss={Data.project.images.imgClss}
                  imgUrl={imgItem.url}
                />
              </SectionComponent>
              <div className="h-half bg-light"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
