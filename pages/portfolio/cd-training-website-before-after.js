import React from "react";
import Head from 'next/head'
import Image from 'next/image';
import FadeIn from '../../components/FadeIn'
import { fadeInUp } from '../../animations/variants.js'
import RecentWork from '../../components/RecentWork.js';

import { useState } from 'react';

import thumbnail from '../../public/case-study-colin-dye-training-homepage-redesign-thumbnail.jpg';
import fullsizeDesign from '../../public/case-study-colin-dye-training-homepage-redesign-fullsize.jpg';


export default function CdTraining() {
     const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <Head>
            <title>David Fazaldin - UX/UI Designer &amp; Front End Dev - Figma, NextJs, Wordpress, Shopify, Wix </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col flex-row-reverse sm:flex-row lg:mx-auto" style={{maxWidth:'1400px'}}>
         <div className="basis-4/6 flex flex-col bg-stone-100">
            <FadeIn variants={fadeInUp}>
                     <Image
                            src={thumbnail}
                            alt="Website Redesign - Before / After"
                            placeholder="blur"
                            className="pb-10"
                            onClick={() => setIsModalOpen(true)}
                            style={{ cursor: 'pointer' }}
                        />             
                    <div className="text-black dark:text-black mt-4 p-6 lg:p-12">
                        

                    <h1 className="mb-4 text-4xl">Colin Dye Training</h1>
                    <p className="mb-8">Click the image above to see my design process and thoughts on this new homepage redesign with a clear problem to solve.</p> 
                       
                        
                    </div>
                </FadeIn>

                 {isModalOpen && (
                      <FadeIn>
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full min-h-screen flex items-start justify-center"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={fullsizeDesign}
              alt="Website Redesign - Before / After - Full Size"
              className="w-full h-auto"
            />
            <button 
              className="absolute top-2 right-2 bg-white rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
        </FadeIn>
      )}

            </div>
            <div className="basis-2/6 md:opacity-60"><RecentWork /></div>
            </main>

        </>
)}