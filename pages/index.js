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

      <main className="flex flex-col lg:mx-auto" style={{maxWidth:'1400px'}}>
        <div className="basis-2/6 sm:basis-1/2"><RecentWork /></div>
        <div className="basis-4/6 sm:basis-1/2 flex flex-col ">
            <About />
        </div>       
        </main>
     </div>
  )
}
