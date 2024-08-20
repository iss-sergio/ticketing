import React from 'react'

type Props = {}

export default function BreadCrumb({}: Props) {
  return (
    <div className="breadcrumb flex items-end border-b border-gray-300 pb-4 mb-6">
        <p className="text-xl mr-1 font-semibold mr-2 dark:text-white">Dashboard</p>
        <ul>
            <li className="border-r border-gray-400 inline pr-2 dark:text-gray-400">
                <a className="hover:text-gray-800" href="">
                    Admin
                </a>
            </li>
            <li className="inline pl-2 dark:text-gray-400"></li>
        </ul>
    </div>
  )
}