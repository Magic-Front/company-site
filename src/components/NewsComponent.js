import React from 'react'
import defaultImage from '../assets/images/0003.jpg'

export default function NewsComponent({ img = '', author = '', title='', content='' }) {
	return (
		<div>
			<img
				src={img || defaultImage}
				className="w-full h-60 object-cover"
				alt={title || 'Investment News'}
			/>
			<div className="pt-6 text-xl lg:text-2xl font-bold text-black">
				{title ?? ''}
			</div>
			<div className="text-lg pt-4 text-black">{author ?? ''}</div>
			<div className="text-lg pt-4">{content ?? ''}</div>
		</div>
	)
}
