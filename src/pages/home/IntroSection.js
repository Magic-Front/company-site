import React from 'react'

export default function IntroSection() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-64" >
        <h1 className="mb-8 text-9xl font-extrabold" data-aos="fade-up" data-aos-duration="3000">Heading</h1>
        <h2 className="mb-16 text-5xl font-bold" data-aos="fade-up" data-aos-duration="3000">Sub Heading</h2>
        <p className="text-xl delay-1000" data-aos="fade-up" data-aos-duration="3000">
          This is test content. it will be replaced with real content. at the
          moment they are demo.
        </p>
      </div>
    </div>
  )
}
