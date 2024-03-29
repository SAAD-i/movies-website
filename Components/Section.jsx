import React from "react";
import Card from "./Card";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
const Section = (props) => {
  const { value } = props;
  const home = useSelector((data) => data.StateReducer.navData.home);
  // console.log(value);
  return (
    <>
      <div
        className={`group font-serif mt-10 flex flex-col items-center border-b-0 border border-white rounded-t-md ${home ? "hover:scale-105 transition duration-500 ease-in-out" : ""} `}
      >
        <h1
          onClick={() => {
            console.log("Main Click");
          }}
          className={`text-5xl flex justify-between w-full font-bold text-black transition duration-500 ease-in-out bg-white p-3 rounded-md rounded-b-none ${home ? "hover:cursor-pointer" : ""}  `}
        >
          {value.title}
          {home ? (
            <FaRegArrowAltCircleRight className="text-black transition duration-500 ease-in-out" />
          ) : (
            ""
          )}
        </h1>
        <div className="grid grid-cols-5">
          {value.movies?.map((val, i) => {
            return <Card key={i} value={val} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
