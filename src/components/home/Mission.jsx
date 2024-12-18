const Mission = () => {
    const paragraphs = [
        "At Jacki Phelps Law, our mission is to provide unwavering advocacy and compassionate legal counsel for individuals navigating the complexities of post-conviction relief. We are driven by the belief that everyone deserves a second chance and that the law, when applied with empathy and precision, has the power to restore justice and change lives.",
        "We stand at the intersection of rigorous legal expertise and heartfelt commitment, working tirelessly to bring relief to those impacted by unjust sentencing. Every case we take on is guided by our core principles: respect for the human experience, a dedication to fairness, and a relentless pursuit of justice.",
        "We don’t just see clients—we see people with stories, families, and futures. Our goal is to amplify their voices, challenge inequities, and pave the way for brighter outcomes. Whether through strategic legal arguments, advocacy in court, or providing clarity in moments of uncertainty, Jacki Phelps Law is here to ensure no one is left behind.",
        "With every case we fight, we aim to make the criminal justice system more just, equitable, and humane. Let us stand with you on your journey toward justice. Together, we can build a brighter future."
    ];

    return (
        <>
            <div className='bg-[#39648C] px-4'>
                <div className='container mx-auto py-[200px]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center'>
                        <div>
                            <h1 className="font-semibold text-3xl lg:text-6xl mb-[38px]">
                                OUR MISSION
                            </h1>
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-base lg:text-lg mb-4 font-neue">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div>
                            <img src='/mission.png' alt='Group Photo' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission;
