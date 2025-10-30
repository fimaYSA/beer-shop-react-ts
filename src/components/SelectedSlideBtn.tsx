type OwnPropsT = {
  selectedID: number
  onClick: (id: number) => void
}

export function SelectedSlideBtn({ selectedID, onClick }: OwnPropsT) {
  return (
    <div className='flex gap-[10px] h-[21px] w-[63px] items-center justify-center mt-[80px]
      mb-[55px]'>
      {[1, 2, 3].map((el) => {
        return (
          <div
            key={el}
            className={`w-[11px] h-[11px] rounded-full ${
              el === selectedID
                ? 'bg-[#FDCF55] outline-1 outline-offset-5 outline-[#FDCF55]'
                : 'bg-white'
            } `}
            onClick={() => onClick(el)}
          ></div>
        )
      })}
    </div>
  )
}
