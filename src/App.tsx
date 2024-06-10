import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import LayoutWrapper from './components/LayoutWrapper'
import MainContainer from './components/MainContainer'

import { useTheme } from './providers/ThemeProvider'

function App() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark"
  const isPhone = useMediaQuery({ maxWidth: 640 })


  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")

  }

  return (
    <>
      <LayoutWrapper isPhone={isPhone} isDarkMode={isDarkMode}>
        <MainContainer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </LayoutWrapper>
    </>
  )
}

export default App
