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
  const [theme, setTheme] = useState(localStorage.theme || 'system')

  // Whenever the user explicitly chooses light mode
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }

  // Whenever the user explicitly chooses dark mode
  if (theme === 'dark') {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
  // Whenever the user explicitly chooses to respect the OS preference
  if (theme === 'system') {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
    localStorage.removeItem('theme')
  }

  return [theme, setTheme]
}
