import { Index } from './index'

export function Load() {
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
