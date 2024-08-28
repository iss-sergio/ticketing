import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className="auth-layout-wrap flex justify-center min-h-screen flex-col bg-cover items-center bg-red-200/10">
        <div className="container-session-v1 max-w-2xl">
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 bg-white">
                    <div className="p-5">
                        <div className="flex justify-center items-center p-6">
                            <img src="https://accionaweb.isstest.tech/assets/acciona-logo.png" alt="logo" width={100} height={100} />
                        </div>
                        <h1 className="mb-3 text-lg">Sign In </h1>
                        <form action="">
                        <div className="mb-3">
                            <label className="text-xs text-gray-600" htmlFor="">
                                Username
                            </label>
                            <input
                                className="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400"
                                defaultValue="admin@test.com"
                                type="email"
                                placeholder="Enter login name"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="text-xs text-gray-600" htmlFor="">
                                Password
                            </label>
                            <input
                                className="w-full px-4 py-1 bg-gray-100 focus:outline-none border border-gray-400"
                                defaultValue="*********"
                                type="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="mb-4">
                            <Link href="/sysadmin/dashboard">
                                <button className="bg-red-500 hover:bg-red-500/80 mb-2 text-white p-2 w-full">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                        <div className="text-right">
                            <a className="text-xs hover:text-red-500 underline text-gray-600" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="col-span-12 bg-cover lg:col-span-6 bg-gray-100/60">
                    <div className="flex justify-center items-center flex-col h-full px-4 py-2">
                        <Image src="/assets/illustrations/undraw_sign_up_n6im.svg" alt="logo" width={180} height={180} />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SignInPage