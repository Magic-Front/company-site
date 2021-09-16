import React from 'react'

export default function TitleComponent(props) {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-dark">
      <div className="container mx-auto px-6 lg:px-12 xl:px-64">
        <div>
          {
            (props?.titles ?? []).map((text, i) => {
              return <div className="text-6xl md:text-8xl lg:text-8xl xl:text-8xl font-bold pt-7 text-white animate-default">
                {
                  text?.map((t, j)=>(
                    i===0&&j===2||i===1?
                    <span data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay={ i*700 + j*300 } data-aos-offset="0" key={j} class="pr-12 text-black">{t}</span>:
                    <span data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay={ i*700 + j*300 } data-aos-offset="0" key={j} class="pr-12">{t}</span>
                  ))
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}
