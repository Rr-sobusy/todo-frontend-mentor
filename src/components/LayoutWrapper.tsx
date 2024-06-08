import React from 'react'

// bg images
import DarkMobile from '../assets/bg-mobile-light.jpg'
import DarkDesktop from '../assets/bg-desktop-light.jpg'

//

type WrapperProps = {
    children: React.ReactNode
    isDarkMode?: boolean
    isPhone?: boolean
}

const backGrounds = {
    darkMobile: DarkMobile,
    darkDesktop: DarkDesktop
}

const LayoutWrapper = ({ children, isDarkMode, isPhone, ...props }: WrapperProps) => {

    return (
        <main {...props} className={`flex flex-col  min-h-screen bg-background`}>
            <img className="w-screen h-1/2" src={backGrounds["darkMobile"]} alt="" />
            {children}
        </main>
    )
}

export default LayoutWrapper