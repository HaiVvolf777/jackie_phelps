/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenuMob = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 0); // Set true if scrolled down by any amount
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`pt-[0.5vw] fixed top-0  z-50 w-full font-neue ${
        isScrolled ? "bg-[#7C98B1]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-[30px] flex justify-between items-center h-20 w-full">
        <Link to="/" className="flex-shrink-0 flex items-center z-10 gap-x-2">
          <img src="/logo.svg" alt="Logo" className="w-[170px]" />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          {["home", "about", "services", "contact"].map((section) => (
            <Link
              to={`/${section}`}
              className={
                location.hash.includes(section)
                  ? "px-3 py-2 select-none text-[#fff] font-medium transition-colors duration-300"
                  : "px-3 py-2 select-none text-[#39648C] font-normal hover:text-[#fff] transition-colors duration-300"
              }
              key={section}
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <Link to="/appointment"></Link>
          <Link
to='/appointment'
            className="w-full text-center bg-[#39648C] text-white px-6 py-2  hover:scale-105 transition-all duration-500" >
      Book Your Consultation
          </Link>
        </div>

        <div className="-mr-2 flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-[#39648C] relative z-50 hover:bg-[#fff] outline-none"
            onClick={toggleMenuMob}
            aria-label={isOpenMenu ? "Close menu" : "Open menu"}
          >
            {isOpenMenu ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpenMenu && (
        <div className="lg:hidden bg-[#0E1527] fixed inset-0 z-40 flex px-8 py-12 flex-col items-center space-y-4 ">
          {["home", "about", "services", "contact"].map((item) => (
            <Link
              to={`/${item}`}
              onClick={handleLinkClick}
              className="px-3 py-2 text-[#39648C] font-medium transition duration-300 ease-in-out"
              key={item}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={handleLinkClick}
            className="w-full text-center bg-[#39648C] text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300"
          >
          Book Your Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
