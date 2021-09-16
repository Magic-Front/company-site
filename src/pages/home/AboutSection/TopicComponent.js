import React from 'react'

export default function TopicComponent(props) {
  return (
    <div className="h-full xl:h-screen w-full flex justify-center bg-white">
      <div className="container mx-auto px-6 pb-16 lg:px-12 xl:px-64 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-28">
        <div className="lg:pr-32 xl:pr-32">
          {
            props?.topics?.slice(0, props?.topics?.length/2).map((topic, i)=>{
              return(
                <div key={i} className="pt-40" data-aos="fade-up" data-aos-duration="3000" >
                  <h1 className="px-6 text-4xl md:text-6xl lg:text-7xl font-bold text-black">{topic?.header}</h1>
                  <p className="text-xl pt-14">
                    {topic?.body}
                  </p>
                </div>
              )
            })
          }
        </div>
        <div>
          {
            props?.topics?.slice(props?.topics?.length/2, props?.topics?.length).map((topic, i)=>{
              return(
                <div key={i} className="pt-40" data-aos="fade-up" data-aos-duration="3000" >
                  <h1 className="px-6 text-4xl md:text-6xl lg:text-7xl font-bold text-black">{topic?.header}</h1>
                  <p className="text-xl pt-14">
                    {topic?.body}
                  </p>
                </div>
              )
            })
          }        
        </div>
      </div>
    </div>
  )
}
