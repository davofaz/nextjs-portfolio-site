import React from "react";
import Image from 'next/image';
import RecentWork from '../../components/RecentWork.js';
import { fadeInUp } from '../../animations/variants.js';
import FadeIn from '../../components/FadeIn';
import presentation from '../../public/recent-work-earthly-presentation.jpg';

export default function EarthlyApp() {
    return (
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
         <div className="basis-4/6 flex flex-col" style={{background:'#D7EF3F'}}>            
            <FadeIn variants={fadeInUp}>
                <Image
                    src={presentation}
                    alt="Earthly Presentation"
                    width={1440}
                    height={1890}
                    layout="responsive"
                    placeholder="blur"
                />
                <div className="text-cyan-950 dark:text-cyan-700 mt-4 p-6 md:p-12 leading-relaxed">
                    <h1 className="mb-4 font-bold">Earthly App</h1>
                    <p className="mb-4">My concept for earthly app a potential fund raising app to help users save the planet by donating to green projects.</p>
                    <p className="mb-4">This was one of those just for fun projects so I could take the boring task for signing up to a service and make it a more enjoyable experience.</p>
                </div>
           </FadeIn>
            </div>
            <div className="basis-2/6"><RecentWork /></div>
        </main>
)}