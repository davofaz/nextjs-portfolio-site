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
                            I'm David, I have worked in IT, web design/development and Video Streaming for what feels like ages.</p>
                        <p className="mb-4">I'm currently freelancing in UX/UI and also learning front end development on the side - mainly React based projects.</p>
                        <p className="mb-4">I love working alone or in teams and use Figma, Jira, Git, Photoshop, Visual Studio and looking for contracts where my design thinking skills can be put to use. </p> 
                                              
                        
                        <p className="mb-4 font-bold"><a href="mailto:dfazaldin@gmail.com">If you need a website and don't know where to start reach out to me.</a></p>
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