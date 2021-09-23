import React from 'react'

export default function SidebarComponent({ options = [] }) {
	return (
		<div className="absolute right-5 top-16 text-side lg:text-xl xl:text-2xl">
			{options.map((item, i) => {
				return <div key={i}>{item}</div>
			})}
		</div>
	)
}
