
import Link from "next/link"
import React from "react"
import ThemeSwitch from '../components/ThemeSwitch'
import Image from 'next/image'

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        <div className="flex"><Image
                        src="/../public/df-logo2.png"
                        alt="DF Logo"
                        width={50}
                        height={50} /><h1 className="mt-4 mx-3">David Fazaldin</h1></div>
                    </a>
                </Link>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Navigation;