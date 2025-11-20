import { footerData } from '@/data/footer.ts'
import { Logo } from '@/components/ui/Logo.tsx'
import { SocialMedia } from '@/components/SocialMedia.tsx'
import { Location } from '@/components/Location.tsx'
import { Connection } from '@/components/ui/Connection.tsx'

export function Footer() {
  return (
    <footer style={{ background: `${footerData.background}` }} className='relative'>
      <div className='mx-auto max-w-[1120px]'>
        <div
          className='flex flex-wrap gap-x-5 px-3.75 pt-5 text-[#FDCF55] md:justify-center lg:pt-7.5
            xl:justify-between'
        >
          <div className='z-10 max-w-87.5'>
            <Logo direction='row' />
            <p
              className='lg;leading-4.5 py-4 text-sm leading-4.25 font-light tracking-wide
                text-white lg:pt-6.5 lg:pb-10.5 lg:text-[15px]'
            >
              {footerData.aboutCatalog}
            </p>
            <SocialMedia />
          </div>

          <div className='z-10 max-w-70 pt-8.25 lg:max-w-87.5 xl:pl-23.75'>
            <h3 className='text-lg leading-5.5 font-medium'>{footerData.contacts.title}</h3>
            <div className='pt-4 text-base leading-4.75 font-normal text-white lg:pt-7.25'>
              <Location isIcon={true} />
              <div className='mt-6.75 mb-9.25'>
                <Connection connect='phone' iconColor='yellow' />
              </div>
              <Connection connect='email' iconColor='yellow' />
            </div>
          </div>

          <div
            className='z-10 flex max-w-87.5 flex-col gap-3.75 pt-6.75 lg:gap-5 lg:pt-8.25
              xl:pl-23.75'
          >
            {footerData.links.map((l, i) => {
              return (
                <h3
                  className='text-base leading-4.75 font-medium lg:text-lg lg:leading-5.5'
                  key={i}
                >
                  {l.name}
                </h3>
              )
            })}
          </div>
        </div>

        <div
          className='mt-17.25 flex flex-col items-center gap-3 border-t-2 border-t-[#3F3F3F] pt-3.75
            pb-4.75 text-[13px] leading-4 font-light text-white lg:mt-15 lg:flex-row
            lg:justify-between lg:py-4.75 lg:text-sm lg:leading-4.25'
        >
          <div className='z-10'>{footerData.developer.organization}</div>
          <div className='z-10'>{footerData.developer.confidentiality}</div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${footerData.bottomImg})` }}
        className='absolute bottom-0 h-36.75 w-full bg-center bg-repeat-x'
      ></div>
    </footer>
  )
}
