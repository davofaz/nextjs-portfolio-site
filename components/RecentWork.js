import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const RecentWork = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 bg-black dark:bg-gray-700">            
            <motion.div
                className="flex"
                animate={{
                    opacity: 0.8,
                    scale:1
                }}
                whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                }}
                whileTap={{
                    opacity: 1,
                    filter: 'brightness(120%)',
                    scale: 1.1
                }}>
                <Link href="/portfolio/noble-black">
                        <Image
                            src="/recent-work-noble-black.jpg"
                            alt="Noble Black - Private Licenced Drivers website design and development"                         
                            width={200}
                            height={200}/>
                </Link>
            </motion.div>
            <motion.div
                className="flex"
                animate={{
                    opacity: 0.8
                }}
                whileHover={{
                scale: 0.95,
                opacity: 1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="/portfolio/my-task-app">
                            <Image
                             src="/recent-work-mytasks-app.jpg"
                            alt="My Tasks App - Fully working TypeScript App"
                            width={200}
                            height={200} />
                    </Link>
        </motion.div>
        <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <a href="https://washlaunderette.com/" target="_blank" className="flex">
                        <Image
                        src="/recent-work-wash-wordpress-website.jpg"
                        alt="Wash Launderette - Next.js website"
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
         <motion.div
                className="flex"
                animate={{
                    opacity: 0.8
                }}
                whileHover={{
                scale: 0.95,
                opacity: 1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <a href="https://intiremoval.com/" target="_blank" className="flex">
                            <Image
                            src="/recent-work-intiremoval.jpg"
                            alt="Intiremoval - Wordpress Website"
                            width={200}
                            height={200} />
                    </a>
                </motion.div>  
        <motion.div
                className="flex"
                animate={{
                    opacity: 0.8
                }}
                whileHover={{
                scale: 0.95,
                opacity: 1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <a href="https://davofaz.github.io/recipe-app/" target="_blank" className="flex">
                            <Image
                            src="/recent-work-my-recipe-finder-app.jpg"
                            alt="My Recipe Finder App - Standaline React JS App"
                            width={200}
                            height={200} />
                    </a>
                </motion.div>
                <motion.div
                className="flex"
                animate={{
                    opacity: 0.8
                }}
                whileHover={{
                scale: 0.95,
                opacity: 1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="/portfolio/earthly-app">
                            <Image
                            src="/recent-work-earthly.jpg"
                            alt="Earthly App - UX/UI Concept"
                            width={200}
                            height={200} />
                    </Link>
                </motion.div>  
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                        <Link href="/portfolio/kt-app">
                            <Image
                            
                            src="/recent-work-ktapp.jpg"
                            alt="KT App - React Native"
                            width={200}
                            height={200} />
                        </Link>
                </motion.div>
             <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                        <a href="https://www.emcpersonaltrainer.uk/" target="_blank" className="flex">
                            <Image
                            
                            src="/recent-work-emc-personal-trainer.jpg"
                            alt="EMC Pesonal Training - Next.js website"
                            width={200}
                            height={200} />
                        </a>
                </motion.div>
            
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="/portfolio/fired-pizza">
                        <Image
                        src="/recent-work-fired.jpg"
                        alt="Fired Pizza Vercel Website"
                        width={200}
                        height={200} />
                    </Link>
                </motion.div>
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <a href="https://www.rapltd.london/" target="_blank" className="flex">
                        <Image
                        src="/recent-work-rap-rapid-applied-protection.jpg"
                        alt="RAP Ltd - Rapid Applied Protection  - Wordpress Website"
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <a href="https://urpy.co.uk/" target="_blank" className="flex">
                        <Image
                        src="/recent-work-urpy-cleaning-and-sanitization.jpg"
                        alt="Urpy - Cleaning and Sanitization - Wordpress Website"
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="/portfolio/wash-launderette">
                        <Image
                        src="/recent-work-wash-launderette.jpg"
                        alt="Wash Launderette App"
                        width={200}
                        height={200} />
                    </Link>
                </motion.div>
            
            
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="https://farakhparveen.com/">
                        <Image
                        src="/recent-work-farakh-parveen.jpg"
                        alt="Farakh Parveen - Shopify Website"                         
                        width={200}
                        height={200} />
                    </Link>
                </motion.div>
                <motion.div
                className="flex"
                animate={{
                    opacity: 0.8,
                }}
                whileHover={{
                scale: 0.95,
                opacity: 1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                  <Link href="https://www.latinsquares.co.uk">
                        <Image
                        src="/recent-work-latin-squares.jpg"
                        alt="Latin Squares Wordpress Website"
                        width={200}
                        height={200} />
                  </Link>
                </motion.div>
                <motion.div
                    className="flex"
                    animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="https://www.kt.org/ktplayer/#kttv-tabs|2">
                        <Image
                        src="/recent-work-kt-player.jpg"
                        alt="KT TV Player - Wordpress Website - custom divi modules"
                        width={200}
                        height={200} />
                    </Link>
                </motion.div>
                <motion.div
                    className="flex"
                    animate={{
                    opacity: 0.8,
                }}
                whileHover={{
                scale: 0.95,
                opacity: 1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                    <Link href="https://www.stmarybrookfield.com">
                        <Image
                        src="/recent-work-st-mary-brookfield.jpg"
                        alt="St Mary Brookfield - Wordpress Website"                         
                        width={200}
                        height={200} />
                    </Link>
                </motion.div>
                <motion.div 
                className="flex"    
                animate={{
                        opacity: 0.8,
                    }}
                    whileHover={{
                    scale: 0.95,
                    opacity: 1,
                    transition: { duration: 0.3 },
                     }}
                        whileTap={{ 
                        opacity: 1,
                        filter: 'brightness(120%)',
                        scale: 1.1 }}>
                     <Link href="https://www.lithuanianchurch.org/">
                        <Image
                        src="/recent-work-lithuanian-church-london.jpg"
                        alt="Lithuanian Church in London - Wordpress Website"
                        width={200}
                        height={200} />
                     </Link>
                </motion.div>
            
            <Link href="/portfolio/">
               
                        <h3 class="text-white text-2xl md:text-4xl p-4 md:p-8 uppercase font-thin dark:text-gray-300"> Recent Work</h3>
              
            </Link>
          </div>

    )
}

export default RecentWork