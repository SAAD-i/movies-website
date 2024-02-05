"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
// import poster from 'images/poster'
const Card = (props) => {
  const { value } = props;
  // console.log("Card");
  // console.log(value);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <>
      {value != undefined ? (
        <Tilt options={defaultOptions}>
          <div className="w-[350px] h-[550px] text-white duration-300 flex flex-col justify-between rounded-md p-2 font-serif hover:duration-500 hover:cursor-pointer  hover:bg-gray-300 hover:shadow-2xl shadow-black">
            <div className="bg-gradient-to-r from-amber-700 to-orange-700 rounded-md overflow-hidden text-center">
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${value.poster_path}`}
                alt="Image"
                width={400}
                height={400}
              />
            </div>
            <h1 className="font-bold text-xl h-10">{value.original_title}</h1>
            {/* <p className='line-clamp-2'>{value.overview}</p> */}
            <div className="flex justify-between items-center">
              <h3 className="">Release Data : {value.release_date}</h3>
            </div>
          </div>
        </Tilt>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
