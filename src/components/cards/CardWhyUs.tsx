type Props = {
  image: string
  label: string
  description: string
}

export const CardWhyUs = ({ image, label, description }: Props) => (
  <li className='flex max-w-63.5 list-none flex-col items-center'>
    <div className='relative mt-15 w-[135px] content-end'>
      <img src={image} alt={label} className='absolute bottom-3.75 left-1/2 -translate-x-1/2' />
      <div className='bg-main-yellow mx-auto size-23.5 rounded-full' />
    </div>
    <h3
      className='mt-3.75 max-w-50 text-center text-lg leading-5.5 font-medium lg:mt-4.5
        lg:text-[22px] lg:leading-6.5'
    >
      {label}
    </h3>
    <p className='mt-2 text-center text-sm leading-4.25 font-light'>{description}</p>
  </li>
)
