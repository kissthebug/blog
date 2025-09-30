'use client'
import { useEffect } from 'react'

import fluidCursor from '../../hooks/use-fluid-cursor'

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor()
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-10">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  )
}
export default FluidCursor
