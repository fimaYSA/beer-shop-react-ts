import { IconSearch } from '@/components/icon/IconSearch.tsx'

export function FormSearch() {
  return (
    <div className='relative h-12'>
      <input
        type='text'
        name='search'
        placeholder='Начать поиск...'
        className='border-main-grey h-full w-full rounded-full border bg-white px-6.25 pr-15 pl-3.75
          text-base leading-4.75 font-light text-black'
      />
      <button className='absolute top-2.5 right-4.25 cursor-pointer'>
        <IconSearch size={28} />
      </button>
    </div>
  )
}
