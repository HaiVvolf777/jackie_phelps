


const Services = () => {


    const Service = [
        {
            img: '/icons/Life Cycle.svg',
            heading: 'Federal Criminal Appeals:',
            paragraph: 'Fighting for second chances and freedom for those unjustly sentenced to life in federal prison.',
        },

        {

            img: '/public/icons/Non Profit Organisation.svg',
            heading: 'Non-Violent Drug Offense Defense:',
            paragraph: 'Challenging sentencing disparities to ensure fair treatment under the law.',
        },

        {
            img: '/public/icons/Mind Map.svg',
            heading: 'Sentencing Disparities Representation:',
            paragraph: 'Addressing systemic inequities in criminal sentencing.',
        },

        {
            img: '/public/icons/Colorado State Capitol.svg',
            heading: 'Federal & State Clemency Applications:',
            paragraph: 'Advocating for mercy and justice through clemency petitions.',
        },

        {
            img: '/public/icons/Upgrade.svg',
            heading: 'Compassionate Release Motions:',
            paragraph: 'Securing early release for individuals with compelling circumstances.',
        },

        {
            img: '/public/icons/Post Stamp.svg',
            heading: 'Post-Conviction Litigation:',
            paragraph: '  Strategically navigating complex cases to achieve favorable outcomes. ',
        }
    ]


    return (
        <div className="pb-8 px-4">
            <div className="container mx-auto text-white relative">
                <div className="px-4 ">
                    <h2 className="text-[32px] pt-8 pb-4 text-[#39648C] uppercase text-center">
                        Core Services Include
                    </h2>{" "}
                </div>

                <div
                    className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-24 px-4 pt-8 sm:pt-20 text-black">


                    {
                        Service.map((service, index) => {
                            return (
                                <div key={index}
                                    className="border border-[#39648C]  shadow-2xl  transform transition duration-500 hover:scale-110">
                                    <div className="px-3 lg:px-8 py-8  ">
                                        <div
                                            className="w-[122px] h-[122px] bg-[#8CA6BD]  rounded-full mt-[-5rem]  flex items-center mx-auto p-4">
                                            <img src={service.img} alt=""
                                                className="w-[60px] h-[60px] object-contain      mx-auto" />
                                        </div>
                                        <h3 className="font-bold text-[20px] text-[#39648C] text-center my-6">
                                            {service.heading}
                                        </h3>
                                        <p className="text-[#444444] text-[16px] text-center">
                                            {service.paragraph}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    );
};

export default Services;