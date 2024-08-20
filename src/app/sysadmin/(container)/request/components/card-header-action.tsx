"use client"

import React from 'react'

type Props = {
    icon: React.ReactNode,
    title: string
}

const CardHeaderAction: React.FC<Props> = ({icon, title}) => {

    return (
        <button type="button" className="flex items-center btn rounded font-normal leading-4 ripple py-2 px-5 mb-10 mr-3 bg-primary text-white">
            {icon} <span className="pl-3">{title}</span>
        </button>
    );
}

export default CardHeaderAction;
