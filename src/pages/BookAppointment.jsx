import Hero from '../components/home/Hero'
import Appointment from '../components/appointmentt/Appointment'
import Schedule from '../components/appointmentt/Schedule'
import Call from '../components/appointmentt/Call'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect } from 'react'

const BookAppointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Appointment />
      <Schedule />
      <Call/>
      <div className='container mx-auto py-12'>

<div className='hidden lg:flex justify-between text-black'>
    <Link to='/about' className='flex gap-2 items-center'>
        <FaChevronLeft /> {" "}  POWER
    </Link>
    <Link to='/contact' className='flex gap-2 items-center'>
        CONTACT {" "} <FaChevronRight />
    </Link>
</div>
</div>
    </>
  )
}

export default BookAppointment