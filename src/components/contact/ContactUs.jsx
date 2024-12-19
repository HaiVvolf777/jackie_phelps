import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: ""
  });

  // Update state on input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you would typically send a request to a server
    console.log("Form Data:", formData);

    // Optionally reset the form here
    // setFormData({ firstName: "", lastName: "", phoneNumber: "", email: "", message: "" });
  };

  return (
    <>
      <div className="py-[60px] container mx-auto px-4 bg-[#39648C] my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-start justify-center px-4 pl-0 lg:pl-16 pr-0 lg:pr-40 font-bold font-copperplate">
            <div className="flex items-center space-x-3 text-[#ffff] text-base lg:text-xl" >
              <span>Email:</span>
              <a href="mailto:info@jackiphelps.com">info@jackiphelps.com</a>
            </div>
            <div className="flex items-center my-[50px] space-x-3 text-[#ffff] text-base lg:text-xl">
              <span>Phone:</span>
              <p>405-200-3125</p>
            </div>
            <div className="flex items-start space-x-3 text-[#ffff] text-base lg:text-xl">
              <p>Address: PO Box 720183
              Oklahoma City, OK 73172</p>

            </div>


          </div>

          <div className="flex flex-col">
            <form className="space-y-6 px-4 font-neue" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-white mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="border-b border-[#ffffff] p-3 bg-transparent text-white h-[30px]"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-white mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="border-b border-[#ffffff] p-3 bg-transparent text-white h-[30px]"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="phoneNumber" className="text-white mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="border-b border-[#ffffff] p-3 bg-transparent text-white h-[30px]"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-white mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-b border-[#ffffff] p-3 bg-transparent text-white h-[30px]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-white mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  className="border-b border-[#ffffff] p-3 bg-transparent text-white h-[30px]" 
                  rows="1"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-white text-black px-12 py-3 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
