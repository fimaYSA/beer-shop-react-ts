import { connectData } from '@/data/connect.ts'
import { IconPoint } from '@/components/icon/IconPoint.tsx'

type Props = {
  isIcon: boolean
}

export const Location = ({ isIcon }: Props) => (
  <div className='flex items-center gap-3.5'>
    {isIcon && <IconPoint iconColor='#FDCF55' />}
    <p>{connectData.location.point}</p>
  </div>
)
