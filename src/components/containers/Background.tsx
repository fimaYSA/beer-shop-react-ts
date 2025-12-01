import type { ReactNode } from 'react'
import { cn } from '@sglara/cn'

type Props = {
  children: ReactNode
  background: 'paper' | 'white' | 'hop'
  blackOut?: number
}

export const Background = ({ background, blackOut = 0, children }: Props) => {
  const baseUrl = import.meta.env.BASE_URL
  let style
  if (background === 'hop')
    style = { backgroundImage: `url(${baseUrl}images/background/hop_parallax.jpg` }
  if (background === 'paper')
    style = { backgroundImage: `url(${baseUrl}images/background/paper_BG.svg` }
  if (background === 'white') style = { backgroundColor: 'white' }

  return (
    <section
      style={style}
      className={cn([background === 'hop' && 'bg-cover bg-no-repeat'], 'bg-center')}
    >
      <div className={`px-3.75 bg-black/${blackOut}`}>
        <div className='mx-auto max-w-[1110px]'>{children}</div>
      </div>
    </section>
  )
}
