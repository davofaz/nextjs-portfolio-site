import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import About from '../components/About'
import RecentWork from '../components/RecentWork'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeInRight, fadeInLeft } from '../animations/variants.js'

function FadeInWhenVisible({ children, variants }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>David Fazaldin - UX/UI Designer &amp; Front End Dev - well rounded 'web guy'</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 max-w-4xl mx-auto mt-16 antialiased">
        <About/>
        <div className="container px-4 mx-auto">
          <FadeInWhenVisible variants={fadeInRight}> 
          <h2 className="text-2xl text-center mt-4 font-bold text-gray-900 lg:text-2xl dark:text-white"><Link href="/portfolio/">Examples of my recent work</Link></h2>
          <RecentWork/>
          </FadeInWhenVisible>
          <FadeInWhenVisible variants={fadeInLeft}>
          <h2 className="text-2xl text-center mt-4 mb-8 font-bold text-gray-900 lg:text-2xl dark:text-white">Contact me if:</h2>
          <ul className="flex flex-wrap">
            <li className="w-full md:w-1/2"><Link href="mailto:dfazaldin@gmail.com"><button className=" underline border rounded-3xl mb-8 p-8 hover:bg-red-300 md:mr-4" type="button" title="Email: dfazaldin@gmail.com">you're a recruiter, web manager and need an all rounder who thinks deeply about design to join your team</button></Link></li>
            <li className="w-full md:w-1/2"><Link href="mailto:dfazaldin@gmail.com"><a className="underline border rounded-3xl mb-8 p-8 hover:bg-blue-300 md:ml-4" type="button">you're a small to medium sized company/organisation and don't know where to start reach out to me.</a></Link></li>
          </ul>
          </FadeInWhenVisible>
        </div>
        
      </main>

     
    </div>
  )
}
