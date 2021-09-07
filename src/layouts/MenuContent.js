import { Fade } from '@material-ui/core'
import React from 'react'
import MenuContentItem from './MenuContentItem'

export default function MenuContent({ open = false }) {
  return (
    <div>
      <Fade in={Boolean(open)}>
        <div className="fixed top-0 left-0 h-full w-full bg-white flex justify-center items-end flex-col p-14">
          <MenuContentItem label="Project" to="" />
          <MenuContentItem label="Service" to="" />
        </div>
      </Fade>
    </div>
  )
}
