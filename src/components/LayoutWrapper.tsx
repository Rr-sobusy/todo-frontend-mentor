import React from 'react'

// bg images
import DarkMobile from '../assets/bg-mobile-light.jpg'
import DarkDesktop from '../assets/bg-desktop-dark.jpg'
import LightMobile from '../assets/bg-mobile-light.jpg'
import LighDesktop from '../assets/bg-desktop-light.jpg'

//

interface WrapperProps {
    children: React.ReactNode
    isDarkMode?: boolean
    isPhone?: boolean
}

const backGrounds = {
    darkMobile: DarkMobile,
    darkDesktop: DarkDesktop,
    lightMobile: LightMobile,
    lightDesktop: LighDesktop
}

const LayoutWrapper = ({ children, isDarkMode, isPhone, ...props }: WrapperProps) => {

    const backGround = (): any => {
        if (isDarkMode && isPhone)
            return backGrounds["darkMobile"];
        if (isDarkMode && !isPhone)
            return backGrounds["darkDesktop"];
        if (!isDarkMode && isPhone)
            return backGrounds["lightMobile"];
        if (!isDarkMode && !isPhone)
            return backGrounds["lightDesktop"]
    }
    console.log(backGround)

    return (
        <main {...props} className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-foreground' : 'bg-background'}`}>
            <img className="w-screen h-1/2" src={backGround()} alt="" />
            {children}
        </main>
    )
}

export default LayoutWrapper