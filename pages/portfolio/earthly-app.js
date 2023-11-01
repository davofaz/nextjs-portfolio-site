import React from "react";
import Image from 'next/image';
import RecentWork from '../../components/RecentWork.js';
import { fadeInUp, fadeInLeft } from '../../animations/variants.js';
import FadeIn from '../../components/FadeIn';
import presentation from '../../public/recent-work-earthly-presentation.jpg';

export default function EarthlyApp() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">Earthly App</h1>
            <FadeIn variants={fadeInUp}>
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
            
                </div>
            </FadeIn>
            <FadeIn variants={fadeInLeft}>
                <RecentWork />
            </FadeIn>
        </main>
)}