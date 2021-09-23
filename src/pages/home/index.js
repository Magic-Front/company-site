import React from 'react'
import Layout from '../../layouts'
import IntroSection from './IntroSection'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'

export default function Home() {
	return (
		<Layout fullWidth={true}>
			<IntroSection />
			<AboutSection />
			<ProjectSection />
		</Layout>
	)
}
