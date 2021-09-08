import { Fade } from '@material-ui/core'
import React from 'react'
import MenuContentItem from './MenuContentItem'

export default function MenuContent({ open = false }) {
  return (
    <div>
      <Fade in={Boolean(open)}>
        <div className="z-10 fixed top-0 left-0 h-screen w-screen bg-white flex justify-center items-end flex-col p-14">
          <MenuContentItem
            open={Boolean(open)}
            delay={100}
            label="Services"
            to=""
          />
          <MenuContentItem
            open={Boolean(open)}
            delay={200}
            label="Projects"
            to=""
          />
          <MenuContentItem
            open={Boolean(open)}
            delay={300}
            label="Testimonials"
            to=""
          />
          <MenuContentItem
            open={Boolean(open)}
            delay={400}
            label="Contacts"
            to=""
          />
        </div>
      </Fade>
    </div>
  )
}
