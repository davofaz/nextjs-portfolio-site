import React from "react"
import Image from "next/image"
import profile from "../public/david-fazaldin-profile.jpg"

const About = () => {
    
    return (
        <div className="grid gap-4 md:grid-cols-3 pt-12">
            <div
                className="col-span-2 md:col-span-1" 
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
                
            </div>
                   
            <div className="col-span-2 md:col-span-2 p-6 md:pt-0 text-justify dark:text-gray-400">
                <h2
                    className="dark:text-gray-200 md:text-black text-2xl pb-4 uppercase font-thin">
                  About
                </h2>
          
                  <p className="pb-6">Hi, I'm David, a London-based designer with a passion for crafting digital experiences. My journey began with a foundation year at Chelsea Art School, leading me to explore Graphic Design & Advertising. Surprisingly, it was web design that truly captivated me, a fascination that has endured for over two decades.</p>
                  <p className="pb-6">Today, I proudly freelance full-time in the realms of UX/UI and Front-End Development. With a diverse background spanning Charity, Media, and Education, I hold a deep commitment to creating accessible and inclusive digital solutions.</p>
                  <p className="pb-6">My process is well-defined: I kick off each project with comprehensive business and user research, followed by a thorough review of existing websites or apps. I empathise with the user and develop userflows and wireframe designs based off a users journey, then make a working prototype, test for usability and iterate my designs and from there I meticulously build and refine the final designs, rigorously testing for accessibility.</p>
                  <p className="pb-6">In my toolkit, you'll find Figma for design and Visual Studio for coding, with Git being my constant companion for version control.</p>
                  <p className="pb-6">If you're in the market for a website or CMS solution, I bring extensive expertise in platforms like WordPress, Divi, Wix, Shopify, and more. Let's connect and bring your digital vision to life!</p>
                  <button className="inline-flex rounded-lg bg-zinc-200 px-6 py-2 hover:bg-zinc-400 hover:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                        <a href="mailto:df@davidfazaldin.com">Contact me: df@davidfazaldin.com</a>
                  </button>
            </div>

                <div className="grid md:grid-cols-3 p-6 col-span-3">
                    <h2
                        className="col-span-3 dark:text-gray-200 pb-6 md:text-black text-2xl uppercase font-thin">
                        Skills
                    </h2>
                    <div className="col-span-3 md:col-span-1 pb-2">
                        <h3 className="font-bold py-2">UX</h3>
                            <ul>
                                <li>Rapid Sketching</li>
                                <li>Prototyping</li>
                                <li>Wireframing</li>
                                <li>Design Systems/Patterns</li>
                                <li>Design Thinking</li>
                                <l>Problem Solving</l>
                                <li>Responsive Design</li>
                                <li>Art Direction</li>
                                <li>Illustration</li>
                                <li>User-Centered Design</li>
                                <li>User Research</li>
                                <li>UsabilityTesting</li>
                                  
                                <li>Motion Design</li>
                         </ul>
                    </div>
                    <div className="col-span-3 md:col-span-1  py-2">
                        <h3 className="font-bold pb-2">FrontEnd</h3>
                        <ul><li>HTML</li>
                            <li>CSS</li>
                            <li>GitHub</li>
                            <li>React</li>
                            <li>NextJs</li>                     
                            <li>Agile</li>
                            <li>Continuous Development</li>                            
                            <li>Tailwind</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Framer Motion</li>                            
                            <li>PHP</li>
                            <li>Wordpress</li>
                            <li>MySQL</li>
                            <li>Bootstrap</li>
                            <li>Social Media</li>
                            <li>Analytics</li>
                            <li>Microsoft Office</li>
                            <li>Adobe</li>
                            <li>A/B Testing</li>  
                            <li>Streaming</li>

                        </ul>
                    </div>
                    <div className="col-span-3 md:col-span-1  py-2">
                        <h3 className="font-bold pb-2">Design</h3>
                        <ul>
                            <li>Art & Illustration</li>
                            <li>Branding</li>
                            <li>Art Direction</li>
                            <li>Typography</li>
                            <li>Iconography</li>
                            <li>Logo Design</li>
                            <li>Video Editing</li>
                            <li>Photo Editing</li>
                            <li>Colour Correction</li>
                            <li>Video Editing</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default About;