/* eslint-disable no-undef */


const Call = () => {
  return (
    <>
      <div className="bg-appointmentt py-[200px] px-4">
        <div className="flex flex-col gap-4 items-center">
          <h1 className=" text-center font-medium text-3xl lg:text-5xl text-[#39648C] tracking-[5px]">
            Schedule Your Consultation Today
          </h1>
          <p className="text-xl text-center my-4 text-black w-full lg:w-[80%] font-neue ">
            Justice starts with a conversation. Click below to secure your
            consultation and take the first step toward reclaiming your future.
          </p>

          <a
            href="https://calendly.com/jackiphelps"
            target="_blank"
            className="border-b border-black text-2xl text-black"
          >
            Book Now →
          </a>
        </div>
      </div>
    </>
  );
};

export default Call;
