import { connectData } from '@/data/connect.ts'
import { IconMail } from '@/components/icon/IconMail.tsx'
import { IconPhone } from '@/components/icon/IconPhone.tsx'

type Props = {
  connect: 'phone' | 'email'
  iconColor: 'green' | 'yellow'
}

export const Connection = ({ connect, iconColor }: Props) => {
  const items = connect === 'phone' ? connectData[connect].numbers : connectData[connect].emails

  const color = iconColor === 'green' ? '#769B54' : '#FDCF55'
  return (
    <ul className='flex flex-col gap-4.75'>
      {items.map((p, i) => {
        return (
          <li className='flex items-center gap-3.5' key={i}>
            {connect === 'phone' ? <IconPhone iconColor={color} /> : <IconMail iconColor={color} />}
            <p>{p}</p>
          </li>
        )
      })}
    </ul>
  )
}
