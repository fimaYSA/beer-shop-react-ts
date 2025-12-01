import { NavLink } from 'react-router'
import { PATHS } from '@/common/routing/routesConstants.ts'

type OwnProps = {
  direction: 'row' | 'col'
}

export function Logo({ direction }: OwnProps) {
  let direct
  let heightImg

  if (direction === 'col') {
    direct = 'flex-col gap-1.25 items-center text-[17px] md:text-[35px] leading-3 md:leading-10.25'
    heightImg = 'h-[55px] md:h-[111px]'
  }

  if (direction === 'row') {
    direct = 'gap-2.25 items-center text-[23px] md:text-[40px] leading-4.25 md:leading-11.75'
    heightImg = 'h-[58px] md:h-[97px]'
  }

  return (
    <NavLink to={PATHS.Home} className={'z-10'}>
      <div className={direct + ' flex'}>
        <img className={heightImg} src={`${import.meta.env.BASE_URL}images/logo.svg`} alt='logo' />
        <p className='font-Roboto uppercase'>Wunderbeer</p>
      </div>
    </NavLink>
  )
}
