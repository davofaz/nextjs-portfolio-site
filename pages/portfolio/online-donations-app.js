import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import RecentWork from '../../components/RecentWork.js';
import before from '../../public/online-giving-before-2.png';
import versiontwo from '../../public/online-giving-v2.png';
import versionthree from '../../public/online-giving-v3-hifi-mockup.png';
import detail1 from '../../public/detailed-amount-input-2.png';
import detail2 from '../../public/detailed-personal-information-input.png';
import detail3 from '../../public/detailed-selection-radio-buttons.png';
import detail4 from '../../public/detailed-column-layout-2.png';

export default function OnlineDonations() {
    return (
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
            <div className="basis-4/6 flex flex-col bg-lime-100">
            <FadeIn variants={fadeInUp}>
                                  
                <div className="text-black dark:text-black mt-4 p-6 lg:p-12">
                    <h1 className="mb-4 text-4xl">Online Donations</h1>
                    
{/* Presentation */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                
                    <div className="order-2 md:order-1 col-span-1 md:col-span-2 lg:col-span-3 lg:pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-1 md:grid-rows-2 gap-4 text-sm md:text-base">                             
                            <div className="md:pt-2">
                                 <p className="mb-8 mr-4">I wanted to revisit one of my previous jobs where I brought some improvements to an online donation page for Kensington Temple (A UK based charity).</p><p>A php page with 3 steps using Bootstrap for the frontend connecting to payment portal and sending the user back to the receipt page. Below you will see the changes I made. Finally my design how I would update it today an explain my decision making.</p> 
                            </div>                        
                        </div>
                            </div>

                            <div className="order-1 col-span-1 md:col-span-2 lg:col-span-2 py-4">                
                            <Image
                                    src={before}
                                    alt="Online Donation Page - original Design"
                                    layout="fit"
                                    placeholder="blur"
                                            />
                            </div>

                            <div className="order-3 col-span-1 md:col-span-3 lg:col-span-2 py-4">
                                <Image
                                    src={versiontwo}
                                    alt="Online Donation Page - 2019 update"
                                    layout="fit"
                                    placeholder="blur"
                                />
                            </div>

                            <div className="order-4 col-span-1 md:col-span-2 lg:col-span-3 md:pt-20 md:ml-4">
                                            <h2 className="text-2xl mb-4">Improvements</h2>
                                            <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 text-sm md:text-base">

                                                <div className="md:pt-2">
                                                     <ul className="md:mt-2">
                                                        <li className="mb-4">Priming the user with the heading "Donate to KT"</li>
                                                        <li className="mb-4">Background image overlay to match homepage colors and increase the weight of the form.</li>
                                                        <li className="mb-4">Bootstrap colours and spacing.</li>
                                                        <li className="mb-4">Amount and currency inline  - cleaner</li>
                                                        <li className="mb-4">Fieldsets used to group similar items</li>
                                                        <li className="mb-4">Form Field tool tips</li>
                                                    </ul>
                                                </div>
                                            </div>
                            </div>
                            <div className="order-5 md:order-5 col-span-1 md:col-span-2 lg:col-span-3 lg:pt-10">
                                <div className="grid grid-cols-1 md:grid-cols-1 md:grid-rows-2 gap-4 text-sm md:text-base">
                                    <div className="md:pt-2">
                                        <h2 className="text-2xl mb-4">Here's how I would update this page for 2024/25. </h2>
                                        <ul className="md:mt-2">
                                            <li className="mb-4">60-30-10 colour rule used to emphasize visual hierachy and create a more accessible design using high contrast colours.</li>
                                            <li className="mb-4">Subtle 'sticky' navigation/progress bar showing 'Home, Confirm, Receipt' To show the user where they were in the process.</li>
                                            <li className="mb-4">Highlight and increase the visual weight of the Gift Aid section as this brings in alot for the organisation.</li>
                                            <li className="mb-4">Removed the distractions - background image and overlays for a clean well spaced design.</li>
                                            <li><Image
                                                src={detail1}
                                                alt="Detail 1 - Clearer amount input fields"
                                                width={1625}
                                                height={1787}
                                                layout="responsive"
                                                placeholder="blur"
                                                className="py-10"
                                            /></li>
                                            <li className="mb-4">The use of uniform negative space to create visual harmony and clarity. Figma auto layout with 30px 20px 40px 20px padding on all sections.</li>
                                            <li className="mb-4">Larger contrast between heading and normal text.</li>
                                            <li><Image
                                                src={detail2}
                                                alt="Detail 2 - Clean input fields"
                                                width={1625}
                                                height={1787}
                                                layout="responsive"
                                                placeholder="blur"
                                                className="py-10"
                                            /></li>
                                            <li className="mb-4">Gestalt principles of common region, similarity and proximity to clearly define each section and function.</li>
                                            <li><Image
                                                src={detail3}
                                                alt="Detail 3 - Radio Buttons"
                                                width={1625}
                                                height={1787}
                                                layout="responsive"
                                                placeholder="blur"
                                                className="py-10"
                                            /></li>
                                            <li className="mb-4">High contrast CTA button with a shadow used for the Next button to direct the user clearly to the next page.</li>
                                            <li className="mb-4">The design's colour palette and typeface could easily be changed and used for another purpose/organisation.</li>
                                            <li><Image
                                                src={detail4}
                                                alt="Detail 4 - Grid System"
                                                width={1625}
                                                height={1787}
                                                layout="responsive"
                                                placeholder="blur"
                                                className="py-10"
                                            /></li>
                                            <li className="mb-4">Used the Material Design grid system for uniform structure and balance of elements and willl be helpful for responsive design.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="order-6 col-span-1 md:col-span-3 lg:col-span-2 py-4">
                                <Image
                                    src={versionthree}
                                    alt="Online Donation Page - 2024/25 High Definition Mockup"
                                    width={1625}
                                    height={1787}
                                    layout="responsive"
                                    placeholder="blur"
                                    className="py-10"
                                />
                            </div>

            </div>
            
                         <a
                            href="https://www.figma.com/proto/GRCr2ORAUKMZTOMaweigWXQU/gifts-rework?page-id=149%3A98&node-id=162-537&node-type=canvas&viewport=269%2C-199%2C0.78&t=yyYjCMYpceGtGE2l-1&scaling=scale-down&content-scaling=fixed"
                            target="_blank"
                            ><button className="inline-flex rounded-lg p-2 bg-violet-600 text-white dark:text-amber-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg> &nbsp;Click to view my prototype</button>
                         </a>
                        
                    </div>
                </FadeIn>
            </div>
            <div className="basis-2/6 md:opacity-60"><RecentWork /></div>
        </main>
)}