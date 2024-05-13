import React from "react";


function ContactMe() {

    return (
        <div className="flex justify-center" id="contact">
          <div className=" ">
            <p className="text-center text-3xl pb-5 text-amber-50  font-sans font-semibold">
              Contact Me
            </p>
            <div className="max-w-3xl  rounded-lg border border-amber-50 p-3 lg:p-5">
              <p className="text-sm text-amber-50">
                If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests. You can contact me through this form if you wish to propose any job related to my skills.
              </p>
              <form action="https://formspree.io/f/mgegqzyd" method="POST">
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-base text-amber-50 ">Your Name: </label>
                    <input
                      className="w-full bg-[#10172d5a] text-white border rounded-md border-amber-50 focus:border-amber-50 focus:border-2 ring-1 outline-0 transition-all  px-3 py-2"
                      type="text"
                      name="name"
                      maxLength="100"
                      required={true}
                    />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label className="text-base text-amber-50">Your Email: </label>
                    <input
                      className="w-full bg-[#10172d5a] text-white border rounded-md border-amber-50 focus:border-amber-50 focus:border-2 ring-1 outline-0 transition-all  px-3 py-2"
                      type="email"
                      name="email"
                      maxLength="100"
                      required={true}
                    />
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <label className="text-base text-amber-50">Your Message: </label>
                    <textarea
                      className="w-full bg-[#10172d5a] text-white border rounded-md border-amber-50 focus:border-amber-50 focus:border-2 ring-1 outline-0 transition-all  px-3 py-2"
                      name="message"
                      maxLength="500"
                      required={true}
                      rows="4"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button type="submit" className="gap-1 px-4 mt-4 mr-5 py-2 text-white font-sans font-semibold rounded-lg border border-amber-50 hover:bg-amber-50 hover:text-gray-950">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default ContactMe;
