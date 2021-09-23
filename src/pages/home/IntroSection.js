import React from 'react'
import SectionComponent from 'components/SectionComponent'
import TitleComponent from 'components/TitleComponent'
import Data from './Data'

const titles = Data.intro.titles
const classes = Data.intro.classes
const _aos = Data.intro._aos
const _duration = Data.intro._duration

export default function IntroSection(children = <></>) {
	return (
		<SectionComponent>
			<TitleComponent
				titles={titles}
				classes={classes}
				_aos={_aos}
				_duration={_duration}
				isAnimate={true}
			/>
		</SectionComponent>
	)
}
