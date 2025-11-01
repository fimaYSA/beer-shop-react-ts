type OwnProps = {
  direction: 'row' | 'col'
}

export function Logo({ direction }: OwnProps) {
  let direct
  if (direction === 'col') {
    direct = 'flex flex-col gap-1.25 items-center'
  }
  if (direction === 'row') {
    direct = 'flex gap-2.25 items-center'
  }

  return (
    <div className={direct}>
      <img src='/images/logo.svg' alt='logo' />
      <p className='font-logo text-[40px] leading-11.75 uppercase fam'>Wunderbeer</p>
    </div>
  )
}
