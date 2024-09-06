import React from 'react'

export default function PopularClients() {
    return (
        <div className='mt-10'>
            <h5 className='text-center text-lg font-semibold mt-12'>Popular Clients</h5>
            <h5 className='text-center text-5xl font-semibold mt-4 mb-20 '>Trusted by over 10,000+ <br />
                clients</h5>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-12 justify-center items-center'>
                <img src="https://i.ibb.co/TTVxPR7/coinbase.png" alt="" className='max-w-36 max-h-10 pb-2' />
                <img src="https://i.ibb.co/SNVPC4J/google.png" alt="" className='max-w-36 max-h-10' />
                <img src="https://i.ibb.co/TTVxPR7/coinbase.png" alt="" className='max-w-36 max-h-10 pb-2' />
                <img src="https://i.ibb.co/SNVPC4J/google.png" alt="" className='max-w-36 max-h-10' />
                <img src="https://i.ibb.co/TTVxPR7/coinbase.png" alt="" className='max-w-36 max-h-10 pb-2' />
                <img src="https://i.ibb.co/SNVPC4J/google.png" alt="" className='max-w-36 max-h-10' />
            </div>
        </div>
    )
}
