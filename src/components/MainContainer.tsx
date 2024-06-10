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
    <div className="w-[85%] md:max-w-[500px] mx-auto absolute top-[6rem]">

      {/* **** Header ***** */}
      <div className="flex justify-between items-center">
        <h2 className={`font-semibold text-4xl text-background tracking-wider`}>TODO</h2>
        <img onClick={toggleTheme} className="w-7 h-7 cursor-pointer" src={Icon} alt="" />
      </div>

      {/******** Add todo input ****** */}
    </div>
  )
}

export default MainContainer