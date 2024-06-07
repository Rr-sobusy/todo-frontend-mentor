import React from 'react'

type WrapperProps = {
    children: React.ReactNode
    isDarkMode: boolean
    isPhone: boolean
}

const LayoutWrapper = ({ children, isDarkMode, isPhone, ...props }: WrapperProps) => {
    return (
        <main {...props} className="flex flex-col">
            <img src="" alt="" />
        </main>
    )
}

export default LayoutWrapper