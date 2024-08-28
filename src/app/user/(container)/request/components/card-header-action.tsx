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
    const [isModalOpenAdd, setIsModalOpenAdd] = useState<boolean>(false);
    const [isModalOpenAccept, setIsModalOpenAccept] = useState<boolean>(false);
    const [isAccepted, setIsAccepted] = useState<boolean>(false);


    const handleOpenModal = () => {
        if(action === "edit"){
            setIsModalOpenEdit(true);
        }else if(action === "add"){
            setIsModalOpenAdd(true);
        }else if(action === "accept"){
            setIsModalOpenAccept(true);
        }else{
            setIsModalOpenDelete(true);
        }
    };

    const handleCloseModal = () => {
        if(action === "edit"){
            setIsModalOpenEdit(false);
        }else if(action === "add"){
            setIsModalOpenAdd(false);
        }else if(action === "accept"){
            setIsModalOpenAccept(false);
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
            <Modal title="Request Form" isOpen={isModalOpenAdd} onClose={handleCloseModal}>
                <form className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Type of Request*
                        </label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                            <option value="">Select type</option>
                            <option value="type_1">Type 1</option>
                            <option value="type_2">Type 2</option>
                            <option value="type_3">Type 3</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Request Description*
                        </label>
                        <textarea
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Write your request description here..."
                        ></textarea>
                    </div>
                    
                </form>
                <div className="mb-2">
                    <span className="italic text-gray-400 text-xs">*Note: New request are subject for approval from admin.</span>
                </div>
                <button type="button" className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                    Submit
                </button>
            </Modal>
            <Modal title="Request Form" isOpen={isModalOpenEdit} onClose={handleCloseModal}>
                <form className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Type of Request*
                        </label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                            <option value="">Select type</option>
                            <option value="type_1">Type 1</option>
                            <option value="type_2">Type 2</option>
                            <option value="type_3">Type 3</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Request Description*
                        </label>
                        <textarea
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Write your request description here..."
                        ></textarea>
                    </div>
                    
                </form>
                <div className="mb-2">
                    <span className="italic text-gray-400 text-xs">*Note: New request are subject for approval from admin.</span>
                </div>
                <button type="button" className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                    Submit
                </button>
            </Modal>
            <Modal title={isAccepted ? "Update Request Status" : "Confirm Request"} isOpen={isModalOpenAccept} onClose={handleCloseModal}>
                {isAccepted ? (
                    <>
                        <div className="mb-2 pb-4 border-b">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status*</label>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                                    <option value="">Update Status</option>
                                    <option value="1">Complete</option>
                                    <option value="2">Pending</option>
                                </select>
                            </div>
                            <div className="my-2">
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Action Taken*
                                </label>
                                <input
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Action Taken"
                                />
                            </div>

                            <div className="my-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Comments*
                                </label>
                                <textarea
                                    rows={3}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Write your request description here..."
                                ></textarea>
                            </div>
                            <div className="my-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Attachment (optional)</label>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-54 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or DOCS, PDF (MAX. 2mb)
                                        </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <button type="button" className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                            Save
                        </button>
                    </>
                    
                ) : (
                    <>
                        <div className="mb-2">
                            <span className="italic text-gray-400 text-xs">Are you sure want to accept this request?</span>
                        </div>
                        <button type="button" onClick={() => setIsAccepted(true)} className="btn rounded font-normal w-full leading-4 ripple py-3 mb-10 bg-primary text-white">
                            Yes
                        </button>
                    </>
                )}
                
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
