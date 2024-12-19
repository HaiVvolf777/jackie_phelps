import { Link } from 'react-router-dom'
import Approach from '../components/home/Approach'
import Hero from '../components/home/Hero'
import Mission from '../components/home/Mission'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <Hero />
            <Mission />
            <Approach />
            <div className='container mx-auto py-12'>

                <div className='hidden lg:flex justify-between text-black font-light'>
                    <Link to='/' className='flex gap-2 items-center tracking-[1px]'>
                        <FaChevronLeft /> {" "}  HOME
                    </Link>
                    <Link to='/services' className='flex gap-2 items-center tracking-[1px]'>
                        ADVOCACY {" "} <FaChevronRight />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home