import { PATS } from '@/common/routing/routesConstants.ts'
import { NavLink } from 'react-router'

type Nav = Array<{ to: string; label: string }>

type Props = {
  direction: 'row' | 'col'
}

const navItems: Nav = [
  { to: PATS.Catalog, label: 'Каталог' },
  { to: PATS.Distribution, label: 'Дистрибуция' },
  { to: PATS.Equipment, label: 'Комплектация магазинов' },
  { to: PATS.About, label: 'О компании' },
  { to: PATS.Contacts, label: 'Контакты' },
]

export function Nav({ direction }: Props) {
  const direct = direction === 'row' ? 'w-170 lg:w-[761px] justify-between' : 'flex-col gap-4.75'

  return (
    <nav className={'flex font-medium leading-4.75 text-base ' + direct}>
      {navItems.map((item) => {
        return (
          <NavLink to={item.to} key={item.to}>
            {({ isActive }) => (
              <span className={isActive ? 'text-[#FDCF55]' : ''}>{item.label}</span>
            )}
          </NavLink>
        )
      })}
    </nav>
  )
}
