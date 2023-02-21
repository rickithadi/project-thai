import React  from "react";

import ss from "../images/ss.png";
import WaitlistForm from "../partials/WaitlistForm";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      {/* Hero content */}
      <div className="pt-20 pb-12 md:pt-20 md:pb-20 mx-auto">
        <div className="md:grid md:grid-cols-12 md:gap-6 mx-auto">
          <div className=" text-center  bg-[#FFFBF9]  max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init -m-4">
            <div className="md:py-40 px-10 sm:py-30
            sm:pt-30
            ">
              <h2
                className="text-5xl
                text-left text-[#5AA568] mb-8
                font-extrabold
                leading-snug
                "
              >
                The place for social gatherings
              </h2>
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
              Some copy that works
              </p>

              <WaitlistForm />
            </div>
          </div>
          <div class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init">
            <img src={ss} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
