import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const BgPaper = ({ children }: Props) => (
  <section className='bg-[url(images/background/paper_BG.svg)] bg-center px-3.75'>
    <div className='mx-auto max-w-[1110px]'>{children}</div>
  </section>
)
