import { useCallback, useEffect, useRef, useState } from 'react'

export const useClickOustside = (callBack: Function) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      //check if event is outside of Element0
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callBack()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return ref
}

export const useTheme = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [theme, setTheme] = useState('system')
  const [initialLoad, setInitialLoad] = useState(true)

  const InitialCheck = () => {
    if (localStorage.getItem('theme'))
      document.documentElement.classList.add('dark')
    else
      window.matchMedia('(prefers-color-scheme:dark)').matches
        ? console.log('dark')
        : console.log('light')
  }

  if (initialLoad) InitialCheck()

  useEffect(() => {
    if (theme === 'system') {
      //delete from localStorage

      return console.log('system')
    }

    if (theme === 'dark') {
      return console.log('dark')
    }

    console.log('light')

    setInitialLoad(false)
  }, [theme])

  return [theme, setTheme]
}
