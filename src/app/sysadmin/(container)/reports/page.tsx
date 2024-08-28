import React from 'react'
import { Eye, Trash2 } from 'lucide-react'
import DashboardRequestChart from './components/chart';

type Props = {}

export default function ReportsContainer({}: Props) {
  return (
    <>
        <div className="card flex flex-col bg-white dark:bg-foreground dark:text-white overflow-hidden mb-24">
            <div className="card-header bg-gradient-to-r from-red-700 to-red-500 text-white">
                <div className="py-4">
                        <div className="flex justify-between flex-wrap items-center">
                            <div>
                                <p className="font-semibold text-lg text-white dark:text-white">
                                    Reports
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="p-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-3 lg:col-span-4">
                        <div className="card flex flex-col bg-white dark:bg-foreground dark:text-white">
                            <div  className="card-body">
                                <button
                                    role="button"
                                    type="button"
                                    className="btn rounded font-normal leading-4 ripple block w-full py-2 px-5 mb-4 border border-primary text-primary hover:bg-primary hover:text-white"
                                >
                                    Generate Report
                                </button>
                                <div className="divide-y divide-gray-200 dark:divide-dark divide-solid">
                                    <div className="flex items-center justify-between py-3 px-1">
                                        <span>From</span>
                                        <div className="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-red-600 font-medium">
                                            <input
                                                name="start"
                                                type="date"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Select date start"
                                                />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-3 px-1">
                                        <span>To</span>
                                        <div className="bg-gray-100 dark:bg-gray-300 rounded-full flex items-center justify-center text-red-600 font-medium">
                                            <input
                                                name="start"
                                                type="date"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Select date start"
                                                />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-9 lg:col-span-8">
                        <div className="card flex flex-col mb-8 bg-white dark:bg-foreground dark:text-white">
                            <div  className="card-body">
                                <div className="block w-full overflow-x-auto whitespace-nowrap borderless hover">
                                    <DashboardRequestChart />
                                </div>
                            </div>
                        </div>
                        <div className="card flex flex-col bg-white dark:bg-foreground dark:text-white">
                            <div  className="card-body">
                                <div className="block w-full overflow-x-auto whitespace-nowrap borderless hover">
                                    <div className="dataTable-wrapper dataTable-loading no-footer fixed-columns">
                                        <div className="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover">
                                            <table className="table-3 dataTable-table max-w-full w-full">
                                                <thead>
                                                <tr className="">
                                                    <th className="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold">
                                                        Request No.
                                                    </th>
                                                    <th className="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold">
                                                    
                                                        Type
                                                    </th>
                                                    <th className="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold">
                                                    
                                                        Requested By
                                                    </th>
                                                    <th className="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold">
                                                    
                                                        Date
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {(() => {
                                                        const rows = [];
                                                        for (let i = 0; i < 5; i++) {
                                                        rows.push(
                                                            <tr key={i} className="border-b border-gray-200 dark:border-dark hover:bg-gray-100 cursor-pointer dark:hover:bg-dark">
                                                            <td className="text-xs py-3 px-4">
                                                                <p className="text-base"> ---/--- </p>
                                                            </td>
                                                            <td> Request Type </td>
                                                            <td className="py-3"> User {i+1} </td>
                                                            <td className="py-3"> MM-DD-YYYY </td>
                                                            </tr>
                                                        );
                                                        }
                                                        return rows;
                                                    })()}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="dataTable-bottom mt-6 float-end">
                                            <nav className="dataTable-pagination">
                                                <div className="px-4 py-3 flex items-center justify-between sm:px-6">
                                                    <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center">
                                                        <div>
                                                            <nav
                                                                className="relative dark:bg-dark z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                                                aria-label="Pagination"
                                                            >
                                                                <a
                                                                href="#"
                                                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-foreground dark:hover:bg-foreground"
                                                                >
                                                                <span className="sr-only">Previous</span>
                                                                <svg
                                                                    className="h-5 w-5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                    fillRule="evenodd"
                                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                </a>
                                                                <a
                                                                href="#"
                                                                aria-current="page"
                                                                className="dark:border-foreground dark:hover:bg-foreground z-10 bg-primary border-gray-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                
                                                                1
                                                                </a>
                                                                <a
                                                                href="#"
                                                                className="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                
                                                                2
                                                                </a>
                                                                <a
                                                                href="#"
                                                                className="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                
                                                                3
                                                                </a>
                                                                <span className="dark:border-foreground dark:hover:bg-foreground relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700">
                                                                
                                                                ...
                                                                </span>
                                                                <a
                                                                href="#"
                                                                className="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                
                                                                8
                                                                </a>
                                                                <a
                                                                href="#"
                                                                className="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                
                                                                9
                                                                </a>
                                                                <a
                                                                href="#"
                                                                className="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                
                                                                10
                                                                </a>
                                                                <a
                                                                href="#"
                                                                className="dark:border-foreground dark:hover:bg-foreground relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                >
                                                                <span className="sr-only">Next</span>
                                                                <svg
                                                                    className="h-5 w-5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    <path
                                                                    fillRule="evenodd"
                                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                    clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                </a>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="card-body noPadding" />
        </div>


    </>
    
  )
}