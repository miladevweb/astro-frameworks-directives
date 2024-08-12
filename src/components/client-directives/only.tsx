import { Index } from './index'

export function Only () {
  return (
    <Index directive='only' url='/image4.webp'>
        <p>
          The <span className="font-medium">only</span> directive loads and hydrates the component only on the client side.
        </p>
    </Index>
  )
}
