import React from 'react'
import SimpleBar from 'simplebar-react'
import { type Theme } from '@/providers/ThemeProvider';

// icons
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';

type MainContainerProps = {
  isDarkMode: boolean;
  toggleTheme: () => void
}

const MainContainer = ({ isDarkMode, toggleTheme }: MainContainerProps) => {

  const Icon = isDarkMode ? Sun : Moon

  return (
    <div className="w-[90%] md:max-w-[550px] mx-auto absolute top-[5rem]">

      {/* **** Header ***** */}
      <div className="flex justify-between items-center">
        <h2 className={`font-semibold text-4xl text-background tracking-wider`}>TODO</h2>
        <img onClick={toggleTheme} className="w-7 h-7 cursor-pointer" src={Icon} alt="" />
      </div>

      {/******** Add todo input ****** */}
      <div className={`mt-7 h-12 pl-4 flex relative gap-3 items-center rounded-md`}>
        <div className={`h-6 w-6 rounded-full absolute z-20 border ${isDarkMode ? 'border-backgroundAccent' : 'border-foregroundAccent'}`}></div>
        <input placeholder='Enter new todo. . .' className={`absolute rounded-md left-0 h-full w-full pl-12 z-10 top-0 ${isDarkMode ? 'bg-foregroundAccent' : 'bg-backgroundAccent'}`} type="text" />
      </div>

      {/* ****** Todo Container ******/}
      <SimpleBar></SimpleBar>
    </div>
  )
}

export default MainContainer