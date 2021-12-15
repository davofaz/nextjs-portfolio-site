import React from "react"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="grid grid-cols-6 gap-2 md:grid-cols-4 gap-y-0 border-8 border-b-8 border-t-8 border-black bg-white dark:border-black dark:bg-black">
            <div className="col-span-6">
                <h3 class="text-black text-2xl bg-white md:text-4xl md:p-8 uppercase font-thin dark:text-gray-300">Contact me</h3>
            </div>
            <div className="col-span-2 p-6"><Link href="mailto:dfazaldin@gmail.com"><button className="text-left" type="button" title="Email: dfazaldin@gmail.com">If you're a recruiter, web manager and need an all rounder who thinks deeply about design to join your team</button></Link></div>
            <div className="col-span-2 p-6"><Link href="mailto:dfazaldin@gmail.com"><button className="text-right" type="button"> If you're a small to medium sized company/organisation and don't know where to start reach out to me.</button></Link></div>
        </div>
    )
}

export default Contact;