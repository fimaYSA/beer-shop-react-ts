type OwnProps = {
  direction: 'row' | 'col'
}

export function Logo({ direction }: OwnProps) {
  let direct
  let heightImg
  if (direction === 'col') {
    direct = 'flex flex-col gap-1.25 items-center text-[35px] leading-10.25'
    heightImg = 'h-[111px]'
  }
  if (direction === 'row') {
    direct = 'flex gap-2.25 items-center text-[40px] leading-11.75'
    heightImg = 'h-[97px]'
  }

  return (
    <div className={direct}>
      <img className={heightImg} src='/images/logo.svg' alt='logo' />
      <p className='font-logo uppercase'>Wunderbeer</p>
    </div>
  )
}
