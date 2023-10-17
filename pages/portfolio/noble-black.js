import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import RecentWork from '../../components/RecentWork.js';
import { fadeInUp, fadeInLeft } from '../../animations/variants.js';
import FadeIn from '../../components/FadeIn';
import presentation from '../../public/recent-work-mytasks-app-presentation.jpg';

export default function MyTasksApp() {
    return (
        <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
            <h1 className="text-center mb-4 font-bold md:text-left ml-5">My Tasks App</h1>
            <FadeIn variants={fadeInUp}>
                <Image
                    src={presentation}
                    alt="My Tasks App"
                    width={1440}
                    height={1440}
                    layout="responsive"
                    placeholder="blur"
                />
                <div className="text-base p-4 leading-relaxed">
                <p className="mb-4">I built this app to help with my productivity levels and also to learn TypeScript. It lets a user add tasks/todos and store them to their local device storage.</p>
                 <p className="mb-4">Click the button below to use it. Android users can open it in Chrome and then 'Add to Home' and it will be installed on your homescreen like a native app.</p>
                
            <Link
                    href="https://davofaz.github.io/todo-app/"
                    passHref={true}
                ><a><button className="inline-flex border rounded-lg p-2 bg-gray-200 dark:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>  https://davofaz.github.io/todo-app/</button></a></Link>
                </div>
            </FadeIn>
            <FadeIn variants={fadeInLeft}>
                <RecentWork />
            </FadeIn>
        </main>
)}