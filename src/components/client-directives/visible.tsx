import { Index } from './index'

export function Visible() {
  return (
    <Index
      directive="visible"
      url="/image3.webp"
    >
      <p>
        The <span className="font-medium">visible</span> directive loads once the component has entered the user's viewport. It means the component is rendered on the server, but its javascript logic
        is hydrated when it enters the user's viewport. This uses an IntersectionObserver internally.
      </p>

      <p>It can also have rootMargin like an instance of IntersectionObserver.</p>
    </Index>
  )
}
