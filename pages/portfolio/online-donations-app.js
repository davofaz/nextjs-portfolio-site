import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import RecentWork from '../../components/RecentWork.js';
import before from '../../public/online-giving-before-2.png';
import versiontwo from '../../public/online-giving-v2.png';
import versionthree from '../../public/online-giving-v3-hifi-mockup.png';
import palette from '../../public/case-study-online-donations-palette.png';
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
                
                            <div className="col-span-1 md:col-span-2 lg:pt-10">
                                <p className="mb-8 mr-4 md:pt-2">I revisited a previous project where I improved an online donation page for Kensington Temple, a UK-based charity. The original page was a PHP application with three steps, using Bootstrap for the frontend, connecting to a payment portal, and redirecting users to a receipt page.</p><p>Below, you'll see the changes I made and my design approach for updating the page today, along with explanations of my decisions.</p> 
                             </div>

                            <div className="col-span-1 md:col-span-3 md:ml-4 lg:ml-10 py-4">                
                                <Image
                                        src={before}
                                        alt="Online Donation Page - original Design"
                                        className="object-fill"
                                        placeholder="blur"
                                 />
                            </div>

                            
                            <div className="col-span-1 md:col-span-2">
                                            <h2 className="text-2xl mb-4">Changes</h2>
                                            

                                                <div className="md:pt-2">
                                                    <ul className="md:mt-2 divide-y divide-slate-300">
                                                        <li className="py-2">Added the heading "Donate to KT" to prime the user.</li>
                                                        <li className="py-2">Utilized Bootstrap colors and spacing.</li>
                                                        <li className="py-2">Aligned amount and currency fields inline for a cleaner look.</li>
                                                        <li className="py-2">Used fieldsets to group related items.</li>
                                                        <li className="py-2">Fieldsets used to group similar items</li>
                                                        <li className="py-2">FAdded tooltips to form fields for better guidance.</li>
                                                    </ul>
                                                 </div>

                            </div>

                            <div className="col-span-1 md:col-span-3 md:ml-4 lg:ml-10 py-4">
                                <Image
                                    src={versiontwo}
                                    alt="Online Donation Page - 2019 update"
                                    className="object-fill"
                                    placeholder="blur"
                                />
                            </div>
                            
                            <div className="col-span-1 md:col-span-2 lg:pt-10">
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-sm md:text-base">
                                    <div className="md:pt-2">
                                        <h2 className="text-2xl mb-4">Here's how I would update this page for 2024/25. </h2>
                                        <ul className="md:mt-2 divide-y divide-slate-300">
                                           
                                            <li className="py-2"> <Image
                                                src={palette}
                                                alt="Colour Palette"
                                                placeholder="blur"
                                                className="py-10 object-fill"
                                            />Applied the 60-30-10 color rule to emphasize visual hierarchy and create a more accessible design with high contrast colors.</li>
                                            <li className="py-2">Introduced a subtle 'sticky' navigation/progress bar showing 'Home, Confirm, Receipt' to indicate the user's progress.</li>
                                            <li className="py-2">Highlighted and increased the visual weight of the Gift Aid section, as it significantly benefits the organization.</li>
                                            <li className="py-2">Removed distractions such as background images and overlays for a clean, well-spaced design.</li>
                                            <li><Image
                                                src={detail1}
                                                alt="Detail 1: Enhanced the clarity of amount input fields."
                                                placeholder="blur"
                                                className="py-10 object-fill"
                                            /></li>
                                            <li className="py-2">Used uniform negative space to create visual harmony and clarity, with Figma auto layout padding of 30px, 20px, 40px, and 20px in all sections.</li>
                                            <li className="py-2">Increased the contrast between headings and regular text.</li>
                                            <li><Image
                                                src={detail2}
                                                alt="Detail 2: Improved the cleanliness of input fields."
                                                placeholder="blur"
                                                className="py-10 object-fill"
                                            /></li>
                                            <li className="py-2">Applied Gestalt principles of common region, similarity, and proximity to clearly define each section and function.</li>
                                            <li><Image
                                                src={detail3}
                                                alt="Detail 3: Enhanced the design of radio buttons."
                                                placeholder="blur"
                                                className="py-10 object-fill"
                                            /></li>
                                            <li className="py-2">Utilized a high-contrast CTA button with a shadow to clearly direct users to the next page.</li>
                                            <li className="py-2">Designed the color palette and typeface to be easily adaptable for other purposes or organizations.</li>
                                            <li><Image
                                                src={detail4}
                                                alt="Detail 4: Implemented the Material Design grid system for uniform structure and balance of elements, aiding responsive design."
                                                placeholder="blur"
                                                className="py-10 object-fill"
                                            /></li>
                                            <li className="py-2">Implemented the Material Design grid system for uniform structure and balance of elements, aiding responsive design.</li>

                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-3  md:ml-4 lg:ml-10 py-4">
                                <Image
                                    src={versionthree}
                                    alt="Online Donation Page - 2024/25 High Definition Mockup"
                                    priority="true"
                                    placeholder="blur"
                                    className="py-10 object-fill"
                                />
 </div>
                           
                        </div>
                        <div className="mx-auto py-12">
                            <h2 className="text-2xl mb-4">Prototype</h2>
                            <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="700" src="https://embed.figma.com/proto/GRCr2ORAUKMZTOMaweigWXQU/gifts-rework?page-id=149%3A98&node-id=162-537&node-type=canvas&viewport=543%2C609%2C0.41&scaling=scale-down&content-scaling=fixed&embed-host=share" allowFullScreen></iframe>
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