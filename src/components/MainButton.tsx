type OwnProps = {
  title: string
  width?: number
  height?: number
  bgColor?: '#FDCF55' | '#FFF'
  textColor?: string
}

export function MainButton({
  title,
  width = 256,
  height = 52,
  bgColor = '#FDCF55',
  textColor = '#000',
}: OwnProps) {
  return (
    <button
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
      }}
      className='rounded-full text-base'
    >
      {title}
    </button>
  )
}
