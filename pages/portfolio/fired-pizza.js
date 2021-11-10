import React from "react"
import Image from 'next/image'
import RecentWork from '../../components/RecentWork.js'
import { fadeInUp, fadeInLeft } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'

export default function FiredPizza() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">Fired Pizza</h1>
            <FadeIn  variants={fadeInUp}
            
            >
                <Image
                            src="/fired-pizza-presentation.jpg"
                            alt="Fired Pizza UI\UX Presentation"
                            width={834}
                            height={1194}
                            layout="responsive"
                        />
            </FadeIn>
            <FadeIn variants={fadeInLeft}>
                <RecentWork />
            </FadeIn>
        </main>
    
    
    )
}