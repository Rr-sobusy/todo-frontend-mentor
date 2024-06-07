import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function App() {
 
  const isPhone = useMediaQuery({maxWidth : 640})

  console.log(isPhone)
  return (
   <>
   <p className={`${isPhone} && 'text-red-500'`}>rex</p>
   </>
  )
}

export default App
