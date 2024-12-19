import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
    const location = useLocation();

    // Backgrounds based on path
    const backgrounds = {
        '/home': 'bg-justice',
        '/about': 'bg-about',
        '/services': 'bg-service',
        '/contact': 'bg-contact',
        '/appointment': 'bg-appointment',
    };

    const defaultBackgroundClass = backgrounds[location.pathname] || 'bg-home';

    // Words with corresponding links
    const wordsWithLinks = location.pathname === '/contact'
        ? [{ word: 'Contact Us', link: '/contact' }]
        : [
            { word: 'Justice', link: '/home' },
            { word: 'Advocacy', link: '/services' },
            { word: 'Power', link: '/about' },
            { word: 'Heart', link: '/appointment' },
        ];

    const [backgroundClass, setBackgroundClass] = useState(defaultBackgroundClass);

    const handleMouseEnter = (word) => {
        setBackgroundClass(`bg-${word.toLowerCase()} transition-all duration-1000`);
    };

    const handleMouseLeave = () => {
        setBackgroundClass(defaultBackgroundClass);
    };

    return (
        <>
            <div className={backgroundClass}>
                <div className="container mx-auto py-[200px]">
                    <div className="flex flex-col w-full items-center">
                        {wordsWithLinks.map(({ word, link }, index) => (
                            <Link
                                key={index}
                                to={link}
                                className="text-3xl lg:text-7xl mb-[35px] font-light tracking-[15px] cursor-pointer "
                                onMouseEnter={() => handleMouseEnter(word)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {word}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
