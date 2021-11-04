import React from "react"
import Link from 'next/link'

const RecentWork = () => {
    return (

        <ul className="mt-8 flex">
            <Link href="/portfolio/earthly-app"><li className="px-1 border m-4 w-1/4 h-52"><a>Earthly App</a></li></Link>
            <Link href="/portfolio/kt-app"><li className="px-1 border m-4 w-1/4 h-52"><a>KT App</a></li></Link>
            <Link href="/portfolio/fired-pizza"><li className="px-1 border m-4 w-1/4 h-52"><a>Fired Pizza</a></li></Link>
            <Link href="/portfolio/school-newsletter"><li className="px-1 border m-4 w-1/4 h-52"><a>School Newsletter</a></li></Link>
          </ul>



    )
}

export default RecentWork