const OurServices = () => {
    const paragraphs = [
        "At Jacki Phelps Law, we specialize in providing compassionate, results-driven legal advocacy. Our services are tailored to address the complexities of the criminal justice system, focusing on delivering impactful solutions to those seeking post-conviction relief."
    ];

    return (
        <>
            <div className='bg-[#39648C] px-4'>
                <div className='container mx-auto py-[100px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center'>

                        <div>
                            <img src='/services.png' alt='Group Photo' />
                        </div>

                        <div>
                            <h1 className="font-medium text-3xl lg:text-5xl mb-[38px]">
                                OUR SERVICES
                            </h1>
                            {/* Render each paragraph using map */}
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-base mb-4 font-neue">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices;
