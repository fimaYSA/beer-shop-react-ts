import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  background: 'paper' | 'white' | 'hop'
  blackOut?: number
}

export const Background = ({ background, blackOut = 0, children }: Props) => {
  let style
  if (background === 'hop')
    style = 'bg-[url(images/background/hop_parallax.jpg)] bg-no-repeat  bg-center bg-cover'
  if (background === 'paper') style = 'bg-[url(images/background/paper_BG.svg)] bg-center'
  if (background === 'white') style = 'bg-white'

  return (
    <section className={style}>
      <div className={`px-3.75 bg-black/${blackOut}`}>
        <div className='mx-auto max-w-[1110px]'>{children}</div>
      </div>
    </section>
  )
}
