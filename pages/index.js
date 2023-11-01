import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
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

      <main className="md:max-w-3xl mx-auto mt-0 antialiased">
       
        <div className="flex items-center justify-center flex-col" style={{minWidth: '320px'}}>
          {/*FadeIn variants={fadeInRight}> */}
          {/* <h2 className="text-2xl text-center mt-4 font-bold text-gray-900 lg:text-2xl dark:text-white"><Link href="/portfolio/">Examples of my recent work</Link></h2>*/}
          <RecentWork/>
          {/* </FadeIn>          */}
          <About/>
          <Contact/>
        </div>
         
         {/*<FadeIn variants={fadeInLeft}>*/}
          
          {/*</FadeIn>*/}
      </main>

     
    </div>
  )
}
