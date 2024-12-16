import Services from '../components/about/Services'
import Hero from '../components/home/Hero'
import OurServices from '../components/about/OurServices'
import Press from '../components/about/Press'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const About = () => {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <Hero />
            <OurServices />
            <Services />
            <Press />
            <div className='container mx-auto py-12'>

                <div className='hidden lg:flex justify-between text-black'>
                    <Link to='/' className='flex gap-2 items-start'>
                        <FaChevronLeft /> {" "}  Justice
                    </Link>
                    <Link to='/services' className='flex gap-2 items-start'>
                        Power {" "} <FaChevronRight />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default About