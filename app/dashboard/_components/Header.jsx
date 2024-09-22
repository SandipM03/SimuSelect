"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'

function Header() {
    const path = usePathname();
    
    useEffect(() => {
        console.log(path)
    }, [path])  // Added path as a dependency

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src='/logo.svg' width={160} height={100} alt='logo' />
            <ul className='flex gap-6'>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard'&&'text-primary font-bold'}
                    `}>
                    Dashboard</li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard/Questions'&&'text-primary font-bold'}
                    `}>
                    Questions</li>
                <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path=='/dashboard/how'&&'text-primary font-bold'}
                    `}>
                    How it Works?</li>
            </ul>
            <UserButton />
        </div>
    )
}

export default Header