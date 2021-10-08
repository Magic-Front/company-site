import React from 'react'
import defaultImage from '../assets/images/0003.jpg'

export default function ImageComponent({ img = '', data = {} }) {
  return (
    <div>
      <img
        src={img || defaultImage}
        className="w-full"
        alt={data?.title || 'Investment News'}
      />
      <div className="pt-6 text-xl lg:text-2xl font-bold text-black">
        {data?.title ?? ''}
      </div>
      <div className="text-lg pt-4 text-black">{data?.author ?? ''}</div>
      <div className="text-lg pt-4">{data?.content ?? ''}</div>
    </div>
  )
}
