import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import RecentWork from '../../components/RecentWork.js';
import presentation from '../../public/recent-work-noble-black-presentation.jpg';
import presentation2 from '../../public/recent-work-noble-black-desktop-presentation.jpg';

export default function NobleBlack() {
    return (
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
         <div className="basis-4/6 flex flex-col" style={{background:'#75c8eb'}}>
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
                    <h1 className="mb-4 font-bold">Noble Black</h1>
                    <p className="mb-4">A new project I am working on. I designed the logo and interface in Figma and build the website using wordpress and Divi. The focus was on its design being mobile first. My client didnt want log scrolling webpages so I designed it like a web app.</p>
                         <Link
                            href="https://noble-black.com"
                            passHref={true}
                            ><button className="inline-flex rounded-lg p-2 bg-cyan-600 text-white dark:text-cyan-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>  https://noble-black.com</button>
                         </Link>
                         <Image
                                src={presentation2}
                                className="mt-12"
                                alt="My Tasks App"
                                width={1625}
                                height={1787}
                                layout="responsive"
                                placeholder="blur"
                            />
                    </div>
                </FadeIn>
            </div>
            <div className="basis-2/6"><RecentWork /></div>
        </main>
)}