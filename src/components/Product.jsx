import React from "react";

import prod1 from "../image/prod1.jpg";
import prod2 from "../image/prod2.jpg";
import prod3 from "../image/prod3.jpg";
import prod4 from "../image/prod4.jpg";
import prod5 from "../image/prod5.jpg";

const Product = () => {
  return (
    <div id="product" name="product">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="font-name mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Product Designs
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1WFsyQZ9ljAgjekD5uqYexijG2KK9h0pz/view?usp=sharing"
          >
            <img alt="" src={prod1} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Pinacolada Cans
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1LOEIGZfa6l9rk3ZL7bVW_Qe3EEaWGE1x/view?usp=sharing"
          >
            <img alt="" src={prod2} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Waffer Cover
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1w1V08GhuJCUJ0vU38d3YLZTzgSJAexgI/view?usp=sharing"
          >
            <img alt="" src={prod3} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Chocolate Wrap
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1zYyD0pcbkt2qpRWT_Oj4z2DOYeMoJIKA/view?usp=sharing"
          >
            <img alt="" src={prod4} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">Cans</div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1HXSoIabDpNvJ_sCYEW5LXiuWxL-cMit-/view?usp=sharing"
          >
            <img alt="" src={prod5} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Wet Wipes
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
