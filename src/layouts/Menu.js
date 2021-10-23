import React from 'react'
import { useState } from 'react'
import MenuButton from './MenuButton'
import MenuContent from './MenuContent'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((s = false) => !Boolean(s))

  return (
    <>
      <div className="w-full fixed z-10 right-7">
        <MenuContent open={Boolean(isOpen)} onClick={toggleOpen} />
      </div>
      <div className="fixed mix-blend-exclusion z-20 mt-4 right-8">
        <MenuButton open={Boolean(isOpen)} onClick={toggleOpen} />
      </div>
    </>
  )
}
