import { useEffect, useState } from 'react'

type Nav = {
  links: Array<{ name: string }>
}

export function Nav() {
  const [navData, setNavData] = useState<Nav | null>(null)

  useEffect(() => {
    fetch('/data/nav.json')
      .then((res) => res.json())
      .then((json) => setNavData(json))
  }, [])

  return (
    <nav className='w-[761px] flex justify-between font-medium leading-4.75 text-base'>
      {navData?.links.map((l) => {
        return <div key={l.name}>{l.name}</div>
      })}
    </nav>
  )
}
