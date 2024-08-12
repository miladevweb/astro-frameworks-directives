import { Index } from './index'
import { useEffect } from 'react'

export function Load() {
  // We need to put the scroll in any React Component, except for the client:only component because the one is rendered and hydrated on the client side, not in the main or root layout.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <Index
      directive="load"
      url="/image1.webp"
    >
      <p>
        The <span className="font-medium">load</span> directive is like DOMContentLoaded event, both fire after document has been loaded.
      </p>
    </Index>
  )
}
