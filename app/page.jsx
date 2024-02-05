"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Dropdown from "@/Components/Dropdown";
import Card from "@/Components/Card";
import Section from "@/Components/Section";
import Hero from "@/Components/Hero";
import axios from "axios";
import { changeIsOpen, changeHamOpen } from "@/Redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../Redux/movieSlice";
const page = () => {
  const movie = useSelector((data) => data.MovieReducer.movies.popularMovies);
  const dispatch = useDispatch();
  // const popularMovies = [];
  // let index = 0;
  // for (let i = 0; i < 4; i++) {
  //   popularMovies[i] = movie[index];
  //   index = index + 3;
  // }
  // const dispatch = useDispatch();
  // const isOpen = useSelector((data) => data.navData.isOpen);
  // const hamOpen = useSelector((data) => data.navData.hamOpen);
  // const movieById = async () => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/982940?api_key=7ff2b8ed34325fa1f74a09be9cc731b9`,
  //   );
  //   const data = response.data;
  //   setmovie(data);
  //   console.log(data);
  // };
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <>
      <div
        // onClick={() => {
        //   isOpen ? dispatch(changeIsOpen(false)) : "";
        //   hamOpen ? dispatch(changeHamOpen(false)) : "";
        // }}
        className="flex flex-col justify-start items-center gap-10 p-2"
      >
        {/* <Dropdown/> */}
        <Navbar />
        {/* <div className='grid grid-cols-3 p-10 gap-8'>
        {movie.map((val,i)=>{
          return (
            <Card key={i} value={val}/>
          )
        })}
      </div> */}
        <Section value={movie} />
        {/* <Hero /> */}
        {/* <div className="pt-10">
          <Card value={movie} />
        </div> */}
      </div>
    </>
  );
};

export default page;
