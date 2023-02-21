import React, { useState } from "react";

import ss from "../images/ss.png";
import WaitlistForm from "../partials/WaitlistForm";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      {/* Hero content */}
      <div className="pt-32 pb-12 md:pt-15 md:pb-20 mx-auto">
        <div class="md:grid md:grid-cols-12 md:gap-6 mx-auto">
          <div class=" text-center  bg-[#FFFBF9]  max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 mb-8 md:mb-0 md:order-1 aos-init">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Join our waitlist to stay informed{" "}
            </p>

            <WaitlistForm />
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
