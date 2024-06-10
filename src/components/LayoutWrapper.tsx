import React from 'react'
import { cn } from '@/libs/utils'

// bg images
import DarkMobile from '../assets/bg-mobile-dark.jpg'
import DarkDesktop from '../assets/bg-desktop-dark.jpg'
import LightMobile from '../assets/bg-mobile-light.jpg'
import LighDesktop from '../assets/bg-desktop-light.jpg'

//

interface WrapperProps {
    children: React.ReactNode
    isDarkMode?: boolean
    isPhone?: boolean
    className?: string
}

const backGrounds = {
    darkMobile: DarkMobile,
    darkDesktop: DarkDesktop,
    lightMobile: LightMobile,
    lightDesktop: LighDesktop
}

const LayoutWrapper = ({ children, isDarkMode, isPhone, className, ...props }: WrapperProps) => {

    const backGround = () => {
        if (isDarkMode && isPhone)
            return backGrounds["darkMobile"];
        if (isDarkMode && !isPhone)
            return backGrounds["darkDesktop"];
        if (!isDarkMode && isPhone)
            return backGrounds["lightMobile"];
        if (!isDarkMode && !isPhone)
            return backGrounds["lightDesktop"]
    }

    return (
        <main {...props}
            className={cn(`flex flex-col items-center min-h-screen ${isDarkMode ? 'bg-foreground' : 'bg-background'}`, className)}>
            <img className="w-screen h-1/2" src={backGround()} alt="" />
            {children}
        </main>
    )
}

export default LayoutWrapper