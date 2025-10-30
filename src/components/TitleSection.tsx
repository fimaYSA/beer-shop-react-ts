import { Wheat } from './Wheat.tsx'

type OwnProps = {
  title: string
  color: string
  position: 'start' | 'center' | 'end'
  fill?: '#FDCF55' | '#769B54'
}

export function TitleSection({ title, color, position, fill }: OwnProps) {
  return (
    <div className={`flex flex-col gap-1.25 items-${position}`}>
      <div className={'flex gap-7.5 '}>
        <Wheat fill={fill} />
        <Wheat fill={fill} rotate={180} />
      </div>
      <h2 style={{ color: color }} className='font-medium text-[35px] leading-10.5'>
        {title}
      </h2>
    </div>
  )
}
