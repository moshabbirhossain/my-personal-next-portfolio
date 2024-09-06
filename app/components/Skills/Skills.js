import React from 'react'

export default function Skills() {
    return (
        <div className='mt-10'>
            <h5 className='text-center text-lg font-semibold mt-12'>My Skills</h5>
            <h5 className='text-center text-5xl font-semibold mt-4 mb-8 '>What I
                Do
            </h5>
            <p className='text-lg font-medium text-center mb-10'>
                I'm a Front-End Web Developer with expertise in modern web technologies including HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, React.js, and Next.js. I specialize in building responsive, user-friendly web applications, leveraging Tailwind CSS and Bootstrap for efficient styling and React.js/Next.js for dynamic, high-performance interfaces. With a passion for clean code and seamless user experiences, I continuously strive to stay updated with the latest trends and best practices in web development.
            </p>

            <div className='grid grid-cols-3 lg:flex gap-12 lg:justify-center lg:items-center mt-20'>
                <div>
                    <div className="radial-progress text-success" style={{ "--value": 90 }} role="progressbar">90%</div>
                    <h2 className='text-xl font-semibold mt-6'>HTML</h2>
                </div>
                <div>
                    <div className="radial-progress text-success" style={{ "--value": 80 }} role="progressbar">80%</div>
                    <h2 className='text-xl font-semibold mt-6'>CSS</h2>
                </div>
                <div>
                    <div className="radial-progress text-secondary" style={{ "--value": 70 }} role="progressbar">70%</div>
                    <h2 className='text-xl font-semibold mt-6'>Javascript</h2>
                </div>
                <div>
                    <div className="radial-progress text-secondary" style={{ "--value": 67 }} role="progressbar">67%</div>
                    <h2 className='text-xl font-semibold mt-6'>React.js</h2>
                </div>
                <div>
                    <div className="radial-progress text-primary" style={{ "--value": 55 }} role="progressbar">55%</div>
                    <h2 className='text-xl font-semibold mt-6'>Next.js</h2>
                </div>

            </div>
        </div>
    )
}
