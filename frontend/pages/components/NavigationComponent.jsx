import React from 'react'

export const NavigationComponent = () => {
    const navItems=["Home","What is for?","Books", "Contact"]
    return (
        <nav className="flex  pb-0 ">
            <div className="flex-1">
            Aichouch
            </div>
            <div className="flex space-x-4">
                {navItems.map((item, index)=>
                    (<div key={index}>{item}</div>)
                )}
            </div>


        </nav>
    )
}
