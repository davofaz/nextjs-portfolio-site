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
                        <p className="pb-6">
                            I'm David, a designer based in London in the UK. After my foundation year at Chelsea Art School I realised that design would play a key role in my life. Being influenced by Functional design lead me toward web design. I worked for a medium sized Charity providing fast reliable websites and infrustructure, built online communities via forums and later social media, live web streaming way before Youtube was a thing, e-commerce and donations.</p>
                        <p className="pb-6">I have left that all behind and am currently freelancing full time in UX/UI and Front End Development and Consulting.</p>
                        <p className="pb-6">I can work alone or in teams and experienced in Figma, Jira, Git, Photoshop, Visual Studio. I am looking for contracts where my design thinking skills can be put to use!</p> 
                        <p>I have alot of experience with Wordpress, Divi, Shopify and other website builders so if you are looking for a website/cms get in touch!</p>
           </div>
        </div>
    )
}

export default About;