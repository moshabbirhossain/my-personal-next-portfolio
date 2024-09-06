import React from 'react'
import ProjectCards from '../components/ProjectCards/ProjectCards'

export default function Projects() {
    return (
        <div>
            <h5 className='text-center text-4xl font-semibold mt-12 mb-8'>My Projects</h5>
            <p className='text-2xl font-medium text-center'>Whether you have a mobile app idea that needs to come to life or a <br />website that requires a facelift, I'm here to turn your digital dreams into reality.</p>
            <div>
                <ProjectCards />
            </div>
        </div>
    )
}
