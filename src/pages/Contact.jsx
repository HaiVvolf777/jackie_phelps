import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactUs'
import Hero from '../components/home/Hero'
import { FaChevronLeft } from 'react-icons/fa'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<Hero/>
<ContactForm/>
<div className='container mx-auto py-12'>

<div className='hidden lg:flex justify-between text-black'>
    <Link to='/appointment' className='flex gap-2 items-start'>
        <FaChevronLeft /> {" "}  Heart
    </Link>

</div>
</div>
</>
  )
}

export default Contact