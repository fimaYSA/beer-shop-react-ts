type OwnProps = {
  title: string
  bgColor?: '#FDCF55' | '#FFF'
  textColor?: string
}

export function MainButton({ title, bgColor = '#FDCF55', textColor = '#000' }: OwnProps) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className='w-full h-full rounded-full leading-5.5 font-medium flex justify-center
        items-center'
    >
      {title}
    </button>
  )
}
