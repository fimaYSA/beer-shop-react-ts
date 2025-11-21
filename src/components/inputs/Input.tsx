import { cn } from '@sglara/cn'

type Props = {
  inputType: 'name' | 'number' | 'email'
  border: boolean
  background: boolean
}

export function Input({ inputType, background, border }: Props) {
  const type = inputType === 'name' ? 'text' : inputType
  let placeholder
  switch (inputType) {
    case 'number':
      placeholder = 'Ваш номер'
      break
    case 'email':
      placeholder = 'Ваш email'
      break
    default:
      placeholder = 'Ваше имя'
  }

  return (
    <input
      name={inputType}
      type={type}
      placeholder={placeholder}
      className={cn(
        [background && 'bg-white/50', border && 'border border-[#C7C7C7]'],
        'w-full rounded-[5px] px-4.5 py-4 text-base leading-4.75 font-normal text-black',
      )}
    />
  )
}
