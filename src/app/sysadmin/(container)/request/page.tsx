import React from 'react'
import Card from '@/components/card'
import { Plus } from 'lucide-react'
import CardHeaderAction from './components/card-header-action'

type Props = {}

export default function RequestContainer({}: Props) {
  return (
    <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 mb-24">
            <Card noPadding={false}>
                <CardHeaderAction icon={<Plus />} title="New Request" />
                <div className="card-body">
                    <div className="block w-full overflow-x-auto whitespace-nowrap borderless hover">
                        <div className="dataTable-wrapper dataTable-loading no-footer fixed-columns">
                            <div className="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover">
                                <table className="table-3 dataTable-table max-w-full w-full">
                                <thead>
                                    <tr className="">
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        ID
                                    </th>
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Request No.
                                    </th>
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Service
                                    </th>
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Status
                                    </th>
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Company
                                    </th>
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Requested By
                                    </th>
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Date Requested
                                    </th>
                                    
                                    <th className="text-left border-b pb-3 mb-3 text-gray-500 font-semibold">
                                        Action
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100 cursor-pointer border-b border-1-solid border-gray-200">
                                        <td className="text-sm py-3 px-4">1</td>
                                        <td className="text-sm"> --- / ---</td>
                                        <td className="py-3 text-sm">
                                            Work
                                        </td>
                                        <td className="py-3"><span className="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-sm">Done</span></td>
                                        <td className="py-3">
                                            <span className="text-sm">Company 1</span>
                                        </td>
                                        <td className="py-3 text-sm">User 1 </td>
                                        <td className="py-3"><span className="text-sm">MM-DD-YYYY</span></td>
                                        <td className="py-3">
                                            <button type="button" className="btn rounded font-normal leading-4 ripple inline-block py-2 px-5 border border-primary text-primary hover:bg-primary hover:text-white mb-3 mr-3">View</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 cursor-pointer border-b border-1-solid border-gray-200">
                                        <td className="text-sm py-3 px-4">2</td>
                                        <td className="text-sm"> --- / ---</td>
                                        <td className="py-3 text-sm">
                                            Permit
                                        </td>
                                        <td className="py-3"><span className="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-sm">Pending</span></td>
                                        <td className="py-3">
                                            <span className="text-sm">Company 2</span>
                                        </td>
                                        <td className="py-3 text-sm">User 2 </td>
                                        <td className="py-3"><span className="text-sm">MM-DD-YYYY</span></td>
                                        <td className="py-3">
                                            <button type="button" className="btn rounded font-normal leading-4 ripple inline-block py-2 px-5 border border-primary text-primary hover:bg-primary hover:text-white mb-3 mr-3">View</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-100 cursor-pointer border-b border-1-solid border-gray-200">
                                        <td className="text-sm py-3 px-4">2</td>
                                        <td className="text-sm"> --- / ---</td>
                                        <td className="py-3 text-sm">
                                            Manpower
                                        </td>
                                        <td className="py-3"><span className="px-3 py-1 rounded-full text-primary border border-primary mr-3 text-sm">New</span></td>
                                        <td className="py-3">
                                            <span className="text-sm">Company 3</span>
                                        </td>
                                        <td className="py-3 text-sm">User 3 </td>
                                        <td className="py-3"><span className="text-sm">MM-DD-YYYY</span></td>
                                        <td className="py-3">
                                            <button type="button" className="btn rounded font-normal leading-4 ripple inline-block py-2 px-5 border border-primary text-primary hover:bg-primary hover:text-white mb-3 mr-3">View</button>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                </table>
                            </div>
                            <div className="dataTable-bottom flex justify-between border-gray-2001 pt-4">
                                <div className="dataTable-info mt-3 text-gray-500 text-sm"> Showing 1 to 8 of 8 entries </div>
                                <nav className="dataTable-pagination">
                                    <ul className="inline-flex -space-x-px text-sm">
                                        <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                        </li>
                                        <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                        </li>
                                        <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                        </li>
                                        <li>
                                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-dark-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                        </li>
                                        <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                        </li>
                                        <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                        </li>
                                        <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}