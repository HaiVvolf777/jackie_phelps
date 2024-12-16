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
      <div className="py-32 container mx-auto px-4 bg-[#39648C] my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col items-start">
            <h1 className="text-[#999696] text-[18px] font-semibold mb-4">
              Get in Touch
            </h1>
            <h3 className="text-[28px] lg:text-[50px] font-semibold text-white mb-6">
              Do you have a project in mind?
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#999696]">
                <span>📞</span>
                <p>+92 330 1230437</p>
              </div>
              <div className="flex items-center space-x-3 text-[#999696]">
                <span>✉️</span>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-white mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="border border-[#FFFFFF3D] p-3 rounded-lg bg-transparent text-white"
                    placeholder="Enter your first name"
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
                    className="border border-[#FFFFFF3D] p-3 rounded-lg bg-transparent text-white"
                    placeholder="Enter your last name"
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
                  className="border border-[#FFFFFF3D] p-3 rounded-lg bg-transparent text-white"
                  placeholder="Enter your phone number"
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
                  className="border border-[#FFFFFF3D] p-3 rounded-lg bg-transparent text-white"
                  placeholder="Enter your email"
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
                  className="border border-[#FFFFFF3D] p-3 rounded-lg bg-transparent text-white"
                  placeholder="Write your message here"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <button
                  type="submit"
                  className="gradientButton text-white px-6 py-3 rounded-lg transition-all"
                >
                  Send Message →
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
