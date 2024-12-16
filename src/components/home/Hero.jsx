import { useLocation } from 'react-router-dom';

const Hero = () => {
    const location = useLocation();

    const backgrounds = {
        '/': 'bg-home',
        '/about': 'bg-about',
        '/services': 'bg-service',
        '/contact': 'bg-contact',
        '/appointment': 'bg-appointment'
    };

    const backgroundClass = backgrounds[location.pathname] || 'bg-home';

    const words = location.pathname === '/contact' ? ['CONTACT US'] : ['JUSTICE', 'ADVOCACY', 'POWER', 'HEART'];

    return (
        <>
            <div className={backgroundClass}>
                <div className="container mx-auto py-[200px]">
                    <div className='flex flex-col w-full items-center'>
                        {words.map((word, index) => (
                            <h1 key={index} className="text-3xl lg:text-7xl mb-[35px]">
                                {word}
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
