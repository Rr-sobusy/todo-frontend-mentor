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

const LayoutWrapper = ({ children, isDarkMode, isPhone, className, ...props }: WrapperProps) => {
    const backGround = () => {
        if (isDarkMode && isPhone)
            return DarkMobile;
        if (isDarkMode && !isPhone)
            return DarkDesktop;
        if (!isDarkMode && isPhone)
            return LightMobile;
        if (!isDarkMode && !isPhone)
            return LighDesktop
    }
    return (
        <main {...props}
            className={cn(`flex flex-col items-center min-h-screen ${isDarkMode ? 'bg-foreground' : 'bg-background'}`, className)}>
            <img className="w-screen h-1/2" src={backGround()} alt="" />
            {children}
            <p className={`absolute font-sans text-sm bottom-1 right-3 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Coded by Rex Hernandez <span>
                <a target="_blank" className="text-blue-400 underline" href="https://github.com/Rr-sobusy/todo-frontend-mentor/tree/master">src code</a></span></p>
        </main>
    )
}

export default LayoutWrapper