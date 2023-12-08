import React from "react";

import ill1 from '../image/home-ill.svg';

export default function Home() {
    return(
        <div>
            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={ill1}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi! I'm
        <br class="hidden lg:inline-block"/>Krithika Manikantan
      </h1>
      <p class="mb-8 leading-relaxed">Seeking a position as Web Developer, UI/UX Designer, at a corporate headquarter where development is the key focus.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};