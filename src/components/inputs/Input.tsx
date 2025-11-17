type Props = {
  inputType: 'name' | 'number' | 'email'
}

export function Input({ inputType }: Props) {
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
      type={type}
      placeholder={placeholder}
      className='rounded-[5px] bg-white/50 px-4.5 py-4 text-base leading-4.75 font-normal'
    />
  )
}
