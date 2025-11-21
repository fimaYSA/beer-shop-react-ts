import { MainButton } from '@/components/inputs/MainButton.tsx'
import { Input } from '@/components/inputs/Input.tsx'
import { Textarea } from '@/components/inputs/Textarea.tsx'
import { NavLink } from 'react-router'
import { PATHS } from '@/common/routing/routesConstants.ts'

type Props = {
  borderInput: boolean
  backgroundInput: boolean
}

export function FormMessageForUs({ borderInput, backgroundInput }: Props) {
  return (
    <form className='w-full max-w-135'>
      <h2 className='mb-5 text-[25px] leading-7.5 font-medium lg:text-[30px] xl:max-w-111'>
        Оставьте для нас сообщение и мы ответим
      </h2>

      <div className='flex flex-col gap-3.5 lg:flex-row lg:gap-7.5'>
        <Input inputType='name' border={borderInput} background={backgroundInput} />
        <Input inputType='email' border={borderInput} background={backgroundInput} />
      </div>

      <div className='mt-3.75 lg:mt-2.5'>
        <Textarea border={borderInput} background={backgroundInput} />
      </div>
      <div className='lg:text-center'>
        <p className='mt-3.75 text-[11px] leading-3.25 font-normal sm:mt-2.5'>
          Нажимая на кнопку “отправить”, вы даете согласие на обработку своих
          <NavLink to={PATHS.Policy} className='text-main-yellow'> персональных данных</NavLink>
        </p>
        <div className='mx-auto mt-5 h-11 w-60'>
          <MainButton title='Отправить' bgColor='#FDCF55' />
        </div>
      </div>
    </form>
  )
}
