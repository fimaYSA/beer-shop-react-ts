import { PATHS } from '@/common/routing/routesConstants.ts'
import { NavLink } from 'react-router'

type Nav = Array<{ to: string; label: string }>

type Props = {
  direction: 'row' | 'col'
  onCloseMenu?: () => void
}

const navItems: Nav = [
  { to: PATHS.Catalog, label: 'Каталог' },
  { to: PATHS.Distribution, label: 'Дистрибуция' },
  { to: PATHS.Equipment, label: 'Комплектация магазинов' },
  { to: PATHS.About, label: 'О компании' },
  { to: PATHS.Contacts, label: 'Контакты' },
]

export function Nav({ direction, onCloseMenu }: Props) {
  const direct = direction === 'row' ? 'w-170 lg:w-[761px] justify-between' : 'flex-col gap-4.75'

  return (
    <nav className={'flex text-base leading-4.75 font-medium ' + direct}>
      {navItems.map((item) => {
        return (
          <NavLink to={item.to} key={item.to} onClick={onCloseMenu}>
            {({ isActive }) => (
              <span className={isActive ? 'text-[#FDCF55]' : ''}>{item.label}</span>
            )}
          </NavLink>
        )
      })}
    </nav>
  )
}
