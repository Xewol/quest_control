import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faDesktopAlt } from '@fortawesome/free-solid-svg-icons'
import { useClickOustside, useTheme } from '../../utils/hooks'

const Header = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const dropdownRef = useClickOustside(setDropdown)
  const [theme, setTheme] = useTheme()
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setTheme((e.currentTarget as HTMLButtonElement).value)
    setDropdown(false)
  }

  return (
    <header className="h-16 border-b-2 flex justify-center items-center">
      <div className="w-[10%]" />
      <h1 className="text-4xl w-4/5 text-center shrink">Quest Control</h1>

      <div className="min-w-fit md:flex justify-center items-center gap-4 hidden   mr-4 2xl:mr-0">
        <button className="rounded-md border-2  p-1.5 2xl:p-2 hover:bg-gray-300 hover:text-gray-800 duration-200">
          Sign up
        </button>
        <div
          ref={dropdownRef}
          className="flex flex-col relative justify-start items-center"
        >
          <button
            onClick={() => setDropdown(!dropdown)}
            className="h-10 w-10 hover:text-gray-700 duration-200 flex justify-center items-center "
          >
            {theme === 'dark' && (
              <FontAwesomeIcon className="text-3xl" icon={faMoon} />
            )}
            {theme === 'light' && (
              <FontAwesomeIcon className="text-3xl" icon={faSun} />
            )}
            {theme === 'system' && (
              <FontAwesomeIcon className="text-3xl" icon={faDesktopAlt} />
            )}
          </button>
          {dropdown && (
            <div className="absolute mt-0.5 w-14 h-40 z-20 top-full bg-gray-300  rounded-md  flex flex-col justify-around animate-growDown origin-top">
              <button
                className="w-full flex py-1 justify-center items-center hover:bg-gray-700 hover:text-gray-300 text-gray-700 duration-200"
                onClick={handleChange}
                value={'dark'}
              >
                <FontAwesomeIcon
                  icon={faMoon}
                  className="text-inherit text-2xl"
                />
              </button>
              <button
                className="w-full flex py-1 justify-center items-center hover:bg-gray-700 hover:text-gray-300 text-gray-700 duration-200"
                onClick={handleChange}
                value={'light'}
              >
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-inherit text-2xl"
                />
              </button>
              <button
                className="w-full flex py-1 justify-center items-center hover:bg-gray-700 hover:text-gray-300 text-gray-700 duration-200"
                onClick={handleChange}
                value={'system'}
              >
                <FontAwesomeIcon
                  icon={faDesktopAlt}
                  className="text-inherit text-2xl"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
