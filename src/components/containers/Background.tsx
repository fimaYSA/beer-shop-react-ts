import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  background: 'paper' | 'white'
}

export const Background = ({ background, children }: Props) => {
  const style =
    background === 'paper' ? 'bg-[url(images/background/paper_BG.svg)] bg-center' : 'bg-white'

  return (
    <section className={'px-3.75 ' + style}>
      <div className='mx-auto max-w-[1110px]'>{children}</div>
    </section>
  )
}
