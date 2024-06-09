import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import LayoutWrapper from './components/LayoutWrapper'

import { useTheme } from './providers/ThemeProvider'

function App() {
  const { theme, setTheme } = useTheme();
  const isPhone = useMediaQuery({ maxWidth: 640 })

  const isDarkMode = theme === "dark"
  useEffect(() => {
    console.log(isDarkMode)
  }, [theme])


  return (
    <>
      <LayoutWrapper isPhone={isPhone} isDarkMode={isDarkMode}>
        <ul>
          <li onClick={() => setTheme("light")} className="py-1">light</li>
          <li onClick={() => setTheme("dark")} className="py-1">dark</li>
        </ul>
      </LayoutWrapper>
    </>
  )
}

export default App
