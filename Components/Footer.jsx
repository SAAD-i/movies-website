import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-between bg-black h-72 mt-16 p-10 font-serif text-white">
        <div className="flex flex-col items-start">
          <h1 className=" text-3xl font-extrabold text-white rounded-md pb-8 text-center shadow-md">
            MoviesWeb
          </h1>
          <ul className="flex flex-col gap-2 items-start">
            <button className="hover:underline hover:duration-300 transition ease-in-out">
              Contact Us
            </button>
            <button className="hover:underline hover:duration-300 transition ease-in-out">
              About Us
            </button>
            <button className="hover:underline hover:duration-300 transition ease-in-out">
              Portfolio
            </button>
            <button className="hover:underline hover:duration-300 transition ease-in-out">
              Services
            </button>
          </ul>
        </div>
        <div className="w-1/3">
          <h1 className="text-2xl pb-8 font-bold">What we offer?</h1>
          <p className=" line-clamp-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            amet odit recusandae. Corporis accusantium sequi, culpa distinctio
            saepe dolor quasi dicta obcaecati alias voluptate iure, asperiores
            non vero nobis natus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Explicabo expedita laboriosam accusamus suscipit
            cum enim animi voluptatem corrupti, omnis, modi similique commodi
            quisquam consequatur illum aspernatur architecto assumenda dolorem
            quia?
          </p>
        </div>
        <div className=" w-2/5 flex flex-col gap-3">
          <h1 className="text-2xl text-red-700 font-bold">
            Connect with us via Email
          </h1>
          <input className="w-2/3 p-2" placeholder="Enter Email" type="text" />
          <button className="bg-red-700 text-white p-2 text-xl rounded-md w-32 hover:bg-white hover:text-red-700 duration-500 transition ease-in-out">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
