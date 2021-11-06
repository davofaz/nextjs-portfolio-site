
import Link from "next/link"
import React from "react"
import ThemeSwitch from '../components/ThemeSwitch'
import Image from "next/image"
import logo from "../public/df-logo2.png"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        <div className="flex">
                            <div className="w-10 h-10 p-1 rounded-full dark:bg-white"> 
                                <Image
                                src={logo}
                                alt="DF Logo"
                                width={38}
                                height={38}
                                placeholder="blur"
                                priority={true}
                                />
                            </div>
                            <h1 className="mt-3 mx-4">David Fazaldin</h1>
                        </div>
                    </a>
                </Link>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Navigation;