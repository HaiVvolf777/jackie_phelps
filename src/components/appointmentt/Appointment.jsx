import Slider from "react-slick";
import "./Testimonial.css";

const Appointment = () => {
  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrow: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const clients = [
    {
      imageSrc: "/jackie_phelps.png",
      name: "Darryl Coleman",
      type: "Former Client",
      description: `"There is an occasion for everything and a time for every activity under heaven." My "occasion" was freedom from prison. And, the "time" was March 13, 2024. The reason why this "activity" is so relevant is that I was sentenced in federal prison to life. I scheduled to die in prison for a cocaine conspiracy. But by the grace of God, along came Jacki Phelps. She delivered me out of prison. Here's the caveat. No other lawyer could do it. My co-defendant and I searched for 27 years. Therefore, Jacki is extraordinary. Most lawyers don't fight federal cases because they can't win. But it is clear no one told Jacki that fact. On top of being a great lawyer, she has a beautiful spirit. She came to visit me the day before she freed me. The way talked to me and cared about my situation. It felt like my sister was coming to fight for me on Mommy's orders. I'm very grateful Jacki came into my life to give me life again. `,
      review: 5,
    },
    {
      imageSrc: "/jackie_phelps.png",
      name: "Terrance Gibbs",
      type: "Former Client",
      description: `I was incarcerated for over 27 &1/2 years, for a drug conspiracy that had no tangible drug evidence and sentenced to life without the possibility of parole. I felt like, I was left in jail to die in federal prison illegally. My wife sought out Mrs. Jacki Phelps, a lioness, who fearlessly advocate for incarcerated men convicted of drug offenses without
any violence. Never underestimate her punch in such a small package. I will always be forever grateful, to the true advocate, lioness in heart, fighting for those that are rendered voiceless enemies of the State. To have another chance to prove my true worth and contribution to family, friends and society as well. I’m grateful to have another chance to live my life as a free man. Thank you, Mrs. Jacki Phelps, me and my family will be now and forever grateful for your diligent fight/brawl on my behalf. Words can’t describe the gratitude and respect I have for restoring my voice and Constitutional Rights!!! Wishing you blessings and much success.🥰🥰🥰`,
      review: 5,
    },
  ];

  return (
    <>
      <div className="relative bg-[#39648C]">
        <div className="container mx-auto px-[30px] py-32">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-5xl font-bold">Clients Stories</h1>
            <p className="my-8">Real stories. Real impact.</p>
            <h1 className="text2xl lg:text-3xl font-bold">
              Your Story Could Be Next
            </h1>
            <p className="my-8 w-full lg:w-[60%] text-center">
              At Jacki Phelps Law, we measure success by the lives we touch. If
              you or your loved one are seeking justice, let us help you rewrite
              your story.
            </p>
          </div>
          <div className="h-full ">
            <div className="text-center text-[#0A1F44] mb-[40px]"></div>
            <div className="">
              <Slider {...settings} arrow={false} className="test">
                {clients.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center py-4 h-full bg-[#7C98B1] relative
                `}
                  >
                    <div className=" flex flex-col items-start px-4 lg:px-[48px] ">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={item.imageSrc}
                          alt="reviewers"
                          className="object-cover rounded-full my-[18px] w-[70px] h-[70px]"
                        />

                        <div className="flex flex-col items-start gap-1">
                          <h3 className="font-semibold text-white text-lg text-center ">
                            {item.name}
                          </h3>
                          <h3 className="font-semibold text-white text-lg text-center ">
                            {item.type}
                          </h3>
                        </div>
                      </div>
                      <h1 className="font-normal text-[#ffffff] text-sm text-start mb-2 ">
                        {item.description}
                      </h1>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
