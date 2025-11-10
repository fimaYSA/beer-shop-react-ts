import { useEffect, useState } from 'react'

type Nav = {
  links: Array<{ name: string }>
}

type Props = {
  direction: 'row' | 'col'
}

export function Nav({ direction }: Props) {
  const [navData, setNavData] = useState<Nav | null>(null)

  const direct = direction === 'row' ? 'w-170 lg:w-[761px] justify-between' : 'flex-col gap-4.75'

  useEffect(() => {
    fetch('/data/nav.json')
      .then((res) => res.json())
      .then((json) => setNavData(json))
  }, [])

  return (
    <nav className={'flex font-medium leading-4.75 text-base ' + direct}>
      {navData?.links.map((l) => {
        return <div key={l.name}>{l.name}</div>
      })}
    </nav>
  )
}
