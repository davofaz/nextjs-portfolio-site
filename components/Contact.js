import React from "react"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-0 gap-y-0 border-8 border-b-8 border-t-8 border-black bg-white dark:border-black dark:bg-black">
            <div className="col-span-2 p-4">
                <h3 class="text-black text-center text-2xl bg-white md:text-4xl md:p-4 uppercase font-thin dark:text-gray-300">Contact me</h3>
            </div>
            <div className="col-span-2 md:col-span-1"><Link href="mailto:dfazaldin@gmail.com"><button className="md:text-left text-2xl p-8 bg-white hover:bg-red-100 active:bg-red-200 focus:outline-none focus:ring focus:ring-red-300" type="button" title="Email: dfazaldin@gmail.com">If you're a recruiter, web manager and need an all rounder who thinks deeply about design to join your team</button></Link></div>
            <div className="col-span-2 md:col-span-1"><Link href="mailto:dfazaldin@gmail.com"><button className="md:text-right text-2xl p-8 bg-white hover:bg-blue-100 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300" type="button"> If you're a small to medium sized company/organisation and don't know where to start or need advice reach out to me.</button></Link></div>
        </div>
    )
} 

export default Contact;