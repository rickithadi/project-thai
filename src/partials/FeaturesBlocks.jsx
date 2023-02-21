import React from "react";
import ss from "../images/ss.png";
import cover1 from "../images/cover1.png";
import cover2 from "../images/cover2.png";
import cover3 from "../images/cover3.png";

function FeaturesBlocks() {
  return (
    <>
      <section className="relative">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="md:pt-20 pb-12  md:pb-20 mx-auto ">
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
                  Budding, the app for social gatherings
                </h2>
                <p
                  className="text-left text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  You are always surrounded by people who are looking for
                  company, just like you. But how do you find them? Download
                  Budding and swipe on the events you are up for.
                </p>
              </div>
            </div>
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init">
              <img src={cover1} className="mx-auto " />
            </div>
          </div>
        </div>
      </section>
     <section className="relative bg-white z-20">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className=" pb-12  md:pb-20 mx-auto ">
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
                  Budding, the app for social gatherings 2
                </h2>
                <p
                  className="text-left text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  You are always surrounded by people who are looking for
                  company, just like you. But how do you find them? Download
                  Budding and swipe on the events you are up for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white z-30">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className=" pb-12   md:pb-20 mx-auto ">
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
                  Budding, the app for social gatherings
                </h2>
                <p
                  className="text-left text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  You are always surrounded by people who are looking for
                  company, just like you. But how do you find them? Download
                  Budding and swipe on the events you are up for.
                </p>
              </div>
            </div>
            <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init">
              <img src={cover3} className="mx-auto " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesBlocks;
