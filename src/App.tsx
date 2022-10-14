import Sections from './components/sections'
import Header from './components/header'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="box-border w-screen h-screen flex flex-col bg-gradient-to-r from-indigo-400 dark:from-slate-700 dark:to-red-900 to-pink-400 dark:text-gray-300 text-gray-800 duration-300 font-[Poppins]">
      <Header />
      <Sections />
    </div>
  )
}

export default App
