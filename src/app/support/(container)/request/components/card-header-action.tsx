"use client"

import Modal from '@/components/modal';
import React, { useState } from 'react'

type Props = {
    icon?: React.ReactNode,
    title?: string,
    action: React.ReactNode
}

const CardHeaderAction: React.FC<Props> = ({icon, title, action}) => {

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
            <button
                onClick={handleOpenModal}
                role="button"
                type="button"
                className="btn rounded font-normal leading-4 ripple block w-full py-2 px-5 border border-primary text-primary hover:bg-primary hover:text-white"
            >
                {title}
            </button>
            )}
            <Modal title="Request Information" isOpen={isModalOpenEdit} onClose={handleCloseModal} size="x3l">
            <div className="w-full rounded-xl">
                <div className="block px-6 2xl:flex items-center justify-between mb-4 shadow-lg rounded-lg bg-white dark:bg-foreground dark:text-white">
                    <div className=" border-gray-100">
                        <dl className="divide-y divide-gray-100 text-wrap">
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-xs font-medium leading-6 text-gray-900">Request No.</dt>
                                <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">001</dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-xs font-medium leading-6 text-gray-900">Requested By</dt>
                                <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    User 1
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
                                <dt className="text-xs font-medium leading-6 text-gray-900">Description</dt>
                                <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Slow pc
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-xs font-medium leading-6 text-gray-900">Comments</dt>
                                <div className="block mt-1 text-xs leading-6 text-gray-700/50 sm:col-span-2 sm:mt-0">
                                <textarea
                                    rows={4}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Write your comments here..."
                                ></textarea>
                                </div>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-xs font-medium leading-6 text-gray-900">Action Taken</dt>
                                <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs h-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Choose an action</option>
                                        <option value="1">Resolved</option>
                                        <option value="2">Fix</option>
                                        <option value="3">Others</option>
                                    </select>
                                </dd>
                            </div>
                            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-xs font-medium leading-6 self-center text-gray-900">Status</dt>
                                <dd className="mt-1 text-xs leading-6 text-gray-700/50 sm:col-span-2 sm:mt-0">
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-xs h-10 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Choose a status</option>
                                        <option value="1">Complete</option>
                                        <option value="2">Pending</option>
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
            <Modal title="Delete Request" isOpen={isModalOpenDelete} onClose={handleCloseModal}>
                
                <div className="mb-2">
                    <span className="italic text-gray-400 text-xs">Are you sure want to delete this request?</span>
                </div>
                <button type="button" className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                    Yes
                </button>
            </Modal>
        </>
    );
}

export default CardHeaderAction;
