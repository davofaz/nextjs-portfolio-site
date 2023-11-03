import Link from "next/link"
import React from "react"
import ThemeSwitch from '../components/ThemeSwitch'
import Image from "next/image"
import logo from "../public/df-logo2.png"
import { motion } from 'framer-motion'

const Navigation = () => {
    return (
        <div className="sticky bg-white top-0 z-20 py-2 mx-auto dark:bg-black">
            <div className="container px-4 mx-auto flex items-center justify-between" style={{minWidth: '320px', maxWidth:'1400px'}}>
                <Link href="/" className="font-medium tracking-wider transition-colors text-gray-900 hover:text-gray-600 dark:hover:text-gray-200 uppercase dark:text-gray-400">
                        <div className="flex">
                            <motion.div 
                                className="w-10 h-10 p-1"
                                style={{ margin:'0 auto', textAlign:'center' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1}}
                                transition={{delay:0.1}}> 
                                <Image
                                className="dark:invert dark:opacity-50 dark:hover:opacity-80"
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