import React from "react"
import Image from 'next/image'
import RecentWork from '../../components/RecentWork.js'
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import presentation from '../../public/kt-app-presentation3.jpg'

export default function KTApp() {
    return (
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>           
        <div className="basis-4/6 flex flex-col" style={{background:'#6A8885'}}>
            <FadeIn variants={fadeInUp}>
                <Image
                    src={presentation}
                    alt="KT APP Presentation"
                    width={1024}
                    height={1366}
                    layout="responsive"
                    placeholder="blur"
                        />
                <div className="text-white dark:text-gray-200 mt-4 p-6 md:p-12 leading-relaxed">
                    <h1 className="mb-4 font-bold">KT App</h1>
                    <p className="mb-4">I designed in Figma and built this React Native app using the <a href="https://expo.dev/" target="_blank">Expo framework</a>. 
                    The purpose of the app was to allow users to find the latest sermons, live video, posts and contact information and donate via a simple interface instead of searching through the website which had 1000s of pages and posts.</p>
                    <p className="mb-4">Some app screens pull in content directly from the Organisations wordpress website via Rest API and some lead users directly to the website.</p>
                    <p className="mb-4">I have a fully working native Android version and the IOS version can be tested via the expo app.</p>
                </div>
            </FadeIn>
           </div>
                <div className="basis-2/6"><RecentWork /></div>
        </main>
    
    
    )
}