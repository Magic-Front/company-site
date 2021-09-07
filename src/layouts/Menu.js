import React, { useState } from 'react'
import MenuButton from './MenuButton'
import MenuContent from './MenuContent'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((s = false) => !Boolean(s))

  return (
    <div>
      <MenuButton onClick={toggleOpen} />
      <MenuContent open={Boolean(isOpen)} />
    </div>
  )
}
