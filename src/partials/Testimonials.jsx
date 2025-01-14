import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Testimonials() {
  const [state, handleSubmit] = useForm("mayzodea");

  return (
    <section className="relative z-30 ">
      <div className="pt-20 pb-12 md:pt-20 md:pb-20 mx-auto bg-[#5AA568] h-[90vh]">
        <div className=" text-center  max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4">
          {state.succeeded ? (
            <div className=" py-24 flex items-center justify-center ">
              <h2
                className="text-5xl
              m-auto
                text-center text-white  mb-8
                font-bold
                leading-snug
                "
              >
                We'll be in touch :)
              </h2>
            </div>
          ) : (
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
              <form
                onSubmit={handleSubmit}
                class="space-y-8 md:w-1/2 mx-auto md:py-5"
              >
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@budding.app"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div class="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
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
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
