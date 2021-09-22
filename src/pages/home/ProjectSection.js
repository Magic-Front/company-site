import React from 'react'
import ImageComponent from 'components/ImageComponent'
import SectionComponent from 'components/SectionComponent'
import TitleComponent from 'components/TitleComponent'
import Data from './Data'

const titles = Data.project.titles
const classes = Data.project.classes
const images = Data.project.images
export default function ProjectSection() {
  return (
    <>
      <SectionComponent>
        <TitleComponent titles={titles} classes={classes} />
      </SectionComponent>
      {images.map((image, i) => {
        return (
          <div key={i}>
            <SectionComponent>
              <ImageComponent _class={image._class} _url={image._url} />
            </SectionComponent>
            <div className="h-half bg-light"></div>
          </div>
        )
      })}
    </>
  )
}
