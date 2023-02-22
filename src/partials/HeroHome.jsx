import React from "react";

import ss from "../images/ss.png";
import WaitlistForm from "../partials/WaitlistForm";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      {/* Hero content */}
      <div className="pt-20  md:pt-20 md:pb-20 mx-auto ">
        <div className="md:grid md:grid-cols-12  mx-auto h-full md:h-[70vh]">
          <div className=" text-center  bg-[#FFFBF9]  max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4">
            <div
              className=" px-10 md:py-32 pt-16
            "
            >
              <h2
                className="text-5xl
                text-left text-[#5AA568] mb-9
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
                Whether you’re new to a city or looking to grow your social
                circle, Budding is a simplified way to join or host your
                favourite social events.
              </p>

              <WaitlistForm />
            </div>
          </div>
          <div
            class="
            max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init
          "
          >
            <img
              src={ss}
              className="mx-auto px-2 md:h-[95vh]
            aspect-auto
            md:py-24
 flex items-center justify-center
            "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
