import React from "react";
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import RecentWork from '../../components/RecentWork.js';
import designSystem from '../../public/case-study-artsense-sticker-sheet_v2_1.jpg';
import lifecycle from '../../public/case-study-product-dev-lifecycle.jpg';
import thumbnail from '../../public/case-study-artsense-thumbnail_v2.jpg';
import presentationHome from '../../public/case-study-artsense-home-mockup_v2.jpg';
import presentationEvent from '../../public/case-study-artsense-event-page-mockup_v2.jpg';
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
        <>
        <Head>
            <title>David Fazaldin - UX/UI Designer &amp; Front End Dev - Figma, NextJs, Wordpress, Shopify, Wix </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
         <div className="basis-4/6 flex flex-col bg-amber-100">
            <FadeIn variants={fadeInUp}>
                     <Image
                            src={thumbnail}
                            alt="Art Sense App Hero - Your arts and culture curator "
                            layout="fit"
                            placeholder="blur"
                            className="pb-10"
                        />             
                    <div className="text-black dark:text-black mt-4 p-6 lg:p-12">
                        

                    <h1 className="mb-4 text-4xl">Artsense</h1>
                    <p className="mb-8">This case study was developed during my study in the Google Professional UX Design Certificate. The aim of this app was to develop an inclusive and accessible platform that enables all users to discover and book enjoyable exhibitions and art galleries tailored to their preferences and interests, while also enhancing their learning experience during the event.</p> 
                        <h2 className="text-2xl mt-12">Design System</h2>
                        <Image
                            src={designSystem}
                            alt="Art Sense - Design System"
                            layout="fit"
                            placeholder="blur"
                            className="py-10"
                        />
            
                        
            <p className="my-8">The project is a work in progress, and I will continuously update this page as I refine and enhance my designs. Below, you will find some of my case study slides, along with links to my low-fidelity and high-fidelity prototypes. To view the complete study, please click the link at the bottom of the page.</p>
            <h2 className="text-2xl">Product Development Life Cycle</h2>
                    <Image
                        src={lifecycle}
                        alt="UX Product Life Cycle"
                        width={1625}
                        height={1787}
                        layout="responsive"
                        placeholder="blur"
                        className="py-10"
                    />
                    <h2 className="text-2xl mb-4">Empathise/Brainstorm</h2>
                    <p>The idea for this app was developed based on interviews and secondary research, including data from the UK Government website. This research highlighted a significant lack of engagement and interest in museums and galleries among young people and individuals from deprived areas.</p>
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
                    <h2 className="text-2xl">Define</h2>
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
                    <h2 className="text-2xl">Ideate/Design</h2>
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
                    <h2 className="text-2xl">Prototype</h2>
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
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {/* Presentation */}
                            <div className="order-2 md:order-1 col-span-1 md:col-span-2 lg:col-span-3 lg:pt-10">
                                <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 text-sm md:text-base">
                                    <div className="md:pt-2">
                                        <ul className="md:mt-2">
                                            <li className="mb-4">For you section uses larger scale images for emphasis.</li>
                                            <li>Gestalt Principle: Common Region</li>
                                        </ul>
                                    </div>

                                    <div className="md:pt-2">
                                        <ul>
                                            <li>Typeface: Segoe UI</li>
                                            <li>Page Header: 20px</li>
                                            <li>Section Header/CTA: 18px</li>
                                            <li>Text: 14px</li>
                                            <li>Small Text: 12px</li>
                                        </ul>
                                    </div>

                                    <div className="pt-2 lg:pt-6 lg:w-3/5">
                                        <div className="grid grid-cols-1">
                                            <div className="px-2 mb-2">60-30-10 Colour Rule</div>
                                            <div className="bg-white text-black px-2 mb-2 rounded">#FFFFFF (60%)</div>
                                            <div className="px-2 mb-2 text-black rounded" style={{ background: '#CEE1F2' }}>#CEE1F2 (30%)</div>
                                            <div className="px-2 mb-2 rounded" style={{ background: '#36A0FF' }}>#36A0FF (10%)</div>
                                            <div className="bg-black rounded mb-2 text-white px-2">#000000 (text)</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="order-1 col-span-1 md:col-span-3 lg:col-span-2 py-4">

                                <Image
                                    src={presentationHome}
                                    alt="Art Sense App - Home"
                                    layout="fit"
                                    placeholder="blur"
                                    className="rounded-3xl border-4 border-white drop-shadow-lg"
                                /></div>

                            <div className="order-3 col-span-1 md:col-span-3 lg:col-span-2 py-4">
                                <Image
                                    src={presentationEvent}
                                    alt="Art Sense App - Event Page"
                                    layout="fit"
                                    placeholder="blur"
                                    className="rounded-3xl border-4 border-white drop-shadow-lg"
                                />
                            </div>

                            <div className="order-4 col-span-1 md:col-span-2 lg:col-span-3 md:pt-20">
                                <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 text-sm md:text-base">
                                    <div className="md:pt-2">
                                        <ul className="md:mt-2">
                                            <li className="md:mb-4">Back, save/like, share buttons use the accent colour.</li>
                                        </ul>
                                    </div>
                                    <div className="md:pt-2">
                                        <ul className="md:mt-2">
                                            <li className="mb-4">Centred CTA buttons for ease of use.</li>
                                            <li className="mb-4">Using scale for emphasis.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mx-auto py-12">
                            <iframe title="Artsense Hi-Fi Prototype" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="700" src="https://embed.figma.com/proto/EOZd3EH040p272qdAd5LvR/Museum-App?page-id=140%3A39&node-id=425-2489&node-type=canvas&viewport=2230%2C30%2C0.49&scaling=scale-down&content-scaling=fixed&starting-point-node-id=425%3A2415&embed-host=share" allowFullScreen></iframe>
                        </div>
                         <a
                            href="https://docs.google.com/presentation/d/1FxPDB99lvlW5zPMV7yz8NfdcoOCRSQ71ICNLTBE-_xI/edit#slide=id.gced80ebc1c_0_72"
                            target="_blank"
                            ><button className="inline-flex rounded-lg p-2 bg-amber-400 dark:text-amber-200 px-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg> &nbsp;Click to view my full case study</button>
                         </a>
                        
                    </div>
                </FadeIn>
            </div>
            <div className="basis-2/6 md:opacity-60"><RecentWork /></div>
            </main>

        </>
)}