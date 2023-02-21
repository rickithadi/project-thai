import React from "react";

import TestimonialImage from "../images/testimonial.jpg";

function Testimonials() {
  return (
    <section className="relative z-50 ">
      <div className="pt-20 pb-12 md:pt-20 md:pb-20 mx-auto bg-[#5AA568] ">
        <div className=" text-center  max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4">
          <div
            className=" px-10
            "
          >
            <h2
              className="text-5xl
                text-center text-white  mb-8
                font-bold
                leading-snug
                "
            >
              Get in touch
            </h2>
            <p
              className="text-center text-white text-xl text-wwhite mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Drop us a message and we'll get back.
            </p>
            <form action="#" class="space-y-8 w-1/2 mx-auto py-5">
              <div>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@budding.app"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="
           bg-white
           text-gray-600
           hover:text-[#5AA568]
          float-right py-3 px-5 text-sm font-medium text-center  rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
