"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
} from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { changeIsOpen, changeHamOpen } from "@/Redux/slice";
import { useDispatch, useSelector } from "react-redux";
// import Dropdown from './Dropdown';
const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [hamOpen, setHamOpen] = useState(false);
  // const list = ["Action", "Horror", "SciFy"];
  const isOpen = useSelector((data) => data.StateReducer.navData.isOpen);
  const hamOpen = useSelector((data) => data.StateReducer.navData.hamOpen);
  const list = useSelector((data) => data.StateReducer.navData.list);
  const home = useSelector((data) => data.StateReducer.navData.home);
  const movie = useSelector((data) => data.StateReducer.navData.movie);
  const cat = useSelector((data) => data.StateReducer.navData.cat);

  const dispatch = useDispatch();
  return (
    <>
      <div className="flex bg-black text-gray-300 h-20 w-full justify-between items-center px-24 font-serif">
        <h1 className=" text-3xl font-extrabold text-white rounded-md py-3 px-4 text-center shadow-md">
          MoviesWeb
        </h1>
        <div className="hidden md:block">
          <ul className="flex gap-5 items-center font-bold lg:gap-12">
            <Link
              href={"/"}
              className={`px-6 py-3 rounded-md ${home ? "bg-gray-500 text-white shadow-md" : ""}  hover:bg-gray-500 duration-300 hover:text-white hover:shadow-md`}
            >
              Home
            </Link>
            <div className="">
              <button
                onClick={() => {
                  // setIsOpen(!isOpen);
                  dispatch(changeIsOpen());
                }}
                className={`flex items-center justify-between active:border-2 ${cat ? "bg-gray-500 text-white shadow-md" : ""} duration-100 w-36 px-4 py-3 rounded-md ${isOpen ? "bg-gray-500 text-white border-2" : ""} hover:bg-gray-500 duration-300 hover:text-white hover:shadow-md`}
              >
                <div>Categories</div>
                <div>
                  {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </div>
              </button>
              {isOpen && (
                <div className="flex flex-col gap-4 w-36 px-2 py-3 fixed top-24 bg-gray-400 rounded-md">
                  {list.map((val, i) => {
                    return (
                      <Link
                        onClick={() => {
                          // setIsOpen(!isOpen);
                          dispatch(changeIsOpen());
                        }}
                        href={""}
                        key={i}
                        className="flex items-center text-black rounded-md shadow-sm border-gray-500 hover:bg-gray-500 hover:duration-300 hover:shadow-md p-1"
                      >
                        <IoMdArrowDropright color="black" />
                        {val}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            {/* <Dropdown/> */}
            <Link
              href={"/Movies"}
              className={`px-6 py-3 rounded-md ${movie ? "bg-gray-500 text-white shadow-md" : ""} hover:bg-gray-500 duration-300 hover:text-white hover:shadow-md`}
            >
              Movies
            </Link>
          </ul>
        </div>
        <button className="font-bold bg-green-800 rounded-md py-2 px-4 text-center hover:text-white duration-300 hover:shadow-md hidden md:block hover:scale-105 ease-in-out">
          Signup
        </button>
        {/* This the hamburger button for Mobile view */}
        <button
          onClick={() => {
            // setHamOpen(!hamOpen);
            dispatch(changeHamOpen());
            dispatch(changeIsOpen(false));
            // setIsOpen(false);
          }}
          className="md:hidden hover:bg-gray-500 hover:duration-300 hover:shadow-md p-2 rounded-md"
        >
          <GiHamburgerMenu className="hover" size={30} />
        </button>
      </div>
      {hamOpen && (
        <div
          className={`w-[50vh] sm:w-[75vh] md:hidden  p-10 text-xl text-white bg-gray-400 absolute top-24 rounded-md`}
        >
          <div className="">
            <ul className="flex flex-col gap-5 items-center font-bold lg:gap-12">
              <Link
                href={""}
                className="px-4 py-3 w-full rounded-md hover:bg-white hover:text-black duration-300 hover:shadow-md"
              >
                Home
              </Link>
              <div className="w-full text-center">
                <button
                  onClick={() => {
                    // setIsOpen(!isOpen);
                    dispatch(changeIsOpen());
                  }}
                  className={`flex items-center w-full text-center hover:bg-white hover:text-black justify-between active:border-2 duration-100 px-4 py-3 rounded-md ${isOpen ? "bg-gray-500 text-white border-2" : ""} duration-300 hover:shadow-md`}
                >
                  <div>Categories</div>
                  <div>
                    {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                  </div>
                </button>
                {isOpen && (
                  <div className="flex flex-col text-sm gap-4 w-full px-2 py-3 top-24 bg-gray-400 rounded-md">
                    {list.map((val, i) => {
                      return (
                        <Link
                          onClick={() => {
                            // setHamOpen(!hamOpen);
                            dispatch(changeHamOpen());
                          }}
                          href={""}
                          key={i}
                          className="flex items-center text-white rounded-md border-gray-500 hover:bg-gray-500 hover:duration-300 hover:shadow-md p-1"
                        >
                          <IoMdArrowDropright color="black" />
                          {val}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* <Dropdown/> */}
              <Link
                href={""}
                className="px-4 py-3 w-full rounded-md hover:bg-white duration-300 hover:text-black hover:shadow-md"
              >
                Movies
              </Link>
              <button className="font-bold bg-green-800 rounded-md py-2 px-4 text-center hover:text-white duration-300 hover:shadow-md hover:scale-105 ease-in-out">
                Signup
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
