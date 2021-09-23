import React from 'react'
import ProjectComponent from 'components/ProjectComponent'
import SectionComponent from 'components/SectionComponent'
import TitleComponent from 'components/TitleComponent'
import SidebarComponent from 'components/SidebarComponent'
import Data from './Data'

const titles = Data.project.titles
const classes = Data.project.classes
const images = Data.project.images
const options = Data.project.options
export default function ProjectSection() {
	return (
		<div>
			<SectionComponent>
				<TitleComponent titles={titles} classes={classes} />
			</SectionComponent>
			<div className="relative">
				<SidebarComponent options={options} />
				{images.map((image, i) => {
					return (
						<div key={i}>
							<SectionComponent>
								<ProjectComponent _class={image._class} _url={image._url} />
							</SectionComponent>
							<div className="h-half bg-light"></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
