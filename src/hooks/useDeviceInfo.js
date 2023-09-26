import React from 'react'

const useDeviceInfo = () => {
  //Must check if window undefined due to the gatsby build on the server side has no window object

  const width = typeof window !== 'undefined' && window.innerWidth
  const height = typeof window !== 'undefined' && window.innerHeight
  const isMobile = width <= 767
  const isDesktopOrLaptop = width >= 767
  return { isMobile, height, width, isDesktopOrLaptop }
}

export default useDeviceInfo