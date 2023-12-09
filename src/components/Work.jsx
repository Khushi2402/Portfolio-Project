import React from "react";

import ride from '../image/ride.svg';
import meal from '../image/meal.svg';
import web3 from '../image/web3.svg';
import nft from '../image/nft.svg';
import model from '../image/model.png';

const Work = () => {
    return(
      <div name="work">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        
        <h2 className="font-name mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          My Work
        </h2>
        </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.figma.com/file/Jtw21zeaG4lz56XKtLs8Lk/ride.ev?type=design&node-id=0%3A1&mode=design&t=E9XUXL7xWIvfQTn2-1" aria-label="Article">
            <img
              src={ride}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            
            <a
              href="https://www.figma.com/file/Jtw21zeaG4lz56XKtLs8Lk/ride.ev?type=design&node-id=0%3A1&mode=design&t=E9XUXL7xWIvfQTn2-1"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <button className="text-white bg-sky-700 border-0 py-2 px-4 focus:outline-none hover:bg-sky-800 rounded text-base">Open</button>
              <p className="font-title mt-5 text-xl font-bold leading-5">Ride.ev</p>
            </a>
          </div>
        </div> 
        
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.figma.com/file/679clRF5lQJOul9NiFyUH9/Meal-Planner-App?type=design&node-id=0%3A1&mode=design&t=V2XayuXyq9EZMH0r-1" aria-label="Article">
            <img
              src={meal}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <a
              href="https://www.figma.com/file/679clRF5lQJOul9NiFyUH9/Meal-Planner-App?type=design&node-id=0%3A1&mode=design&t=V2XayuXyq9EZMH0r-1"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <button className="text-white bg-sky-700 border-0 py-2 px-4 focus:outline-none hover:bg-sky-800 rounded text-base">Open</button>
              <p className="font-title text-xl mt-5 font-bold leading-5">Meal Planner</p>
            </a>
          </div>
        </div>
        
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.figma.com/file/vHOLR9pvHivOAcrKcLIGC8/Assignment-3?type=design&node-id=0%3A1&mode=design&t=6ZUYks5MgWMJIzwK-1" aria-label="Article">
            <img
              src={web3}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <a
              href="https://www.figma.com/file/vHOLR9pvHivOAcrKcLIGC8/Assignment-3?type=design&node-id=0%3A1&mode=design&t=6ZUYks5MgWMJIzwK-1"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <button className="text-white bg-sky-700 border-0 py-2 px-4 focus:outline-none hover:bg-sky-800 rounded text-base">Open</button>
              <p className="font-title text-xl font-bold  mt-5 leading-5">Web3</p>
            </a>
          </div>
        </div>

        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.figma.com/file/4cJmipjSSoq4YPD3SzdQ71/UI-Design-a-Dark-Mode-NFT-app?type=design&node-id=60%3A543&mode=design&t=TIMhD5d94iIp9fJe-1" aria-label="Article">
            <img
              src={nft}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <a
              href="https://www.figma.com/file/4cJmipjSSoq4YPD3SzdQ71/UI-Design-a-Dark-Mode-NFT-app?type=design&node-id=60%3A543&mode=design&t=TIMhD5d94iIp9fJe-1"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <button className="text-white bg-sky-700 border-0 py-2 px-4 focus:outline-none hover:bg-sky-800 rounded text-base">Open</button>
              <p className="font-title text-xl font-bold leading-5 mt-5">NFT App</p>
            </a>
          </div>
        </div>
        
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="https://www.figma.com/file/1S9jkmnDYqMOKecw8CDF15/%F0%9F%93%A6-3D-models-for-your-new-app-design-(Community)?type=design&node-id=23%3A52&mode=design&t=pCiYI7IXfynIieFc-1" aria-label="Article">
            <img
              src={model}
              className="w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <a
              href="https://www.figma.com/file/1S9jkmnDYqMOKecw8CDF15/%F0%9F%93%A6-3D-models-for-your-new-app-design-(Community)?type=design&node-id=23%3A52&mode=design&t=pCiYI7IXfynIieFc-1"
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <button className="text-white bg-sky-700 border-0 py-2 px-4 focus:outline-none hover:bg-sky-800 rounded text-base">Open</button>
              <p className="font-title text-xl font-bold leading-5 mt-5 ">3D Model Mockup</p>
            </a>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
};

export default Work;