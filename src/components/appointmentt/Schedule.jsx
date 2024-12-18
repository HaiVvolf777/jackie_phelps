
const Schedule = () => {
    return (
        <>
            <div className="container mx-auto text-black py-[100px] px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 items-center">
                    <div className="col-span-2">
                        <h1 className="text-[#39648C] text-5xl font-bold mb-4">
                            Schedule a Consultation
                        </h1>
                        <h2 className="text-[#39648C] text-2xl mb-4">
                            Take the First Step Toward Justice
                        </h2>
                        <p className="mb-8 font-neue">
                            At Jacki Phelps Law, we understand that navigating the legal system can be overwhelming. Whether you’re seeking post-conviction relief, clemency, or representation for a loved one, we’re here to provide clarity, guidance, and hope.
                        </p>
                        <h2 className="text-[#39648C] text-2xl mb-4 font-medium">
                            Our consultation process is designed to:
                        </h2>
                        <ul className="mb-8 text-base font-neue">
                            <li>
                                Understand your unique story and legal needs.
                            </li>
                            <li>
                                Provide an honest assessment of your case.
                            </li>
                            <li>
                                Outline potential strategies for moving forward.
                            </li>
                        </ul>
                        <h1 className="text-[#39648C] text-4xl font-bold mb-4">
                            How It Works
                        </h1>

                        <ul className="mb-4 text-base font-neue">
                            <li>
                                <strong>1. Initial Consultation:</strong>
                                Book a 60-minute consultation to discuss your case and legal goals.
                            </li>
                            <li>
                                <strong>2. Expert Review:</strong>
                                Jacki will personally review your case details and develop a tailored approach to meet your needs.
                            </li>
                            <li>
                                <strong>3. Next Steps:</strong>
                                Gain insight into the legal process and how we can advocate for you.
                            </li>
                        </ul>

                        <h2 className="text-[#39648C] text-2xl mb-4">
                            Consultation Fee:
                        </h2>
                        <p className="mb-4 font-neue">
                            $200 (applied toward your retainer if you choose to move forward with our services).
                        </p>
                    </div>

                    <div className="col-span-1" >
                        <img src="imag.png" alt="jackie" className="w-[600px] h-[600px] object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule