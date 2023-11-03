import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:py-12 py-6">
            <div className="max-w-4xl px-6 mx-auto text-gray-800 dark:text-gray-600"  style={{minWidth: '320px', maxWidth:'1400px'}}>
                <div className="pb-4 mb-2 border-t border-black dark:border-gray-600"></div>
                <div className="flex flex-col justify-between lg:flex-row">
                    <div className="flex flex-wrap  sm:space-x-6 space-x-4 font-medium lg:pt-0">
                        <a
                            href="https://twitter.com/davo0o"
                            className={"transition-colors hover:text-gray-400"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/david-fazaldin-26b66731/"
                            className={"transition-colors hover:text-gray-400"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/davofaz"
                            className={"transition-colors hover:text-gray-400"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.instagram.com/fazaa_nft/"
                            className={"transition-colors hover:text-gray-400"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            IG Art
                        </a>
                        <a
                            href="https://www.instagram.com/davofaz"
                            className={"transition-colors hover:text-gray-400"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            IG Personal
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;