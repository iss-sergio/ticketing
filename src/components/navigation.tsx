"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import { BellRing, Gauge, TicketPlus } from 'lucide-react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className={`header-wrapper flex bg-white justify-between px-4`}>
            <div className="flex items-center">
                <div className="logo flex justify-center">
                    <Image src="/assets/acciona-logo.png" alt="logo" width={100} height={100} />
                </div>
                <div className="mx-4 sm:mx-3" >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="menu-toggle cursor-pointer text-gray-500 align-middle focus:outline-none"
                        type="button"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            
                        />
                        </svg>
                    </button>
                </div>
                <div className="relative inline-block text-left">
                </div>
            </div>
            <div className="flex items-center">
                {/* notification-dropdown  */}
                <div className="relative inline-block text-left">
                <div>
                    <button
                    className="
                        btn btn-sm
                        hover:bg-gray-100
                        rounded
                        badge-top-container
                        inline-flex
                        justify-center
                        w-full
                        px-4
                        py-2
                        text-sm
                        font-medium
                    "
                    >
                    <span className="badge-count text-white bg-red-500">3</span>
                    <BellRing size={24} />
                    </button>
                </div>
                <div
                    className="
                    absolute
                    right-0
                    w-44
                    mt-2
                    overflow-hidden
                    origin-top-right
                    bg-white
                    rounded-md
                    custom-box-shadow
                    focus:outline-none
                    "
                >
                    <div className=""></div>
                </div>
                </div>
                {/* profile-dropdown  */}
                <div className="relative inline-block text-left">
                <div>
                    <button
                    className="
                                inline-flex
                                justify-center
                                w-full
                                px-4
                                py-2
                                text-sm
                                font-medium
                            "
                    >
                    <Image
                        className="avatar rounded-full"
                        src="/assets/illustrations/user.png"
                        alt=""
                        width={40}
                        height={40}
                    />
                    </button>
                </div>
                <div
                    className="
                            absolute
                            right-0
                            w-44
                            mt-2
                            overflow-hidden
                            origin-top-right
                            bg-white
                            rounded-md
                            custom-box-shadow
                            focus:outline-none
                        "
                >
                    <div className=""></div>
                </div>
                </div>
            </div>
            </div>
            <div className="side-content-wrap" >
                <div className={`sidebar-left ${(isOpen) ? 'open' : ''}`}>
                    <div className="ps" >
                        <ul className="navigation-left" >
                            <Link href={'/sysadmin/dashboard'}>
                                <li
                                    aria-current="page"
                                    className={`router-link-active router-link-exact-active nav-item ${pathname == '/sysadmin/dashboard' ? 'active' : ''}`}
                                    
                                >
                                    <div className={`nav-item-hold`} >
                                        <Gauge size={48} color="red"/>
                                        <p className="font-medium">Dashboard</p>
                                    </div>
                                </li>
                            </Link>
                            <Link href={'/sysadmin/request'}>
                            <li
                                aria-current="page"
                                className={`router-link-active router-link-exact-active nav-item ${(pathname == '/sysadmin/request') ? 'active' : ''}`}
                                
                            >
                                <div className={`nav-item-hold`} >
                                    <TicketPlus size={48} color="red"/>
                                    <p className="font-medium">Request</p>
                                </div>
                            </li>
                            </Link>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}