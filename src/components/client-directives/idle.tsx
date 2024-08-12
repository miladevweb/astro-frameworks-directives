import { Index } from './index'

export function Idle() {
  return (
    <Index
      directive="idle"
      url="/image2.webp"
    >
      <p>
        The <span className="font-medium">client</span> directive is similar to loaded event, both fire after document, styles and images have been loaded.
      </p>
    </Index>
  )
}
