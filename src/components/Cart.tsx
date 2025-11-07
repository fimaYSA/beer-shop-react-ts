export function Cart() {
  return (
    <div className='size-10 content-end relative'>
      <img src='/images/cart.svg' alt='cart' />
      <div className='size-5 rounded-full bg-white absolute top-0 right-0 text-center'>
        <span className='text-black text-base leading-4.5'>4</span>
      </div>
    </div>
  )
}
