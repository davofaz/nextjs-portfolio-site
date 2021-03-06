import React from "react"
import Image from 'next/image'
//import Link from 'next/link'
import RecentWork from '../../components/RecentWork.js'
import { fadeInUp, fadeInLeft } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'
import presentation from '../../public/recent-work-wash-presentation.jpg'

export default function washlaunderette() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">Wash Launderette Web App</h1>
            <FadeIn  variants={fadeInUp}
            
            >
                <Image
                    src={presentation}
                    alt="Wash Launderette Presentation"
                    width={1440}
                    height={1890}
                    layout="responsive"
                    placeholder="blur"
                        />
                <div className="text-base p-4 leading-relaxed">
                <p className="mb-4">My concept for Wash Launderette - A high-tech state of the art coin operated launderette in Shepherds Bush, London.</p>
                <p className="mb-4">I built the first version using Wordpress and the Divi Theme but wasn't happy with loading times.</p>
                <p className="mb-4"> I always start with pen and paper then move into Figma to work on medium fidelity wireframes. Above you can see my final design overlaying medium and high fidelity greyscale wireframes. I also use the Figma mirror app on my phone to develop a working prototype which helps to refine the design process and user experience further.</p>
                
                <p className="mb-4">I am currently developing the next version using Vercel :) Check back later for that</p>
              {/*<Link
                    href="https://fired-pizza.vercel.app/"
                    passHref={true}\
                ><a><button className="inline-flex border rounded-lg p-2 bg-gray-200 dark:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>  https://fired-pizza.vercel.app/</button></a></Link>*/}
                </div>
            </FadeIn>
            <FadeIn variants={fadeInLeft}>
                <RecentWork />
            </FadeIn>
        </main>
    
    
    )
}