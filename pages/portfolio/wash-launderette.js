import React from "react"
import Image from 'next/image'
import RecentWork from '../../components/RecentWork.js'
import { fadeInUp } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'
import presentation from '../../public/recent-work-wash-presentation.jpg'

export default function washlaunderette() {
    return (
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
         <div className="basis-4/6 flex flex-col" style={{background:'#F2F3C7'}}>
            <FadeIn variants={fadeInUp}><Image
                    src={presentation}
                    alt="Wash Launderette Presentation"
                    width={1440}
                    height={1890}
                    layout="responsive"
                    placeholder="blur"
                        />
                <div className="text-cyan-950 dark:text-cyan-700 mt-4 p-6 md:p-12 leading-relaxed">
                    <h1 className="mb-4 font-bold">Wash Launderette Web App</h1>
                    <p className="mb-4">My concept for Wash Launderette - A high-tech state of the art coin operated launderette in Shepherds Bush, London.</p>
                    <p className="mb-4">I built the first version using Wordpress and the Divi Theme but wasn't happy with loading times.</p>
                    <p className="mb-4"> I always start with pen and paper then move into Figma to work on medium fidelity wireframes. Above you can see my final design overlaying medium and high fidelity greyscale wireframes. I also use the Figma mirror app on my phone to develop a working prototype which helps to refine the design process and user experience further.</p>
                </div>
           </FadeIn>
            </div>
            <div className="basis-2/6"><RecentWork /></div>
        </main>
    
    
    )
}