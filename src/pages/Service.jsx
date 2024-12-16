import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import MyServices from '../components/services/MyServices'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect } from 'react'

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <Hero />
            <MyServices />
            <div className='container mx-auto py-12'>

<div className='hidden lg:flex justify-between text-black'>
    <Link to='/about' className='flex gap-2 items-start'>
        <FaChevronLeft /> {" "}  Advocacy
    </Link>
    <Link to='/appointment' className='flex gap-2 items-start'>
        Heart {" "} <FaChevronRight />
    </Link>
</div>
</div>
        </>
    )
}

export default Service