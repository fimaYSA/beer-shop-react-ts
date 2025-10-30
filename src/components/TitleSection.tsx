import { Wheat } from './Wheat.tsx'

type OwnProps = {
  title: string
  color: string
  position: 'start' | 'center' | 'end'
}

export function TitleSection({ title, color, position }: OwnProps) {
  return (
    <div className={`flex flex-col gap-1.25 items-${position}`}>
      <div className={'flex gap-7.5 '}>
        <Wheat color={'#FDCF55'} />
        <Wheat color={'#FDCF55'} rotate={180} />
      </div>
      <h2 style={{ color: color }} className='font-medium text-[35px] leading-10.5'>
        {title}
      </h2>
    </div>
  )
}
