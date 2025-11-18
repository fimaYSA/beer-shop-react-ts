import { MainButton } from '@/components/inputs/MainButton.tsx'
import { Input } from '@/components/inputs/Input.tsx'

export function FormAnyQuestions() {
  return (
    <form
      className='h-91 w-72.5 rounded-[5px] bg-[url(images/background/hop_parallax.jpg)] bg-cover
        bg-center bg-no-repeat lg:w-63.75'
    >
      <div className='h-full rounded-[5px] bg-black/50 px-5 py-4.25'>
        <h2 className='text-[22px] leading-6.5 font-medium text-white'>Остались вопросы?</h2>

        <p className='mt-3 text-sm leading-4.25 font-medium text-white'>
          Оставьте свой номер телефона, и мы Вам поможем
        </p>

        <div className='mt-4 flex flex-col gap-2.5'>
          <Input inputType='name' />
          <Input inputType='number' />
        </div>

        <p className='pt-3 text-[11px] leading-3.25 font-normal text-white'>
          Нажимая на кнопку “отправить”, вы даете согласие на обработку своих{' '}
          <span className='text-main-yellow'>персональных данных</span>
        </p>
        <div className='mt-8.75 h-10.25'>
          <MainButton title='Отправить' bgColor='#FDCF55' />
        </div>
      </div>
    </form>
  )
}
