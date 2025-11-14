import { footerData } from '../../data/footer.ts'
import { Logo } from './Logo.tsx'
import { SocialMedia } from '../SocialMedia.tsx'

export function Footer() {
  return (
    <footer style={{ background: `${footerData.background}` }} className='relative'>
      <div className='max-w-[1120px] mx-auto'>
        <div
          className='text-[#FDCF55] flex flex-wrap md:justify-center gap-x-5 xl:justify-between
            px-3.75 pt-5 lg:pt-7.5'
        >
          <div className='max-w-87.5 z-10'>
            <Logo direction='row' />
            <p
              className='text-sm lg:text-[15px] font-light leading-4.25 lg;leading-4.5 text-white
                tracking-wide py-4 lg:pt-6.5 lg:pb-10.5'
            >
              {footerData.aboutCatalog}
            </p>
            <SocialMedia />
          </div>

          <div className='max-w-70 lg:max-w-87.5 xl:pl-23.75 pt-8.25 z-10'>
            <h3 className='text-lg font-medium leading-5.5'>{footerData.contacts.title}</h3>
            <div className='text-white text-base font-normal leading-4.75 pt-4 lg:pt-7.25'>
              <div className='flex gap-5 items-center'>
                <img src={footerData.contacts.location.img} alt='' />
                <p>{footerData.contacts.location.point}</p>
              </div>
              <div className='flex flex-col gap-4.5 mt-6.75 mb-9.25'>
                {footerData.contacts.phones.numbers.map((p, i) => {
                  return (
                    <div className='flex gap-3.5' key={i}>
                      <img className='size-5.25' src={footerData.contacts.phones.img} alt='' />
                      <span>{p}</span>
                    </div>
                  )
                })}
              </div>
              <div className='flex gap-4.5 items-center'>
                <img src={footerData.contacts.email.img} alt='' />
                <p>{footerData.contacts.email.mail}</p>
              </div>
            </div>
          </div>

          <div
            className='max-w-87.5 flex flex-col gap-3.75 lg:gap-5 xl:pl-23.75 pt-6.75 lg:pt-8.25
              z-10'
          >
            {footerData.links.map((l, i) => {
              return (
                <h3
                  className='text-base lg:text-lg font-medium leading-4.75 lg:leading-5.5'
                  key={i}
                >
                  {l.name}
                </h3>
              )
            })}
          </div>
        </div>

        <div
          className='border-t-2 border-t-[#3F3F3F] mt-17.25 lg:mt-15 pt-3.75 pb-4.75 lg:py-4.75
            text-white text-[13px] lg:text-sm leading-4 lg:leading-4.25 font-light flex flex-col
            items-center gap-3 lg:flex-row lg:justify-between'
        >
          <div className='z-10'>{footerData.developer.organization}</div>
          <div className='z-10'>{footerData.developer.confidentiality}</div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${footerData.bottomImg})` }}
        className='w-full h-36.75 absolute bg-repeat-x bottom-0 bg-center'
      ></div>
    </footer>
  )
}
