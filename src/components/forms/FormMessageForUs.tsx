import { MainButton } from '@/components/inputs/MainButton.tsx'
import { Input } from '@/components/inputs/Input.tsx'
import { Textarea } from '@/components/inputs/Textarea.tsx'

export function FormMessageForUs() {
  return (
    <form>
      <h2 className='w-8/10 text-[25px] leading-7.5 font-medium lg:text-[30px]'>
        Оставьте для нас сообщение и мы ответим
      </h2>

      <div className='mt-3.5 flex flex-col gap-3.5 lg:mt-6.75 lg:flex-row lg:gap-7.5'>
        <Input inputType='name' border={true} background={false} />
        <Input inputType='email' border={true} background={false} />
      </div>

      <div className='mt-3.75 lg:mt-2.5'>
        <Textarea />
        <p className='mt-3.75 text-[11px] leading-3.25 font-normal sm:mt-2.5'>
          Нажимая на кнопку “отправить”, вы даете согласие на обработку своих
          <span className='text-main-yellow'>персональных данных</span>
        </p>
      </div>

      <div className='mx-auto mt-7.25 h-11 w-60 sm:mt-5 lg:mx-0'>
        <MainButton title='Отправить' bgColor='#FDCF55' />
      </div>
    </form>
  )
}
