
import Link from "next/link"
import React from "react"
import ThemeSwitch from '../components/ThemeSwitch'
import Image from "next/image"
import logo from "../public/df-logo2.png"
import { motion } from 'framer-motion'

const Navigation = () => {
    return (
        <div className="sticky bg-white top-0 z-20 py-2 border-b-8 border-black dark:bg-black dark:border-gray-700" style={{minWidth: '320px'}}>
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/" className="font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-gray-500">
                        <div className="flex">
                            <motion.div 
                                className="w-10 h-10 p-1 rounded-full dark:bg-gray-500"
                                style={{ margin:'0 auto', textAlign:'center' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1}}
                                transition={{delay:0.1}}> 
                                <Image
                                src={logo}
                                alt="DF Logo"
                                width={38}
                                height={38}
                                priority={true}
                                />
                            </motion.div>
                            <motion.h1                        
                                className="mt-2 mx-4"
                                initial={{ opacity: 0, x: 60}}
                                animate={{ opacity: 1, x: 0}}
                                transition={{delay:0.3}}>David Fazaldin</motion.h1>
                        </div>
                </Link>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Navigation;