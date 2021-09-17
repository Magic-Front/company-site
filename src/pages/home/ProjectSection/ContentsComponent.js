import React from 'react'
import ImageComponent from './ImageComponent'

export default function ContentsComponent() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-light">
      <div className="container mx-auto px-6 lg:px-12 xl:px-64">
        <div>
          <ImageComponent />
        </div>
      </div>
    </div>
  )
}
