import React from "react";
import { Link } from "react-router-dom";

import mock from "../image/3d.png";
import broch from "../image/broch.png";
import prod from "../image/prod.png";
import web from "../image/web.png";

const Work = () => {
  return (
    <div name="work">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="font-name mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            My Work
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
          <Link
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            to="/mockup"
          >
            <img alt="" src={mock} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-lg font-bold text-gray-900"
              >
                3D Mockups
              </time>
            </div>
          </Link>

          <Link
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            to="/brochure"
          >
            <img alt="" src={broch} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-lg font-bold text-gray-900"
              >
                Brochures
              </time>
            </div>
          </Link>

          <Link
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            to="/product"
          >
            <img alt="" src={prod} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-lg font-bold text-gray-900"
              >
                Product Designing
              </time>
            </div>
          </Link>

          <Link
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            to="/webdes"
          >
            <img alt="" src={web} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-lg font-bold text-gray-900"
              >
                Web Designing
              </time>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
