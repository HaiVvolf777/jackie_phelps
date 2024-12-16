function Approach() {
    const updates = [
        {
            description: "Empathy and Understanding:",
            detail:
                "We see our clients as individuals, not case numbers. By understanding their unique stories, we provide personalized and meaningful advocacy.",
            image: "/Trust.svg",
        },
        {
            description: "Expert Legal Research & Strategy:",
            detail:
                "With a proven track record in case law research and appellate litigation, we craft compelling arguments that drive results.",
            image: "/Popular Man.svg",
        },
        {
            description: "Collaboration and Transparency:",
            detail:
                "We partner closely with our clients, keeping them informed and engaged every step of the way.",
            image: "/Collaboration.svg",
        },


        {
            description: "Advocacy with Power:",
            detail:
                "We don’t back down from systemic challenges. Our mission is to create pathways to justice that lead tolasting impact.",
            image: "/Handle With Care.svg",
        },
    ];
    return (
        <div className="container mx-auto py-[200px] px-4">
            <div className="px-4 mb-16">

                <h1 className="text-3xl lg:text-6xl text-[#39648C] font-bold">OUR APPROACH</h1>
                <p className="text-base lg:text-xl text-[#39648C] font-normal w-full lg:w-[45%] mt-[40px]">
                    At Jacki Phelps Law, we believe that justice isn’t just about winning cases; it’s about changing lives. Our approach is rooted in:
                </p>
            </div>

            <div className="grid grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-8 px-4">
                {updates.map((feature, index) => (
                    <div key={index}>
                        <div className="h-[100%] flex flex-col items-start gap-y-4 gap-x-12  border border-[#39648C] py-[8px] lg:py-[26px] px-[10px] lg:px-[53px]">
                            <div className="mb-2"><img src={feature.image} alt="" className="bg-[#8CA6BD1A] p-4" /></div>
                            <p className="font-semibold text-[#39648C] text-2xl text-start ">
                                {feature.description}

                            </p>
                            <p className=" text-[#444444] text-[16px]">{feature.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Approach;