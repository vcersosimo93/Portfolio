import React from "react";

function ContactMe() {
  return (
    <div className="flex justify-center font-sans font-semibold xl:mt-24  lg:mt-24 md:mt-40 sm:mt-24  " id="contact">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <p className="text-center sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-3xl text-amber-50 font-sans font-semibold pb-5">
          Contact Me
        </p>
        <div className="rounded-lg border border-amber-50 p-5 m-5">
          <p className="text-sm text-amber-50">
            If you have any questions, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests. You can contact me through this form if you
            wish to propose any job related to my skills.
          </p>
          <form action="https://formspree.io/f/mgegqzyd" method="POST">
            <div className="mt-6 space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-base text-amber-50">Your Name: </label>
                <input
                  className="w-full bg-gray-800 text-white border border-amber-50 rounded-md px-3 py-2 bg-opacity-40"
                  type="text"
                  name="name"
                  maxLength="100"
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base text-amber-50">Your Email: </label>
                <input
                  className="w-full bg-gray-800 text-white border border-amber-50 rounded-md px-3 py-2 bg-opacity-40"
                  type="email"
                  name="email"
                  maxLength="100"
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-base text-amber-50">Your Message: </label>
                <textarea
                  className="w-full bg-gray-800 text-white border border-amber-50 rounded-md px-3 py-2 bg-opacity-40"
                  name="message"
                  maxLength="500"
                  required={true}
                  rows="4"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-lg border border-amber-50 hover:bg-amber-50 hover:text-gray-950 transition-all"
                >
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
