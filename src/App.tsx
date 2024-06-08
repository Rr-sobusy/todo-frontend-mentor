import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import LayoutWrapper from './components/LayoutWrapper'

import { useTheme } from './providers/ThemeProvider'

function App() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme)
  }, [theme])
  return (
    <>
      <LayoutWrapper>
        <ul>
          <li onClick={()=>setTheme("light")} className="py-1">light</li>
          <li onClick={()=>setTheme("dark")} className="py-1">dark</li>
        </ul>
      </LayoutWrapper>
    </>
  )
}

export default App
