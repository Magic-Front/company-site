import React from 'react'

export default function SectionComponent({
  children = <></>,
  _background = 'bg-light h-screen',
  ...props
}) {
  return (
    <div
      {...props}
      className={`w-full flex justify-center items-center ${_background}`}
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-28 xl:px-32">
        {children}
      </div>
    </div>
  )
}
