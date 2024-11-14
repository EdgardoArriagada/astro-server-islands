'use client'

import { useState } from 'react'

export function SwitchShow({ children }) {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={isOn} onChange={toggleSwitch} />
        Toggle
      </label>
      {isOn && <div>{children}</div>}
    </div>
  )
}
