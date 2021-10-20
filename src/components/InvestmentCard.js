import React from 'react'
import defaultImage from '../assets/images/0003.jpg'

export default function InvestmentCard({ img = '', title = ''}) {
	return (
		<div className="bg-white p-8 mt-8 h-64">
			<img
				src={img || defaultImage}
				className="w-full h-28 object-cover"
				alt={title || 'Investment News'}
			/>
			<div className="pt-8 text-xl font-bold text-black">
				{title ?? ''}
			</div>
		</div>
	)
}
