import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
  return (
    <header className="w-full fixed z-10 bg-white m-auto">
      <div className="flex justify-between m-12 items-center">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
