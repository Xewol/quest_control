import { useEffect, useRef, useState } from 'react'

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

export const usePrefferedTheme = () => {
  const [theme, setTheme] = useState('system')
  useEffect(() => {
    console.log('Input:', theme)

    if (theme === 'system') {
      window.matchMedia('(prefers-color-scheme:dark)').matches
        ? console.log('dark')
        : console.log('light')

      return
    }
    if (theme === 'dark') {
      return console.log('dark')
    }

    console.log('light')
  }, [theme])

  return [theme, setTheme]
}
