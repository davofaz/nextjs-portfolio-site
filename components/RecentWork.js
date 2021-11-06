import React from "react"
import Link from 'next/link'
import Image from 'next/image'

const RecentWork = () => {
    return (

        <ul className="mt-8 flex flex-wrap">
            <Link href="/portfolio/earthly-app">
            <li className="p-5 w-1/2 rounded-2xl drop-shadow-2xl md:w-1/4 p-1">
                    <a>
                        <Image
                        src="/recent-work-earthly.jpg"
                        alt="Earthly App"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
            <Link href="/portfolio/kt-app">
            <li className="p-5 w-1/2 rounded-2xl drop-shadow-2xl md:w-1/4 p-1">
                    <a>
                        <Image
                        src="/recent-work-ktapp.jpg"
                        alt="KT App"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
            <Link href="/portfolio/fired-pizza">
            <li className="p-5 w-1/2 rounded-2xl drop-shadow-2xl md:w-1/4 p-1">
                    <a>
                        <Image
                        src="/recent-work-fired.jpg"
                        alt="Fired Pizza"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
            <Link href="/portfolio/school-newsletter">
                <li className="p-5 w-1/2 rounded-2xl drop-shadow-2xl md:w-1/4 p-1">
                    <a>
                        <Image
                        src="/recent-work-newsletter.jpg"
                        alt="School Newsletter"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
          </ul>



    )
}

export default RecentWork