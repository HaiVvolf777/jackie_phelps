import { Link } from "react-router-dom";
import { GrLinkedinOption } from 'react-icons/gr';
import { AiFillTikTok } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="font-Poppins bg-[#7C98B1] text-white pt-[60px] px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-6">

                    <Link to="/" className="col-span-1 flex justify-center lg:justify-start mb-10 lg:mb-0">
                        <img src='logo.svg' className='w-[200px] mt-4 object-contain' alt="Logo" />
                    </Link>

                    <div className="col-span-5">
                        <div className="flex flex-col lg:flex-row justify-around items-center gap-4 pb-[80px]">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/appointment" className="flex gap-1 items-center">Book your consultation <IoIosArrowRoundForward /></Link>
                        </div>

                        <div className="border-t-[1px] border-white">
                            <div className="pt-[30px] flex flex-col lg:flex-row  justify-between">
                       <div className="flex flex-col lg:flex-row gap-4 items-center mb-8 lg:mb-0">
                       <p className="m-0 text-xs md:text-sm lg:text-base mb-4 lg:mb-0">©2024 JackiPhelps Law,LLC. Right reserved.</p>
                                <Link to='/privacy' className="text-sm font-medium">Privacy Policy</Link>
                                <Link to='terms' className="text-sm font-medium">Terms and conditions</Link>
                       </div>
                                <ul className="flex justify-center mb-4 lg:justify-end gap-1 m-0 p-0">
                                    <li>
                                        <a href="https://www.linkedin.com/in/jacquelyne-phelps-b4251b17a" target='_blank' rel="noreferrer">
                                            <GrLinkedinOption size={25} className="p-[4px] mr-2" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tiktok.com/@jackiphelps" target='_blank' rel="noreferrer">
                                            <AiFillTikTok size={25} className="p-[4px] mr-2 text-white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/Jacki_K_Phelps" target='_blank' rel="noreferrer">
                                        <FaXTwitter size={25} className="p-[4px] mr-2" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
