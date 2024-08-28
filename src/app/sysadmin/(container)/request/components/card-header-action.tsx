"use client"

import Card from '@/components/card';
import Modal from '@/components/modal';
import { CalendarDays, Paperclip } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
    icon?: React.ReactNode,
    title?: string,
    action: React.ReactNode,
    status?: boolean,
    role?: string,
}

const CardHeaderAction: React.FC<Props> = ({icon, title, action, status, role}) => {

    const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);

    const handleOpenModal = () => {
        if(action === "edit"){
            setIsModalOpenEdit(true);
        }else{
            setIsModalOpenDelete(true);
        }
    };

    const handleCloseModal = () => {
        if(action === "edit"){
            setIsModalOpenEdit(false);
        }else{
            setIsModalOpenDelete(false);
        }
    };

    return (
        <>
            {icon ? 
            <button
            onClick={handleOpenModal}                      
            role="button"
            type="button"
            className="btn font-normal leading-4 ripple inline-block rounded-md p-2 items-center justify-center mr-3 text-danger hover:bg-gray-200 dark:hover:bg-foreground"
            >
            {icon}
            </button>
            : (
            role == 'support' ? '' : <button
                onClick={handleOpenModal}
                role="button"
                type="button"
                className="btn rounded font-normal leading-4 ripple block w-full py-2 px-5 border border-primary text-primary hover:bg-primary hover:text-white"
            >
                {title}
            </button>
            )}
            <Modal title="Request Form" isOpen={isModalOpenEdit} onClose={handleCloseModal} size="x5l">
                <div className="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-4">
                    <div className="w-full rounded-xl">
                        <div className="block p-8 2xl:flex items-center justify-between mb-4 shadow-lg rounded-lg bg-white dark:bg-foreground dark:text-white">
                            <h3 className="flex items-center mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                                Request History
                            </h3>
                            <ol className="relative border-s border-gray-200 dark:border-gray-700 text-wrap">
                                <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <CalendarDays size={14}/>
                                    </span>
                                    <h3 className="flex items-center mb-1 text-xs font-semibold text-gray-900 dark:text-white">
                                        Request Created
                                        <span className="bg-green-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                                            New
                                        </span>
                                    </h3>
                                    <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                                        Date: January 13th, 2024
                                    </time>
                                    <p className="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">
                                        New request created
                                    </p>
                                </li>
                                {/* <li className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Figma v1.3.0
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on December 7th, 2021
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    All of the pages and components are first designed in Figma and we keep a
                                    parity between the two versions even as we update the project.
                                    </p>
                                </li>
                                <li className="ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                    </span>
                                    <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Library v1.2.2
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on December 2nd, 2021
                                    </time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get started with dozens of web components and interactive elements built
                                    on top of Tailwind CSS.
                                    </p>
                                </li> */}
                            </ol>
                        </div>
                        <div className="block p-8 2xl:flex items-center justify-between mb-4 shadow-lg rounded-lg bg-white dark:bg-foreground dark:text-white">
                            <h3 className="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                                Attachments
                            </h3>
                            <div className="py-2 sm:gap-4 sm:px-0">
                                    <ul role="list" className="p-0 divide-y divide-gray-100 rounded-md ">
                                        <li className="flex items-center justify-between py-4 text-xs leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <Paperclip size={14}/>
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 text-xs leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <Paperclip size={14}/>
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                                    <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-xl col-span-2">
                        <div className="block px-6 2xl:flex items-center justify-between mb-4 shadow-lg rounded-lg bg-white dark:bg-foreground dark:text-white">
                            <div className=" border-gray-100">
                                <dl className="divide-y divide-gray-100 text-wrap">
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Request No.</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">---/---</dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Requested By</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            User 1
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Approved By</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Administrator 1
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Contact</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            12345678
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Date Requested</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            MM-DD-YYYY
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Comments</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700/50 sm:col-span-2 sm:mt-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Action Taken</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700/50 sm:col-span-2 sm:mt-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deds
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Description</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Slow pc
                                        </dd>
                                    </div>
                                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Assign Ticket</dt>
                                        <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        
                                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option>Choose a support</option>
                                                <option value="1">Support 1</option>
                                                <option value="2">Support 2</option>
                                                <option value="3">Support 3</option>
                                            </select>

                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                            {/* <button type="button" role="button" className="border bg-white border-red-600 text-red-600 hover:text-white hover:bg-red-500 mb-2 text-red p-2 w-full">
                                {status ? 'Cancel' : 'Disapprove'}
                            </button>
                            <button type="button" role="button" className="bg-red-500 hover:bg-red-600 mb-2 text-white p-2 w-full">
                                {status ? 'Save' : 'Approve'}
                            </button> */}
                            <button type="button" role="button" className="border bg-white border-red-600 text-red-600 hover:text-white hover:bg-red-500 mb-2 text-red p-2 w-full">
                                Mark as Pending
                            </button>
                            <button type="button" role="button" className="bg-red-500 hover:bg-red-600 mb-2 text-white p-2 w-full">
                                Save
                            </button>
                        </div>
                        
                    </div>
                </div>
            </Modal>
            <Modal title="Delete Request" isOpen={isModalOpenDelete} onClose={handleCloseModal} >
                
                <div className="mb-8 ">
                    <span className=" text-dark text-xl text-wrap">Are you sure want to delete this request?</span>
                </div>
                <button type="button" className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                    Yes
                </button>
            </Modal>
        </>
    );
}

export default CardHeaderAction;
