import React from "react";

import broch1 from "../image/broch1.jpg";
import broch2 from "../image/broch2.jpg";

const Brochures = () => {
  return (
    <div id="brochure" name="brochure">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="font-name mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Brochures
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1yzdLtf-zCnz8VYYB495BHWjNC_rae9Qw/view?usp=sharing"
          >
            <img alt="" src={broch1} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Beam Med
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1VKy-4GkmUCyhLbrZlt9Y-PWcVCty90Rq/view?usp=sharing"
          >
            <img alt="" src={broch2} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">IAID</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brochures;
