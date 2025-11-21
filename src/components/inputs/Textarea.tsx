import { cn } from '@sglara/cn'

type Props = {
  border: boolean
  background: boolean
}

export function Textarea({ background, border }: Props) {
  return (
    <textarea
      name='message'
      placeholder='Ваше сообщение...'
      className={cn(
        [background && 'bg-white/50', border && 'border border-[#C7C7C7]'],
        `h-50.5 w-full rounded-[5px] px-4.5 py-4 text-base leading-4.75 font-normal text-black
        sm:h-[137px]`,
      )}
    />
  )
}
