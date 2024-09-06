import Image from 'next/image'
import React from 'react'

export default function AwesomeClients() {
  return (
    <div className='mt-10'>
      <h5 className='text-center text-lg font-semibold my-16'>My Awesome Clients</h5>
      <div className='mx-auto flex flex-col lg:flex-row gap-3 lg:gap-12 justify-center items-center mb-32'>
        <img src="https://i.ibb.co/TTVxPR7/coinbase.png" alt="" className='max-w-36 max-h-10 pb-2'/>
        <img src="https://i.ibb.co/SNVPC4J/google.png" alt="" className='max-w-36 max-h-10'/>
        <img src="https://i.ibb.co/TTVxPR7/coinbase.png" alt="" className='max-w-36 max-h-10 pb-2'/>
        <img src="https://i.ibb.co/SNVPC4J/google.png" alt="" className='max-w-36 max-h-10'/>
        <img src="https://i.ibb.co/TTVxPR7/coinbase.png" alt="" className='max-w-36 max-h-10 pb-2'/>
        <img src="https://i.ibb.co/SNVPC4J/google.png" alt="" className='max-w-36 max-h-10'/>
      </div>
    </div>
  )
}
