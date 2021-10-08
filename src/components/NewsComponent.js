import React from 'react'
import img from '../assets/images/0003.jpg'

export default function ImageComponent({ data = {} }) {
	return (
		<div>
			{data?.url?(<img src={img} className="w-full" alt="project" />):null}
			<div className="pt-6 text-xl lg:text-2xl font-bold text-black">
				{ data?.title ?? '' }
			</div>
			<div className="text-lg pt-4 text-black">{ data?.author ?? '' }</div>
			<div className="text-lg pt-4">
				{ data?.content ?? '' }
			</div>
		</div>
	)
}
