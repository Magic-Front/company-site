import React from 'react'

export default function Logo() {
  return (
    // <div className="z-50 fixed">
    //   <div className="text-xl font-bold"><font className="text-orange">Impactful</font> <font className=" text-light">Capital</font></div>
    // </div>
    <>
      <div className="fixed z-20 mt-4 left-8">
        <font className="text-xl font-bold text-orange">Impactful</font>{' '}
      </div>
      <div className="fixed mix-blend-exclusion z-20 mt-4 left-32">
        <font className="text-xl font-bold text-light">Capital</font>
      </div>
    </>
  )
}
