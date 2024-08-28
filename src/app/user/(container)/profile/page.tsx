import React from 'react'
import Card from '@/components/card';
import Image from 'next/image';
import styles from './styles/profile.module.scss'

type Props = {}

export default function ProfileContainer({}: Props) {
  return (
    <>
        <Card noPadding={true} cn={`${styles.userProfile} w-[400px] mx-auto`}>
            <div className={`${styles.headerCover}`} />
                <div className="flex justify-center z-10 -m-20">
                    <div className="text-center">
                        <Image
                            className="relative z-1 w-20 h-20 m-auto mt-10 rounded-full border-2 border-white"
                            src="/assets/illustrations/user.png"
                            alt="User Avatar"
                            width={120}
                            height={120}
                        />
                        <p className="text-2xl">Juan Doe</p>
                        <p className="text-gray-600 text-sm">System Admin</p>
                        <p className="text-gray-600 text-xs pt-4">Date Joined: Jan 01, 2024</p>
                    </div>
                    
                </div>
            <div className="mt-20 p-5">
                <div className="flex flex-col items-center pb-10">
                    <div className="flex mt-4 md:mt-6 gap-3">
                        <button type="button" role="button" className="border px-4 py-2 bg-white border-red-600 text-red-600 hover:text-white hover:bg-red-500 mb-2 text-red p-2 w-auto ">
                            Reset Password
                        </button>
                        <button type="button" role="button" className="bg-red-500 hover:bg-red-600 mb-2 text-white px-4 w-auto">
                            Disable Account
                        </button>
                    </div>
                </div>
            </div>
        </Card>

    </>
    
  )
}