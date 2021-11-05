import React from "react"
import Link from 'next/link'
import Image from 'next/image'

const RecentWork = () => {
    return (

        <ul className="mt-8 flex">
            <Link href="/portfolio/earthly-app">
            <li className="m-4 w-1/4 rounded-2xl drop-shadow-2xl">
                    <a>
                        <Image
                        src="../public/recent-work-earthly.jpg"
                        alt="Earthly App"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
            <Link href="/portfolio/kt-app">
            <li className="m-4 w-1/4 rounded-2xl drop-shadow-2xl">
                    <a>
                        <Image
                        src="../public/recent-work-ktapp.jpg"
                        alt="KT App"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
            <Link href="/portfolio/fired-pizza">
            <li className="m-4 w-1/4 rounded-2xl drop-shadow-2xl">
                    <a>
                        <Image
                        src="../public/recent-work-fired.jpg"
                        alt="Fired Pizza"
                        className="rounded-2xl"
                        width={200}
                        height={200} />
                    </a>
                </li>
            </Link>
            <Link href="/portfolio/school-newsletter">
                <li className="m-4 w-1/4  rounded-2xl drop-shadow-2xl">
                    <a>
                        <Image
                        src="../public/recent-work-newsletter.jpg"
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