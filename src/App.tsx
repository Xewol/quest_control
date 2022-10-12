import Sections from './components/sections'
import Header from './components/header'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    // document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="box-border w-screen h-screen flex flex-col bg-gradient-to-r from-indigo-500 to-purple-500 via-pink-500 text-gray-300 dark:text-black font-[Poppins]">
      <Header />
      <Sections />
    </div>
  )
}

export default App
