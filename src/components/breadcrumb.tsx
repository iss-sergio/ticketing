"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {}

const BreadCrumbs: React.FC<Props> = () => {

  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(segment => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;

    return (
      <span key={path} className="inline pr-2">
        <Link 
          href={path} 
          className={`hover:text-gray-800 dark:text-gray-400 ${isLast ? 'font-semibold text-black dark:text-white' : 'border-r border-gray-400 pr-2'}`}
        >
          {segment}
        </Link>
      </span>
    );
  });

  return (
    <div className="breadcrumb flex items-end border-b border-gray-300 pb-4 mb-6">
        <p className="text-xl mr-1 font-semibold capitalize dark:text-white">{pathSegments[0] || 'Dashboard'}</p>
        <ul>
            <li className="border-r border-gray-400 capitalize inline pr-2 dark:text-gray-400">
                <span className="hover:text-gray-800">
                  {breadcrumbs}
                </span>
            </li>
            <li className="inline pl-2 dark:text-gray-400"></li>
        </ul>
    </div>
  );
}

export default BreadCrumbs;