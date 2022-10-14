import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useClickOustside } from '../utils/hooks'

const Sections = () => {
  const [task, setTask] = useState<Array<string>>([])
  const [popup, setPopup] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [formData, setFormData] = useState()

  const dropdownRef = useClickOustside(setDropdown)
  const handleClick = () => {
    setPopup(true)
  }
  const handleClose = () => {
    setPopup(false)
  }
  return (
    <>
      {popup && (
        <div className="absolute w-[450px] z-10 rounded-md h-[500px] bg-white top-1/2 left-1/2 text-slate-800 mx-auto -translate-x-1/2 -translate-y-1/2">
          <button className="absolute right-2 top-1" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl " />
          </button>
          <p className="mx-auto w-fit mt-1 text-lg px-2  border-b-2 border-slate-800">
            Add task
          </p>
          <div className="p-4 mt-4">
            <label htmlFor="title" className="block">
              Title
            </label>
            <input
              id="title"
              className="border-2 border-slate-600 p-2 w-40 h-10  mt-1 rounded-md"
            />
            <label htmlFor="difficulty" className="block mt-4">
              Difficulty
            </label>
            <div ref={dropdownRef}>
              <input
                id="difficulty"
                className={`border-2 border-slate-600  ${
                  dropdown && 'rounded-b-none border-b-0'
                } p-1 w-14 h-12 text-lg font-bold text-center  appearance-none cursor-pointer mt-1 rounded-md`}
                readOnly
                onClick={() => setDropdown(!dropdown)}
              />
              {dropdown && (
                <ul className="text-lg font-bold text-center w-14 border-2 border-slate-600 rounded-md rounded-t-none py-0.5 absolute origin-top animate-growDown bg-white">
                  <li className="w-full hover:bg-slate-400 duration-200 rounded-sm">
                    <button value={'I'} className="w-full">
                      I
                    </button>
                  </li>
                  <li className="w-full hover:bg-slate-400 duration-200 rounded-sm">
                    <button value={'II'} className="w-full">
                      II
                    </button>
                  </li>
                  <li className="w-full hover:bg-slate-400 duration-200 rounded-sm">
                    <button value={'III'} className="w-full">
                      III
                    </button>
                  </li>
                  <li className="w-full hover:bg-slate-400 duration-200 rounded-sm">
                    <button value={'VI'} className="w-full">
                      IV
                    </button>
                  </li>
                  <li className="w-full hover:bg-slate-400 duration-200 rounded-sm">
                    <button value={'V'} className="w-full">
                      V
                    </button>
                  </li>
                </ul>
              )}
              <label htmlFor="description" className="block mt-4">
                Description
              </label>
              <textarea className="w-full border-2 border-slate-600 rounded-md h-48 mt-4 resize-none p-1.5"></textarea>
            </div>
          </div>
        </div>
      )}
      <div className={`grow mt-4 pb-4 relative ${popup && 'opacity-10'}`}>
        <div className="w-3/5 flex justify-evenly 2xl:justify-start 2xl:gap-10 h-full">
          <div className="flex flex-col items-center justify-start w-[30%] h-full max-w-[15rem] 2xl:ml-10">
            <button className="w-full text-center h-10 bg-transparent border-[3px]  dark:border-slate-300 text-xl border-b-0 rounded-md rounded-b-none ">
              <span>New </span>
            </button>
            <div className="max-h-full h-fit min-h-[3.5rem] py-4 w-full border-[3px]  dark:border-slate-300 rounded-md  rounded-t-none">
              {task.length > 0 && (
                <div className="max-h-[430px] w-full pb-4 flex flex-col justify-start items-center gap-2 overflow-y-auto">
                  {task.map(task => (
                    <div className="h-fit py-2 w-11/12 flex justify-center items-center rounded-md border-2">
                      {task}
                    </div>
                  ))}
                </div>
              )}
              <button
                className="px-2 py-1 mt-4  enabled:hover:bg-slate-300 mx-auto block duration-300 border-2 rounded-md"
                disabled={popup}
                onClick={handleClick}
              >
                + Add task
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[30%] max-w-[15rem]">
            <button className="w-full text-center h-10 bg-transparent border-[3px]  dark:border-slate-300 text-xl border-b-0 rounded-md rounded-b-none">
              <span>In progress</span>
            </button>
            <div className="max-h-full h-14 w-full border-[3px]  dark:border-slate-300 rounded-md rounded-t-none"></div>
          </div>
          <div className="flex flex-col items-center justify-start w-[30%] max-w-[15rem]">
            <button className="w-full text-center h-10 bg-transparent border-[3px]  dark:border-slate-300 text-xl border-b-0 rounded-md rounded-b-none">
              <span>Done</span>
            </button>
            <div className="max-h-full h-14 w-full border-[3px]  dark:border-slate-300 rounded-md rounded-t-none"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sections
