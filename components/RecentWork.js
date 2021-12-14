import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const RecentWork = () => {
    return (

        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 gap-y-0 border-8 border-b-0 border-black bg-black">
            <Link href="/portfolio/earthly-app">
                <motion.div 
                className="p-0 drop-shadow-2xl"
                whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-earthly.jpg"
                        alt="Earthly App"
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/kt-app">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-ktapp.jpg"
                        alt="KT App"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/fired-pizza">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-fired.jpg"
                        alt="Fired Pizza"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/wash-launderette">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-wash-launderette.jpg"
                        alt="Wash Launderette"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/fired-pizza">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-farakh-parveen.jpg"
                        alt="Fired Pizza"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/earthly-app">
                <motion.div 
                className="p-0 drop-shadow-2xl"
                whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
                 }}
                    whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-latin-squares.jpg"
                        alt="Earthly App"
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/kt-app">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-kt-player.jpg"
                        alt="KT App"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/fired-pizza">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-wash-wordpress-website.jpg"
                        alt="Fired Pizza"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/kt-app">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-st-mary-brookfield.jpg"
                        alt="KT App"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/fired-pizza">
                <motion.div 
                    className="p-0 drop-shadow-2xl"
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                        whileTap={{ scale: 0.9 }}>
                    <a>
                        <Image
                        src="/recent-work-lithuanian-church-london.jpg"
                        alt="Fired Pizza"
                         
                        width={200}
                        height={200} />
                    </a>
                </motion.div>
            </Link>
            <Link href="/portfolio/" className="md:col-span-4">
               
                    <a>
                        <h3 class="text-white text-2xl md:text-4xl md:p-8 uppercase font-thin"> Recent Work</h3>
                    </a>
            </Link>
          </div>

    )
}

export default RecentWork