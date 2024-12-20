const MyServices = () => {
    const paragraphs = [
        "Jacki Phelps brings a powerful blend of expertise in education and law, driven by a passion for justice and a commitment to advocacy. With 16 years as a dedicated public educator, she transitioned to law to fight for individuals often overlooked by the criminal justice system. Guided by her core philosophy—Justice with Heart. Advocacy with Power.—Jacki specializes in post-conviction relief and appellate defense, ensuring that those who received unjust sentences have the chance to be heard and regain their freedom.",
        "Jacki's unique background combines personal experience, exceptional legal research and writing skills, and a fierce compassion for her clients. Her work underscores her unwavering dedication to ensuring that justice is not just a concept but a reality. In less than four years, Jacki has successfully secured freedom for ten individuals sentenced to die in federal prison. She has also argued and won a precedent-setting appeal in the Third Circuit Court of Appeals, cementing her reputation as a formidable advocate.",
        "Jacki holds a Bachelor’s and Master’s degree in Music Education and a Juris Doctorate from the University of Oklahoma. She currently serves as Vice President of the Oklahoma Asian-American Bar Association and has been a guest speaker for the University of Oklahoma College of Law’s Asian Pacific American Law Student Association. Her extensive admissions include the Oklahoma State Bar, multiple federal districts, and the Third, Fifth, Seventh, Eighth, and Tenth Circuit Courts of Appeals.",
        "Jacki’s practice is not only about the law but about the people impacted by it. Her mission is to combine her expertise with compassion, giving a voice to those who feel forgotten and paving the way for meaningful change in the justice system."
    ];

    return (
        <>
            <div className='bg-[#39648C] px-4'>
                <div className='container mx-auto py-[200px]'>
                    <div className='flex flex-col lg:grid lg:grid-cols-5 gap-x-10 items-center'>
                        <div className="col-span-3">
                            <h1 className="font-semibold text-2xl lg:text-3xl mb-[24px] tracking-[5px]">
                            Jacki Phelps: Advocate, Educator, and Legal Trailblazer
                            </h1>
                            {/* Render each paragraph using map */}
                            {paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-base mb-4 font-neue">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className=" col-span-2">
                            <img src='/jackie_phelps.png' alt='Jackie Phelps'  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyServices;
