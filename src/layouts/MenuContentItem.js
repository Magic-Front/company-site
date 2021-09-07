import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuContentItem({ label = '', to = '' }) {
  return (
    <div className="m-3">
      <Link to={to || '/'}>
        <div className="text-8xl font-bold">{label ?? ''}</div>
      </Link>
    </div>
  )
}
