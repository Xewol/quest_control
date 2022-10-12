import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faDesktopAlt } from '@fortawesome/free-solid-svg-icons'
import { useClickOustside, usePrefferedTheme } from '../../utils/hooks'

const Header = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const dropdownRef = useClickOustside(setDropdown)
  const [theme, setTheme] = usePrefferedTheme()
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>): void => {
    //@ts-expect-error
    setTheme((e.currentTarget as HTMLButtonElement).value)

    setDropdown(false)
  }

  return (
    <header className="h-16 border-b-2 bg-gradient-to-r from-indigo-500 to-purple-500 via-pink-500 flex justify-center items-center">
      <div className="w-1/6" />
      <h1 className="text-4xl w-2/3 text-center">Quest Control</h1>

      <div
        className="w-1/6 flex justify-center items-center pr-2 relative"
        ref={dropdownRef}
      >
        <button className="rounded-md border-2  p-2 mr-10 hover:bg-gray-300 hover:text-gray-800 duration-200">
          Sign up
        </button>
        <button onClick={() => setDropdown(!dropdown)} className="h-10 w-10">
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
          <div className="absolute w-24 h-40 bg-gray-300 top-12 rounded-md right-2 flex flex-col justify-around animate-growDown origin-top">
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
              <FontAwesomeIcon icon={faSun} className="text-inherit text-2xl" />
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
    </header>
  )
}

export default Header
