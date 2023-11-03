import React from 'react';
import RecentWork from '../../components/RecentWork';
import About from '../../components/About'
import Contact from '../../components/Contact'

export default function Test() {
    return (
        <main className="flex flex-col sm:flex-row-reverse sm:flex-row bg-black">
        <div className="basis-2/6 sm:basis-1/2"><RecentWork /></div>
        <div className="basis-4/6 sm:basis-1/2 flex flex-col"><div><About /></div>
            <div className="bg-zinc-100">{/*<Contact />*/}</div>
        </div>        
        </main>
    )
};