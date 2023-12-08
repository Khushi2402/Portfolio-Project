import React from "react";


export default function About() {
    return (
      <div name="about">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          About Me
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
      </div>
    );
  };