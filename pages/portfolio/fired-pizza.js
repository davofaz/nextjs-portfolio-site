import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import RecentWork from '../../components/RecentWork.js'
import { fadeInUp, fadeInLeft } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'
import presentation from '../../public/fired-pizza-presentation.jpg'

export default function FiredPizza() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">Fired Pizza</h1>
            <FadeIn  variants={fadeInUp}
            
            >
                <Image
                    src={presentation}
                    alt="Fired Pizza UI\UX Presentation"
                    width={834}
                    height={1194}
                    layout="responsive"
                    placeholder="blur"
                        />
                <div className="text-base p-4 leading-relaxed">
                <p className="mb-4">I have known Chris a number of years and saw his interest in Neopolitan pizza grow to the point he started his own food truck. As he was busy getting his pizzas out there I wanted to help him with a simple fast loading single page mobile first website that would link potential customers to his social media accounts.</p>
                <p className="mb-4">I vectorized his logo, did all the wireframing and desktop and mobile designs in Figma for him to view.</p>
                <p className="mb-4">Then built it using NextJs and Vercel.</p>
                
              <Link
                    href="https://fired-pizza.vercel.app/"
                    passHref={true}
                ><button className="inline-flex border rounded-lg p-2 bg-gray-200 dark:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{marginRight:'0.5em'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg> Fired Pizza website</button></Link>
                </div>
            </FadeIn>
            <FadeIn variants={fadeInLeft}>
                <RecentWork />
            </FadeIn>
        </main>
    
    
    )
}