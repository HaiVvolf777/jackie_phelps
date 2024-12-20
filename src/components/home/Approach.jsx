function Approach() {
  const updates = [
    {
      description: "Empathy and Understanding:",
      detail:
        "We see our clients as individuals, not case numbers. By understanding their unique stories, we provide personalized and meaningful advocacy.",
      image: "/Trust.svg",
    },
    {
      description: "Expert Legal Research and Strategy:",
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
    <div className="container mx-auto py-[100px] px-4">
      <div className="px-4 mb-16">
        <h1 className="font-semibold text-3xl lg:text-5xl text-[#39648C] tracking-[5px]">
          Our Approach
        </h1>
        <p className="text-xs font-neue lg:text-base text-[#39648C] font-normal w-full lg:w-[45%] mt-[40px]">
          At Jacki Phelps Law, we believe that justice isn’t just about winning
          cases; it’s about changing lives. Our approach is rooted in:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8 px-4">
        {updates.map((feature, index) => (
          <div key={index}>
            <div className="h-full flex flex-col items-start gap-y-6 gap-x-4 border border-[#39648C] py-[30px] px-[30px]">
              {/* Image */}
              <div className="mb-2">
                <img
                  src={feature.image}
                  alt="Feature Icon"
                  className="bg-[#8CA6BD1A] p-2"
                />
              </div>

              {/* Feature Description */}
              <p
                className={`font-semibold text-[#39648C] text-base text-start  ${
                  index === 3 ? "pr-[32px]" : "pr-0"
                }`}
              >
                {feature.description}
                <div className="w-[70px] mt-[5px] h-[1.2px] bg-[#39648C]">
                  {" "}
                </div>
              </p>

              {/* Feature Detail */}
              <p
                className={`text-[#444444] text-xs font-neue ${
                  index === 2 ? "pr-4" : "pr-0"
                }`}
              >
                {feature.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Approach;
