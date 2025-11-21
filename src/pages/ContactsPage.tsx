import { TitlePage } from '@/components/title/TitlePage.tsx'
import { Background } from '@/components/containers/Background.tsx'
import { TitleSection } from '@/components/title/TitleSection.tsx'
import { Connection } from '@/components/ui/Connection.tsx'
import { Location } from '@/components/Location.tsx'
import { FormMessageForUs } from '@/components/forms/FormMessageForUs.tsx'

export function ContactsPage() {
  return (
    <>
      <TitlePage title='Контакты' />
      <Background background={'paper'}>
        <div className='pt-10.25 pb-8.25 lg:py-12'>
          <div className='flex flex-col gap-17.25 sm:flex-row sm:justify-between sm:gap-7'>
            <div className='w-full lg:max-w-102'>
              <div className='flex flex-col gap-3.25 text-lg leading-5.5 lg:text-xl lg:leading-6'>
                <TitleSection title='Где нас найти' position='start' wheat={false} />
                <Location isIcon={false} />
              </div>
              <div
                className='mt-9 flex flex-col gap-4.5 text-lg leading-5.5 lg:mt-18.75 lg:text-[22px]
                  lg:leading-6.5'
              >
                <TitleSection title='Свяжитесь с нами' position='start' wheat={false} />
                <Connection connect='phone' iconColor='green' />
                <Connection connect='email' iconColor='green' />
              </div>
            </div>

            <FormMessageForUs backgroundInput={false} borderInput={true} />
          </div>

          <iframe
            className='mt-9 h-[326px] w-full rounded-[10px] xl:h-[391px]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.1342251384867!2d37.7691233831467!3d55.72141948668184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab57122a4aaa5%3A0x5f688ab049beefb1!2z0KDRj9C30LDQvdGB0LrQuNC5INC_0YAuLCAyMiwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwOTQyOA!5e0!3m2!1sru!2sby!4v1763643073809!5m2!1sru!2sby'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </Background>
    </>
  )
}
