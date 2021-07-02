import React from 'react'

const DetailsCard = ({title, icon, color, body}) => {

    const iconBgColor = {
        blue: 'bg-blue-800 text-white',
        white: 'bg-white text-blue-800',
    }

    return (
        <div className="flex flex-col items-center text-center mb-auto max-w-sm md:max-w-xs">
        <div 
            className={
                `h-16 w-16 p-3 rounded-full ${color.toLowerCase() === 'blue' ? iconBgColor.blue : iconBgColor.white} mb-6`
            }
        >
            {icon}
        </div>
        <h5 className="text-center text-lg font-bold">{title}</h5>
        <p>{body}</p>
    </div>
    )
}

export default DetailsCard
