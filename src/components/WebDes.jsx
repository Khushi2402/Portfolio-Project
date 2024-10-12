import React from "react";

import web1 from "../image/web1.jpg";
import web2 from "../image/web2.jpg";
import web3 from "../image/web3.jpg";
import web4 from "../image/web4.jpg";
import web5 from "../image/web5.jpg";
import web6 from "../image/web6.jpg";

const WebDes = () => {
  return (
    <div id="webdes" name="webdes">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="font-name mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Web Designs
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1Yr2vY1EycGuEqomeHnoOiEPlaN8IZjHw/view?usp=sharing"
          >
            <img alt="" src={web1} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Shopify
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1X6qkXkoDw9MQXFL-TUO1bS7YPD5h7x1-/view?usp=sharing"
          >
            <img alt="" src={web2} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Ecommerce App
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1ASTndRx7C9D1itpGFu29aaV0drBJItfu/view?usp=sharing"
          >
            <img alt="" src={web3} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                IAID Website
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1F-OFjNy_rbqkMwEf7IwmhC9NPyCg3vbZ/view?usp=sharing"
          >
            <img alt="" src={web4} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                McDonald's App Redesign
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1cwtygMUJwSflEPuMVBbiBHNvIuO-AS42/view?usp=sharing"
          >
            <img alt="" src={web5} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Meal Planner
              </div>
            </div>
          </a>

          <a
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            href="https://drive.google.com/file/d/1B8C4X80sek3WiCksxIRznWr-hpnea2Dl/view?usp=sharing"
          >
            <img alt="" src={web6} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <div className="block text-lg font-bold text-gray-900">
                Ride.ev
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDes;
