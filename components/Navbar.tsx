"use client"
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Buttton from './Button'

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className='flexBetween max-container padding-container relative z-30 py-5'>
            <Link href={'/'}>
                <Image
                    alt='logo'
                    width={74}
                    height={29}
                    src={'/hilink-logo.svg'} 
                />
            </Link>
            <div className='hidden h-full gap-12 lg:flex'>
                {
                    NAV_LINKS.map((link)=>(
                        <Link 
                            className='regular-16 text-gray-50 flexCenter pb-1.5 transition-all font-bold cursor-pointer'
                            key={link.key} href={link.href}>
                            {link.label}
                        </Link>
                    ))
                }
            </div>
            <div className='lg:flexCenter hidden'>
                <Buttton 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
            <Image
            onClick={()=>{ setMobileMenuOpen(! mobileMenuOpen) }}
                alt='menu'
                width={32}
                height={32}
                src={'/menu.svg'}
                className='inline-block cursor-pointer lg:hidden'
            />

            {/* Mobile Menu */}
            <div className={`flex flex-col bg-white border-r transition-all shadow-sm z-50 h-screen w-[280px] py-20 px-5 fixed top-0 gap-12 lg:hidden ${mobileMenuOpen ? 'left-0' : 'left-[-280px]'}`}>
                {
                    NAV_LINKS.map((link)=>(
                        <Link 
                            className='text-black regular-16 flexCenter pb-1.5 transition-all font-bold cursor-pointer'
                            key={link.label} href={link.href}>
                            {link.label}
                        </Link>
                    ))
                }
                <Buttton 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>
            
        </nav>
    )
}
