import React, {useState} from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ","
  });

  const postUserData = () => {};

    return(
        <div>
            <section class="fonts text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        
        <h2 className="font-name mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Contact Me
        </h2>
        </div>
      
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <form method="POST">
        <div class="font-nav p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" 
            name="name" 
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={userData.name}
            onChange={postUserData}/>
          </div>
        </div>
        <div class="font-nav p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" 
            name="email" 
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={userData.email}
            onChange={postUserData}/>
          </div>
        </div>
        <div class="font-nav p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" 
            name="message" 
            class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            value={userData.message}
            onChange={postUserData}></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="button flex mx-auto text-white bg-sky-700 border-0 py-2 px-8 focus:outline-none hover:bg-sky-800 rounded text-lg">Send</button>
        </div>
        </form>
        <div class="font-name  w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <p class="text-slate-900 mt-2">+91 8767927688</p>
          <p class="text-slate-900 mt-2">kiyer8558@gmail.com</p>
          <p class="leading-normal text-slate-900 mt-2">Mumbai, MH
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Contact;