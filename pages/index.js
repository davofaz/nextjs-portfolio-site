import Head from 'next/head'
import About from '../components/About'
import RecentWork from '../components/RecentWork'
import { fadeInRight, fadeInLeft } from '../animations/variants.js'
import FadeIn from '../components/FadeIn'


export default function Home() {
  return (
    <div>
      <Head>
        <title>David Fazaldin - UX/UI Designer &amp; Front End Dev - Figma, NextJs, Wordpress, Shopify, Wix </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<main className="md:max-w-3xl mx-auto mt-0 antialiased">
       
        <div className="flex items-center justify-center flex-col" style={{minWidth: '320px'}}>
          <RecentWork/>
          <About/>
        </div>
         
      </main>*/}

      <main className="flex flex-col sm:flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
        <div className="basis-2/6 sm:basis-1/2"><RecentWork /></div>
        <div className="basis-4/6 sm:basis-1/2 flex flex-col ">
            <About />
            <button className="bg-zinc-100 mx-6 mx-24 p-4 hover:bg-zinc-200 dark:bg-gray-600 dark:hover:bg-gray-500">
                <a href="mailto:df@davidfazaldin.com">Contact me: df@davidfazaldin.com</a>
            </button>
        </div>       
        </main>

     
    </div>
  )
}
