import React from "react";

import d1 from "../image/d1.jpg";
import d2 from "../image/d2.jpg";
import d3 from "../image/d3.jpg";

const Mockups = () => {
  return (
    <div id="mockup" name="mockup">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="font-name mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            3D Mockups
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-[1000px]">
          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1nDV7hZoU-l1GWXFf5eX4qIQPCVfMSfWt/view?usp=sharing"
          >
            <img alt="" src={d3} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Models
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1d2ehZ1SHJmMnlP2IvS0fpDBH1utkS24g/view?usp=sharing"
          >
            <img alt="" src={d1} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Letter Manipulation
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1glYz2K5vrZB7cFhfsO972Cc5WMS6DmVY/view?usp=sharing"
          >
            <img alt="" src={d2} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Letter Manipulation
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mockups;
