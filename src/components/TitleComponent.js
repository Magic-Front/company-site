import React from 'react'

export default function TitleComponent({
	titles = [],
	classes = [],
	isAnimate = false,
	_aos = '',
	_duration = '',
	_delay = '',
}) {
	return (
		<>
			{titles.map((title, i) => {
				return (
					<div
						className={classes[i]}
						data-aos={isAnimate && _aos}
						data-aos-duration={isAnimate && _duration}
						data-aos-delay={isAnimate && _delay}
						key={i}
					>
						{title}
					</div>
				)
			})}
		</>
	)
}
