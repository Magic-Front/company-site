import React from 'react'

export default function BlogComponent({}) {
	return (
		<div className="pt-40" data-aos="fade-up" data-aos-duration="3000" key={i} >
		<div className="px-3 text-5xl md:text-7xl lg:text-7xl font-bold text-black">
			{topic.subTitle}
		</div>
		<div className="text-lg pt-14">
			{topic.content}
		</div>
		</div>
	)
}
