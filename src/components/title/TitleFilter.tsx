import { Wheat } from '@/components/Wheat.tsx'

type OwnProps = {
  title: string
}

export function TitleFilter({ title }: OwnProps) {
  return (
    <div className={'flex w-full items-center justify-center gap-2.5'}>
      <Wheat fill='#FDCF55' w={29} h={11} />

      <h2 className={'font-Roboto text-lg leading-5.25 font-medium uppercase'}>{title}</h2>

      <Wheat fill='#FDCF55' rotate={180} w={29} h={11} />
    </div>
  )
}
