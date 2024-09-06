import React from 'react'

export default function Hero() {
    return (
        <div className="text-gray-600 body-font bg-white ">
            <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h5 className='text-lg font-semibold'>Hey, I am</h5>
                    <h1
                        className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                        Moshabbir Hossain
                    </h1>
                    <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                        Front-End | JavaSrcipt | React | Nextjs Developer
                    </p>
                    <div className="flex justify-center">
                        {/* <a href="#"
                            className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                            Exploring
                        </a> */}
                        {/* <a href="#"
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                            articles</a> */}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                    <img className="object-cover object-center rounded-full shadow-base-200" alt="hero" src="https://i.ibb.co/KrFF2LP/MyImage.jpg" />
                </div>
            </div>
            <div className="max-w-4xl mx-auto my-10">
                <dl className="rounded-lg flex justify-between items-center">
                    <div className="flex flex-col p-6 text-center">
                        <dt className="order-2 mt-2 text-lg tracking-tighter font-medium text-gray-500">
                            Of work tracked on <br /> Upwork only
                        </dt>
                        <dd className="order-1 text-5xl font-bold text-gray-700">+50h</dd>
                    </div>
                    <div
                        className="flex flex-col border-t p-6 text-center">
                        <dt className="order-2 mt-2 text-lg tracking-tighter font-medium text-gray-500">
                            Projects Delivered <br />since 2021
                        </dt>
                        <dd className="order-1 text-5xl font-bold text-gray-700">+30</dd>
                    </div>
                    <div className="flex flex-col border-t p-6 text-center">
                        <dt className="order-2 mt-2 text-lg tracking-tighter font-medium text-gray-500">
                            Successfull Jobs <br /> Completed Rate
                        </dt>
                        <dd className="order-1 text-5xl font-bold text-gray-700">~90%</dd>
                    </div>
                    <div className="flex flex-col p-6 text-center">
                        <dt className="order-2 mt-2 text-lg tracking-tighter font-medium text-gray-500">
                            Stars Average Rated <br /> Work
                        </dt>
                        <dd className="order-1 text-5xl font-bold text-gray-700">4.5</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
