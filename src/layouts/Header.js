import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
  return (
    <header>
      <div className="flex justify-between m-8">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
