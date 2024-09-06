import React from 'react'

export default function WhatClientsSay() {
    return (
        <div>
            <h5 className='text-center text-4xl font-semibold mt-12 mb-8'>What Clients Say</h5>
            <p className='text-2xl font-medium text-center'>Discover what clients have to say about their experiences working <br /> with me. My client's satisfaction is my greatest achievement!</p>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center gap-40 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-xl font-semibold sm:text-4xl">Webpage <br /> Development
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-10 break-all">I had the pleasure of working with Lily on a critical web development project, and I can confidently say that their expertise and professionalism exceeded my expectations.</p>
                        <h3 className='font-semibold text-xl'>M Chek - Technical Director</h3>
                        <h5 className='text-lg font-medium'>marketing@appliance.inc</h5>
                        <div className="flex items-center justify-center lg:justify-start">
                            <button><img src="https://i.ibb.co/KrFF2LP/MyImage.jpg" alt="" className='w-16 h-16 rounded-full'/></button>
                            <button><img src="https://i.ibb.co/KrFF2LP/MyImage.jpg" alt="" className='w-16 h-16 rounded-full'/></button>
                            <button><img src="https://i.ibb.co/KrFF2LP/MyImage.jpg" alt="" className='w-16 h-16 rounded-full'/></button>
                            
                        </div>
                    </div>
                    <div className="hidden lg:display-block lg:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/KrFF2LP/MyImage.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    )
}
