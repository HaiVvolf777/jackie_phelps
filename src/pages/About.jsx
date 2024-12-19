import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import MyServices from '../components/services/MyServices'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <Hero />
            <MyServices />
            <div className='container mx-auto py-12'>

<div className='hidden lg:flex justify-between text-black'>
    <Link to='/services' className='flex gap-2 items-center tracking-[1px]'>
        <FaChevronLeft /> {" "}  ADVOCACY
    </Link>
    <Link to='/appointment' className='flex gap-2 items-center tracking-[1px]'>
        HEART {" "} <FaChevronRight />
    </Link>
</div>
</div>
        </>
    )
}

export default About