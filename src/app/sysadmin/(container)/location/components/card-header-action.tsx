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

    const [isModalOpenAdd, setIsModalOpenAdd] = useState<boolean>(false);
    const [isModalOpenEdit, setIsModalOpenEdit] = useState<boolean>(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);

    const handleOpenModal = () => {
        if(action === "edit"){
            setIsModalOpenEdit(true);
        }else if(action === "add"){
            setIsModalOpenAdd(true);
        }else{
            setIsModalOpenDelete(true);
        }
    };

    const handleCloseModal = () => {
        if(action === "edit"){
            setIsModalOpenEdit(false);
        }if(action === "add"){
            setIsModalOpenAdd(false);
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
            <Modal title="Create New Location" isOpen={isModalOpenAdd} onClose={handleCloseModal} size="lg">
                <div className="w-full rounded-xl">
                    <div className="block px-6 2xl:flex items-center justify-between mb-8 shadow-lg rounded-lg bg-white dark:bg-foreground dark:text-white">
                        <div className=" border-gray-100">
                            <dl className="divide-y divide-gray-100 text-wrap">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Name</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Location Code</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Location Code" required />
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Contact</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234567890" required />
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Status</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700/50 sm:col-span-2 sm:mt-0">
                                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs h-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                        </select>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        
                        <button type="button" role="button" className="bg-red-500 hover:bg-red-600 mb-2 text-white p-2 w-full">
                            Submit
                        </button>
                    </div>
                    
                </div>
            </Modal>
            <Modal title="Location Information" isOpen={isModalOpenEdit} onClose={handleCloseModal} size="lg">
                <div className="w-full rounded-xl">
                    <div className="block px-6 2xl:flex items-center justify-between mb-8 shadow-lg rounded-lg bg-white dark:bg-foreground dark:text-white">
                        <div className=" border-gray-100">
                            <dl className="divide-y divide-gray-100 text-wrap">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Location ID</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">---/---</dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Name</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Juan Doe" required />
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Location Code</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="XX-AA001" required />
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Contact</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="1234567890" required />
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Date Added</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required disabled/>
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-xs font-medium leading-6 self-center text-gray-900">Status</dt>
                                    <dd className="mt-1 text-xs leading-6 text-gray-700/50 sm:col-span-2 sm:mt-0">
                                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs h-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                        </select>
                                    </dd>
                                </div>
                                
                                {status && (
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
                                )}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        
                        <button type="button" role="button" className="bg-red-500 hover:bg-red-600 mb-2 text-white p-2 w-full">
                            Update
                        </button>
                    </div>
                    
                </div>
            </Modal>
            <Modal title="Delete Location" isOpen={isModalOpenDelete} onClose={handleCloseModal} >
                
                <div className="mb-8 text-center">
                    <span className=" text-dark text-xl text-wrap">Are you sure want to delete this location?</span>
                </div>
                <button type="button" className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                    Yes
                </button>
            </Modal>
        </>
    );
}

export default CardHeaderAction;
