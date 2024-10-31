import React from "react";
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp } from '../../animations/variants.js'
import FadeIn from '../../components/FadeIn'
import RecentWork from '../../components/RecentWork.js';
import presentation from '../../public/recent-work-mytasks-app-presentation.jpg';


export default function MyTasksApp() {
    return (
         <>
            <Head>
                <title>David Fazaldin - UX/UI Designer &amp; Front End Dev - Figma, NextJs, Wordpress, Shopify, Wix </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
       <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
             <div className="basis-4/6 flex flex-col" style={{background:'#86CBDA'}}>
                <FadeIn variants={fadeInUp}>
                    <Image
                        src={presentation}
                        alt="My Tasks App"
                        width={1440}
                        height={1440}
                        layout="responsive"
                        placeholder="blur"
                    />
                    <div className="text-cyan-950 dark:text-cyan-700 mt-4 p-6 md:p-12 leading-relaxed">
                        <h1 className="mb-4 font-bold">My Tasks App</h1>
                        <p className="mb-4">I built this app to help with my productivity levels and also to learn TypeScript. It lets a user add tasks/todos and store them to their local device storage.</p>
                         <p className="mb-4">Click the button below to use it. Android users can open it in Chrome and then 'Add to Home' and it will be installed on your homescreen like a native app.</p>
                
                        <Link
                            href="https://davofaz.github.io/todo-app/"
                            passHref={true}
                        ><button className="inline-flex rounded-lg p-2 px-6 bg-cyan-200 dark:text-cyan-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>  Try out my todo app</button></Link>
                    </div>
                </FadeIn>
                </div>
            <div className="basis-2/6 md:opacity-60"><RecentWork /></div>
            </main>
        </>
)}