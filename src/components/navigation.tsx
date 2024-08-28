"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import { BellRing, Building, FileChartColumn, Gauge, HandHelping, LogOut, TicketPlus, User2Icon, UserCog, Users } from 'lucide-react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

type Props = {
    role: string
}

export default function Navigation({role}:Props) {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(true);

    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [isProfileOpen, setProfileOpen] = useState(false);

    const toggleNotificationDropdown = () => {
        setNotificationOpen(!isNotificationOpen);
        setProfileOpen(false);
    };

    const toggleProfileDropdown = () => {
        setProfileOpen(!isProfileOpen);
        setNotificationOpen(false);
    };

    const basePath = pathname.startsWith('/sysadmin')
        ? '/sysadmin'
        : pathname.startsWith('/user')
        ? '/user'
        : pathname.startsWith('/support')
        ? '/support'
        : '';

    return (
        <>
            <div className={`header-wrapper flex bg-white justify-between px-4`}>
            <div className="flex items-center">
                <div className="logo flex justify-center">
                    <img src="https://accionaweb.isstest.tech/assets/acciona-logo.png" alt="logo" width={100} height={100} />
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
                <div className="relative inline-block text-left">
                    <div>
                    <button
                        onClick={toggleNotificationDropdown}
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
                    {isNotificationOpen && (
                    <div
                        className="
                        absolute
                        right-0
                        w-44
                        mt-2
                        origin-top-right
                        bg-white
                        rounded-md
                        shadow-lg
                        z-20
                        "
                    >
                        <div
                            aria-labelledby="headlessui-menu-button-5"
                            id="headlessui-menu-items-6"
                            role="menu"
                            tabIndex={0}
                            className="absolute right-0 w-56 mt-2 overflow-hidden origin-top-right bg-white rounded-md custom-box-shadow focus:outline-none"
                        >
                            <div role="none">
                                <button
                                    className="text-gray-900 group flex  items-center w-full px-4 py-2 text-sm"
                                    role="menuitem"
                                >
                                <div className="flex flex-1 justify-between" >
                                    <div className="text-left">
                                        <h6>New Ticket Assigned</h6>
                                        <p className="text-gray-500" >
                                            I need a support
                                        </p>
                                    </div>
                                    <div>
                                    <p className="text-gray-400" > 2d ago
                                    </p>
                                    </div>
                                </div>
                                </button>
                                <button
                                    className="text-gray-900 group flex  items-center w-full px-4 py-2 text-sm"
                                    role="menuitem"
                                
                                >
                                <div className="flex flex-1 justify-between" >
                                    <div className="text-left">
                                        <h6>New Ticket</h6>
                                        <p className="text-gray-500" >
                                            You have a new ticket
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400" >
                                            1h ago
                                        </p>
                                    </div>
                                </div>
                                </button>
                            </div>
                        </div>

                    </div>
                    )}
                </div>
                <div className="relative inline-block text-left ml-4">
                    <div>
                    <button
                        onClick={toggleProfileDropdown}
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
                        <img
                        className="avatar rounded-full"
                        src="https://accionaweb.isstest.tech/assets/illustrations/user.png"
                        alt="User Avatar"
                        width={40}
                        height={40}
                        />
                    </button>
                    </div>
                    {isProfileOpen && (
                    <div
                        className="
                        absolute
                        right-0
                        w-44
                        mt-2
                        origin-top-right
                        bg-white
                        rounded-md
                        shadow-lg
                        z-20
                        "
                    >
                        <div
                            aria-labelledby="headlessui-menu-button-7"
                            id="headlessui-menu-items-8"
                            role="menu"
                            tabIndex={0}
                            className="absolute right-0 w-44 mt-2 overflow-hidden origin-top-right bg-white rounded-md custom-box-shadow focus:outline-none"
                            
                        >
                            <div role="none">
                                <Link href={`${basePath}/profile`}>
                                    <button
                                        className="text-gray-900 group flex items-center w-full px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                    >
                                    <User2Icon size={30} color="red" className="p-2 me-3 rounded-full bg-gray-300/30" /> Profile
                                    </button>
                                </Link>
                                <Link href="/auth/signin">
                                    <button
                                        className="text-gray-900 group flex  items-center w-full px-4 py-2 text-sm"
                                        role="menuitem"
                                        tabIndex={-1}
                                    >
                                    <LogOut size={30} color="red" className="p-2 me-3 rounded-full bg-gray-300/30" /> Sign Out
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    )}
                </div>
            </div>
            </div>
            <div className="side-content-wrap" >
                <div className={`sidebar-left ${(isOpen) ? 'open' : ''}`}>
                    <div className="ps" >
                        <ul className="navigation-left overflow-auto" >
                            {role === 'user' && (
                                <>
                                    <Link href={`${basePath}/dashboard`}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${pathname == '/user/dashboard' ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <Gauge size={48} color="red"/>
                                                <p className="font-medium">Dashboard</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={`${basePath}/request`}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/user/request') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <TicketPlus size={48} color="red"/>
                                                <p className="font-medium">Request</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={`${basePath}/profile`}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/user/profile') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <UserCog size={48} color="red"/>
                                                <p className="font-medium">Profile</p>
                                            </div>
                                        </li>
                                    </Link>
                                </>
                            )}
                            {role === 'support' && (
                                <>
                                    <Link href={`${basePath}/dashboard`}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${pathname == '/support/dashboard' ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <Gauge size={48} color="red"/>
                                                <p className="font-medium">Dashboard</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={`${basePath}/request`}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/support/request') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <TicketPlus size={48} color="red"/>
                                                <p className="font-medium">Request</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={`${basePath}/profile`}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/user/profile') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <UserCog size={48} color="red"/>
                                                <p className="font-medium">Profile</p>
                                            </div>
                                        </li>
                                    </Link>
                                </>
                            )}
                            {role === 'admin' && (
                                <div className="overflow-scrollbar">
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
                                    <Link href={'/sysadmin/reports'}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/sysadmin/reports') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <FileChartColumn  size={48} color="red"/>
                                                <p className="font-medium">Reports</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={'/sysadmin/user'}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/sysadmin/user') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <Users size={48} color="red"/>
                                                <p className="font-medium">Users</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={'/sysadmin/location'}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/sysadmin/location') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <Building size={48} color="red"/>
                                                <p className="font-medium">Locations</p>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link href={'/sysadmin/service'}>
                                        <li
                                            aria-current="page"
                                            className={`router-link-active router-link-exact-active nav-item ${(pathname == '/sysadmin/service') ? 'active' : ''}`}
                                            
                                        >
                                            <div className={`nav-item-hold`} >
                                                <HandHelping size={48} color="red"/>
                                                <p className="font-medium">Services</p>
                                            </div>
                                        </li>
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}