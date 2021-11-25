import React from "react"
import Image from 'next/image'
//import Link from 'next/link'
import RecentWork from '../../components/RecentWork.js'
import { fadeInUp, fadeInLeft } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'
import presentation from '../../public/recent-work-earthly-presentation.jpg'

export default function EarthlyApp() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">Earthly App</h1>
            <FadeIn  variants={fadeInUp}
            
            >
                <Image
                    src={presentation}
                    alt="Earthly Presentation"
                    width={1440}
                    height={1890}
                    layout="responsive"
                    placeholder="blur"
                        />
                <div className="text-base p-4 leading-relaxed">
                <p className="mb-4">My concept for earthly app a potential fund raising app to help users save the planet by donating to green projects.</p>
                <p className="mb-4">This was one of those just for fun projects so I could take the boring task for signing up to a service and make it a more enjoyable experience.</p>

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