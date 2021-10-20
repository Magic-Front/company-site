import SectionComponent from 'components/SectionComponent'
import React from 'react'

export default function IntroSection() {
  return (
    <SectionComponent _background = "bg-white h-screen">
      <div
        className="mb-8 text-8xl font-extrabold"
        data-aos="fade-up"
        data-aos-duration={3000}
        // data-aos-delay={isAnimate && _delay}
      >
        Investing for Impact
      </div>
      <div
        className="text-2xl delay-1000"
        data-aos="fade-up"
        data-aos-duration={3000}
        // data-aos-delay={isAnimate && _delay}
      >
        <span>Advisory & investment firm focused on building a better planet.</span>
      </div>
    </SectionComponent>
  )
}
