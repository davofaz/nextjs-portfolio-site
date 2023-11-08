import React from "react"
import Image from "next/image"
import profile from "../public/david-fazaldin-profile.jpg"

const About = () => {
    
    return (
        <div className="flex flex-col">
        <div
                className="relative"
                style={{
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
             >
                <img
                  src={profile.src}
                  alt="Profile"
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  className="absolute bottom-0 w-full text-white dark:text-grey-300 p-6 lg:px-24 lg:px-24 text-2xl md:text-4xl md:p-8 md:colspan-2 uppercase font-thin">
                  About Me
                </div>
            </div>
                   
         <div className="p-6 lg:px-24 lg:pt-24  text-justify dark:text-gray-400">
          
              <p className="pb-6">Hi, I'm David, a London-based designer with a passion for crafting digital experiences. My journey began with a foundation year at Chelsea Art School, leading me to explore Graphic Design & Advertising. Surprisingly, it was web design that truly captivated me, a fascination that has endured for over two decades.</p>
              <p className="pb-6">Today, I proudly freelance full-time in the realms of UX/UI and Front-End Development. With a diverse background spanning Charity, Media, and Education, I hold a deep commitment to creating accessible and inclusive digital solutions.</p>
              <p className="pb-6">My process is well-defined: I kick off each project with comprehensive business and user research, followed by a meticulous review of existing websites or apps. Wireframing is my canvas for constructing layouts, and from there, I meticulously build and refine the final designs, rigorously testing for accessibility.</p>
              <p className="pb-6">In my toolkit, you'll find Figma for design and Visual Studio for coding, with Git being my constant companion for version control.</p>
              <p className="pb-6">If you're in the market for a website or CMS solution, I bring extensive expertise in platforms like WordPress, Divi, Wix, Shopify, and more. Let's connect and bring your digital vision to life!</p>
              <button className="inline-flex rounded-lg bg-zinc-200 px-6 py-2 hover:bg-zinc-400 hover:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                <a href="mailto:df@davidfazaldin.com">Contact me: df@davidfazaldin.com</a>
            </button>
          </div>
       </div>
    )
}

export default About;