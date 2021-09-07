import { Fade, Slide } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuContentItem({
  open = false,
  label = '',
  to = '',
  delay = 1000,
}) {
  return (
    <Slide in={Boolean(open)} direction="down" timeout={{ enter: delay }}>
      <div className="m-3 overflow-hidden">
        <Fade in={Boolean(open)} timeout={{ enter: delay }}>
          <Link to={to || '/'}>
            <div className="text-8xl font-bold">{label ?? ''}</div>
          </Link>
        </Fade>
      </div>
    </Slide>
  )
}
