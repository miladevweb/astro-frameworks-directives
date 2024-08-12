import { useEffect } from 'react'

type Props = Readonly<{
  url: string
  directive: string
  children: React.ReactNode
}>

export function Index({ url, directive, children }: Props) {
  return (
    <section className="col-content border-2 border-gray-600 px-4 py-5">
      <h2 className="font-medium text-3xl">client:{directive}</h2>

      {children}

      <picture className="inline-block w-full aspect-video mt-3">
        <source
          type="image/webp"
          srcSet={url}
        />

        <img
          src={url}
          alt="#"
          className="size-full object-cover"
        />
      </picture>
    </section>
  )
}
