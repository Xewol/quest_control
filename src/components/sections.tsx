import React from 'react'

const Sections = () => {
  return (
    <div className="grow mt-4 pb-4">
      <div className="w-3/5 flex justify-evenly 2xl:justify-start 2xl:gap-10 h-full">
        <div className="flex flex-col items-center justify-start w-[30%] h-full max-w-[15rem] 2xl:ml-10">
          <button className="w-full text-center h-20 border-2 border-b-0 rounded-md rounded-b-none ">
            <span>New </span>
          </button>
          <div className="max-h-full h-20 w-full border-2 rounded-md rounded-t-none"></div>
        </div>
        <div className="flex flex-col items-center justify-start w-[30%] max-w-[15rem]">
          <button className="w-full text-center h-20 border-2 border-b-0 rounded-md rounded-b-none">
            <span>In progress</span>
          </button>
          <div className="max-h-full h-20 w-full border-2 rounded-md rounded-t-none"></div>
        </div>
        <div className="flex flex-col items-center justify-start w-[30%] max-w-[15rem]">
          <button className="w-full text-center h-20 border-2 border-b-0 rounded-md rounded-b-none">
            <span>Done</span>
          </button>
          <div className="max-h-full h-20 w-full border-2 rounded-md rounded-t-none"></div>
        </div>
      </div>
    </div>
  )
}

export default Sections
