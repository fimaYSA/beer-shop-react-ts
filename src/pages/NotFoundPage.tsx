import { NavLink } from 'react-router'
import { PATS } from '@/common/routing/routesConstants.ts'

export function NotFoundPage() {
  return (
    <div
      className='fle mx-auto h-180 bg-[#222222] pt-70 text-center text-white lg:h-[967px]
        lg:pt-[350px]'
    >
      <h1
        className='text-main-yellow text-[150px] leading-37 font-normal lg:text-[300px]
          lg:leading-75'
      >
        404
      </h1>
      <p
        className='mb-4 text-3xl leading-5.5 font-normal -tracking-[0.6px] lg:mb-8.25
          lg:text-[50px]'
      >
        Такой страницы не сущетвует
      </p>
      <NavLink to={PATS.Home}>
        <span className='text-xs leading-5.5 font-normal -tracking-[0.6px] underline lg:text-xl'>
          Вернутся на главную страницу
        </span>
      </NavLink>
    </div>
  )
}
