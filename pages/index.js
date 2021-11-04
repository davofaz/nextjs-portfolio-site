import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import RecentWork from '../components/RecentWork'

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
          <h2 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white"><Link href="/portfolio/">Examples of my recent work</Link></h2>
          
          <RecentWork/>
          <h2 className="text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">If:</h2>
          <div className="flex">
            <Link href="mailto:dfazaldin@gmail.com"><button className="w-1/2 underline border rounded-3xl m-4 p-8  hover:bg-red-300" type="button" title="Email: dfazaldin@gmail.com">you're a recruiter, web manager and need an all rounder who thinks deeply about design to join your team</button></Link>
            <Link href="mailto:dfazaldin@gmail.com"><a className="w-1/2 underline border rounded-3xl m-4 p-8  hover:bg-blue-300" type="button">you're a small to medium sized company/organisation and don't know where to start reach out to me.</a></Link>
          </div>
        </div>
      </main>

     
    </div>
  )
}
