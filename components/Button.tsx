import Image from 'next/image';
import React from 'react'

interface ButtonProps{
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_green' | 'btn_dark_green' | 'btn_white_text'
}

export default function Buttton( {type, title, icon, variant} : ButtonProps ) {
    return (
        <button
            className={`flexCenter gap-3 rounded-full border ${variant}`}
            type={type}
        >
            {
                icon && <Image src={icon} alt={title} width={24} height={24}/>
            }
            <label className='bold-16 whitespace-nowrap'>{title}</label>
        </button>
    )
}
