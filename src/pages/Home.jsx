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

                <div className='hidden lg:flex justify-between text-black'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <FaChevronLeft /> {" "}  HOME
                    </Link>
                    <Link to='/about' className='flex gap-2 items-start'>
                        ADVOCACY {" "} <FaChevronRight />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home