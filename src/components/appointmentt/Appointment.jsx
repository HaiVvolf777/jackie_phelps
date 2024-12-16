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
      name: "From Life to Freedom",
      type: 'Former Client',
      description:
        "Jacki fought for me when no one else would. Her dedication to my case not only saved my life but gave me a second chance to be with my family. She’s more than a lawyer—she’s a lifeline.",
      review: 5,
    },
    {
      imageSrc: "/jackie_phelps.png",
      name: "From Life to Freedom",
      type: 'Former Client',
      description:
        "Jacki fought for me when no one else would. Her dedication to my case not only saved my life but gave me a second chance to be with my family. She’s more than a lawyer—she’s a lifeline.",
      review: 5,
    },
  ];

  return (
    <>
      <div className="relative bg-[#39648C]">

        <div className="container mx-auto px-[30px] py-32">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-5xl font-bold">Clients Stories</h1>
            <p className="my-8">
            Real stories. Real impact.
            </p>
            <h1 className="text2xl lg:text-3xl font-bold">Your Story Could Be Next</h1>
            <p className="my-8 w-full lg:w-[60%] text-center">
            At Jacki Phelps Law, we measure success by the lives we touch. If you or your loved one are seeking justice, let us help you rewrite your story.
            </p>
          </div>
          <div className="h-full ">
            <div className="text-center text-[#0A1F44] mb-[40px]">
            </div>
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
                        <img src={item.imageSrc} alt="reviewers" className="object-cover rounded-full my-[18px] w-[70px] h-[70px]" />

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



export default Appointment