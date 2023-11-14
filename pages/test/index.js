import React from 'react';
import RecentWork from '../../components/RecentWork';
import About from '../../components/About'

export default function Test() {
    return (
        <main className="flex flex-col lg:mx-auto" style={{maxWidth:'1400px'}}>
        <div className="basis-2/6 sm:basis-1/2"><RecentWork /></div>
        <div className="basis-4/6 sm:basis-1/2 flex flex-col ">
            <About />
            <button className="bg-zinc-100 mx-6 mx-24 p-4 hover:bg-zinc-200 dark:bg-gray-600 dark:hover:bg-gray-500">
                <a href="mailto:df@davidfazaldin.com">Contact me: df@davidfazaldin.com</a>
            </button>
        </div>       
        </main>
    )
};