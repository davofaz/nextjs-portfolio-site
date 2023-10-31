import React from "react"
import Image from "next/image"
import profile from "../public/david-fazaldin-2021-av.png"

const About = () => {
    return (
        <div className="grid grid-cols-6 gap-0 md:grid-cols-4 gap-y-0 border-8 border-b-8 border-t-0 border-black bg-black dark:border-gray-700 dark:bg-gray-700">
             <div className="col-span-2">
            <h3 className="text-white p-2 text-2xl md:text-4xl md:p-8 md:colspan-2 uppercase font-thin dark:text-gray-300">About Me</h3>
            </div>
            <div className="col-span-4 md:col-span-2">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        width={450}
                        height={450}
                        placeholder="blur"
                    />
            </div>
           
            <div className="text-white text-2xl p-4 md:p-8 bg-black dark:bg-gray-700 col-span-6 border-black  mb-0 pb-0 dark:text-gray-300 md:border-0">
                        <p className="pb-6">Hi, I'm David, a London-based designer with a passion for crafting digital experiences. My journey began with a foundation year at Chelsea Art School, leading me to explore Graphic Design & Advertising. Surprisingly, it was web design that truly captivated me, a fascination that has endured for over two decades.</p>
                        <p className="pb-6">Today, I proudly freelance full-time in the realms of UX/UI and Front-End Development. With a diverse background spanning Charity, Media, and Education, I hold a deep commitment to creating accessible and inclusive digital solutions.</p>
                        <p className="pb-6">My process is well-defined: I kick off each project with comprehensive business and user research, followed by a meticulous review of existing websites or apps. Wireframing is my canvas for constructing layouts, and from there, I meticulously build and refine the final designs, rigorously testing for accessibility.</p>
                        <p className="pb-6">In my toolkit, you'll find Figma for design and Visual Studio for coding, with Git being my constant companion for version control.</p>
                        <p className="pb-6">If you're in the market for a website or CMS solution, I bring extensive expertise in platforms like WordPress, Divi, Wix, Shopify, and more. Let's connect and bring your digital vision to life!</p>
           </div>
        </div>
    )
}

export default About;