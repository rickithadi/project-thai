import React from "react";
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.png";
import cover3 from "../images/cover3.png";

function FeaturesBlocks() {
  return (
    <>
      <section className="relative">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="md:pt-20  md:pb-20 mx-auto ">
          <div className="md:grid md:grid-cols-12 mx-auto h-full md:h-[70vh]">
            <div
              className=" text-center
          max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4"
            >
              <div
                className=" px-10 md:py-32
            "
              >
                <h2
                  className="text-5xl
                text-left text-[#5AA568] mb-8
                font-bold
                leading-snug
                "
                >
                  Host and attend events
                </h2>
                <p
                  className="text-left text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Join or host gatherings – from a night out to a morning run,
                  meet others while doing something you enjoy
                </p>
              </div>
            </div>
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init">
              <img src={cover1} className="mx-auto " />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white z-10">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="  md:pt-20 md:pb-20 mx-auto ">
          <div className="grid md:grid-cols-12 mx-auto h-full md:h-[70vh]">
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 order-last aos-init">
              <img src={cover2} className="mx-auto " />
            </div>
            <div
              className=" text-center
          max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4"
            >
              <div
                className=" px-10 md:py-32 pt-16
            "
              >
                <h2
                  className="text-5xl
                text-left text-[#5AA568] mb-8
                font-bold
                leading-snug
                "
                >
                  Meet like-minded people
                </h2>
                <p
                  className="text-left text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Just like you, there’s always people looking to hang out. We
                  make it easier to find others with the same interests, hobbies
                  or mindset
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white z-20">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="md:pt-20 md:pb-20 mx-auto ">
          <div className="md:grid md:grid-cols-12 mx-auto h-full md:h-[70vh]">
            <div
              className=" text-center
          max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4"
            >
              <div
                className=" px-10 md:py-32 pt-16
            "
              >
                <h2
                  className="text-5xl
                text-left text-[#5AA568] mb-8
                font-bold
                leading-snug
                "
                >
                  Form meaningful connections
                </h2>
                <p
                  className="text-left text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Create a lifetime of memorable experiences and plant the seeds
                  of a Budding friendship
                </p>
              </div>
            </div>
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-0 md:order-1 aos-init">
              <img src={cover3} className="mx-auto " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesBlocks;
