import React from 'react'

export default function SectionComponent({
  children = <></>,
  _background = 'bg-light h-screen',
}) {
  return (
    <div className={`w-full flex justify-center items-center ${_background}`}>
      <div className="container mx-auto px-6 lg:px-52 xl:px-64">{children}</div>
    </div>
  )
}
