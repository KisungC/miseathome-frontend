'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ClientOnly from "./ClientOnly"

const NavBar = () => {
    const router = useRouter()

    const handleLogin = () => {
        router.push('/login')
    }

    const handleHome = () => {
        router.push('/')
    }

    return (
        <ClientOnly>
            <nav className="flex w-full flex-wrap items-center justify-between bg-[#FFF4E1] py-2 shadow-dark-mild lg:py-2 fixed z-50">
                <div className="flex w-full flex-row items-center justify-between px-3">
                    <span className="ms-2 text-m md:text-xl text-black whitespace-nowrap" onClick={handleHome}>
                        Mise at Home
                    </span>
                    <div className="w-full flex justify-end">
                        <div className="ms-5 hidden w-[30%] items-center justify-center me-5 md:flex">
                            <input
                                type="search"
                                className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none "
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2" />
                            <span
                                className="flex items-center cursor-pointer whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 [&>svg]:w-5"
                                id="basic-addon2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>
                        <button
                            className="bg-transparent hover:bg-[#FFB700] text-primary font-semibold cursor-pointer hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
                            onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </ClientOnly>
    )
}

export default NavBar
