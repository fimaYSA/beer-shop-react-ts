import { Wheat } from '@/components/Wheat.tsx'

type OwnProps = {
  title: string
  position: 'start' | 'center' | 'end'
  fill?: '#FDCF55' | '#769B54'
  color?: string
  wheat?: boolean
}

export function TitleSection({ title, color, position, fill, wheat = true }: OwnProps) {
  const style = wheat ? 'md:text-[35px] md:leading-10.5' : 'md:text-[30px] md:leading-9'

  return (
    <div className={`flex flex-col gap-1.25 items-${position}`}>
      {wheat && (
        <div className={'flex gap-7.5'}>
          <Wheat fill={fill} />
          <Wheat fill={fill} rotate={180} />
        </div>
      )}
      <h2 style={{ color: color }} className={'text-[25px] leading-7.5 font-medium ' + style}>
        {title}
      </h2>
    </div>
  )
}
