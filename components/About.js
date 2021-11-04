import React from "react"
import Image from "next/image"
import profile from "../public/david-fazaldin-2021-av.png"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            I'm David, a designer based in London in the UK. After my foundation year at Chelsea Art School I soon realised that design would play a key role in my life and went onto focus on Graphic Design and Advertising. Some how I got involved in web design without even having a clue about code but went on to build many websites for a medium sized Charity and kept them at the forefront of tech. Provided fast reliable websites and infrustructure, built online communities via forums and later social media, live web streaming way before Youtube was a thing, e-commerce and donations.</p>
                        <p className="mb-4">I have left that all behind and am currently freelancing full time in UX/UI and also learning front end development on the side - mainly React based projects.</p>
                        <p className="mb-4">I love working alone or in teams and use Figma, Jira, Git, Photoshop, Visual Studio and looking for contracts where my design thinking skills can be put to use!</p> 
                                              
                        
                        
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;