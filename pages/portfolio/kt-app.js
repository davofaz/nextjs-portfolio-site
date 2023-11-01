import React from "react"
import Image from 'next/image'
import RecentWork from '../../components/RecentWork.js'
import { fadeInUp, fadeInLeft } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'
import presentation from '../../public/kt-app-presentation3.jpg'

export default function KTApp() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">KT App</h1>
            <FadeIn  variants={fadeInUp}
            
            >
                <Image
                    src={presentation}
                    alt="KT APP Presentation"
                    width={1024}
                    height={1366}
                    layout="responsive"
                    placeholder="blur"
                        />
                <div className="text-base p-4 leading-relaxed">
                <p className="mb-4">I designed in Figma and built this React Native app using the <a href="https://expo.dev/" target="_blank">Expo framework</a>. 
                The purpose of the app was to allow users to find the latest sermons, live video, posts and contact information and donate via a simple interface instead of searching through the website which had 1000s of pages and posts.</p>
                <p className="mb-4">Some app screens pull in content directly from the Organisations wordpress website via Rest API and some lead users directly to the website.</p>
                <p className="mb-4">I have a fully working native Android version and the IOS version can be tested via the expo app.</p>
              
                </div>
            </FadeIn>
            <FadeIn variants={fadeInLeft}>
                <RecentWork />
            </FadeIn>
        </main>
    
    
    )
}