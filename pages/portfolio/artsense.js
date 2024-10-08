import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import RecentWork from '../../components/RecentWork.js';
import presentation from '../../public/case-study-artsense-presentation.jpg';
import goalstatement from '../../public/case-study-goal-statement.jpg';
import userresearch from '../../public/case-study-user-research-summary.jpg';
import persona from '../../public/case-study-pesona-1.jpg';
import userjourneymap from '../../public/case-study-user-journey-map.jpg';
import paperwireframe from '../../public/case-study-paper-wireframes.jpg';
import lofiprototype from '../../public/case-study-lo-fi-prototype.jpg';
import accessibility from '../../public/case-study-accessibility.jpg';
import hifiprototype from '../../public/case-study-hi-fi-prototype.jpg';

export default function Artsense() {
    return (
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
         <div className="basis-4/6 flex flex-col" style={{background:'#7AAEDC'}}>
            <FadeIn variants={fadeInUp}>
                    <Image
                        src={presentation}
                        alt="My Tasks App"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                    />
                <div className="text-cyan-950 dark:text-cyan-700 mt-4 p-6 md:p-12 leading-relaxed">
                    <h1 className="mb-4 font-bold">Case Study: Artsense</h1>
                    <p className="mb-4">The goal of this app was to create an inclusive app that helps all users find fun exhibitions and art galleries to visit. The project is ongoing and I will be updating this page as I iterate and improve my designs. Below you can see some of my case study slides including links to my lo-fi and hi-fi prototypes. To see the full study click the link at the bottom of the page.</p>

                    
                    <Image
                        src={userresearch}
                        alt="User Research Summary"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    <Image
                        src={persona}
                        alt="User Research Summary"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    <Image
                        src={userjourneymap}
                        alt="User Journey Map"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                     <Image
                        src={goalstatement}
                        alt="Goal Statement"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    <Image
                        src={paperwireframe}
                        alt="Paper Wireframe"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    <a href="https://www.figma.com/proto/EOZd3EH040p272qdAd5LvR/Museum-App?page-id=0%3A1&node-id=1-3&node-type=CANVAS&viewport=-832%2C-152%2C0.82&t=1XYXDirnBS3d43Fk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3" target="_blank" alt="Click to view my prototype">
                    <Image
                        src={lofiprototype}
                        alt="Lo-Fi Prototype"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    </a>
                    <Image
                        src={accessibility}
                        alt="Accessibility Considerations"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    <a href="https://www.figma.com/proto/EOZd3EH040p272qdAd5LvR/Museum-App?page-id=140%3A39&node-id=140-257&node-type=frame&viewport=1279%2C467%2C0.5&t=JXRjtPbGAGp6Q06O-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=140%3A41" target="_blank" alt="Click to view my prototype">
                    <Image
                        src={hifiprototype}
                        alt="Hi-Fi Prototype"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    </a>
                    
                         <a
                            href="https://docs.google.com/presentation/d/1FxPDB99lvlW5zPMV7yz8NfdcoOCRSQ71ICNLTBE-_xI/edit#slide=id.gced80ebc1c_0_72"
                            target="_blank"
                            ><button className="inline-flex rounded-lg p-2 bg-cyan-600 text-white dark:text-cyan-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg> &nbsp;Click to view my full case study</button>
                         </a>
                        
                    </div>
                </FadeIn>
            </div>
            <div className="basis-2/6"><RecentWork /></div>
        </main>
)}