/* eslint-disable no-undef */


const Call = () => {
  return (
    <>
      <div className="bg-appointmentt py-[200px] px-4">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl text-center lg:text-6xl text-[#39648C] font-bold ">
            Schedule Your Consultation Today
          </h1>
          <p className="text-3xl text-center my-8 text-black w-full lg:w-[80%] font-neue font-bold">
            Justice starts with a conversation. Click below to secure your
            consultation and take the first step toward reclaiming your future.
          </p>

          <a
            href="#"
            className="border-b border-black text-4xl text-black"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              Calendly.initPopupWidget({
                url: "https://calendly.com/haider-galixo",
              });
            }}
          >
            Book Now →
          </a>
        </div>
      </div>
    </>
  );
};

export default Call;
