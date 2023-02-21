import React, { useState } from "react";

import ss from "../images/ss.png";
import WaitlistForm from "../partials/WaitlistForm";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}



      {/* Hero content */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-20 mx-auto">
         <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
          <div className="text-center md:text-left">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Join our waitlist to stay informed{" "}
            </p>

            <WaitlistForm />
          </div>
          <div className="mx-auto">
            <img src={ss} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
