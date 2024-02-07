"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/Components/Card";
import { FadeLoader, BarLoader, ClipLoader } from "react-spinners";
const Movie = (props) => {
  const [movie, setMovie] = useState({});
  // console.log(props.params.id);
  const fetchById = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=7ff2b8ed34325fa1f74a09be9cc731b9`,
    );
    const data = response.data;
    setMovie(data);
    // console.log(data)
  };
  useEffect(() => {
    fetchById();
  });
  return (
    <>
      {movie.genres ? (
        <div className="flex m-10 p-10 pt-32 px-16 justify-around text-white font-serif">
          <div>
            <img
              className="rounded-md"
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt="Image"
              width={500}
              height={500}
            />
          </div>
          <div className="w-2/4 flex flex-col gap-5 p-5">
            <h1 className="text-7xl font-extrabold">{movie.original_title}</h1>
            <div>
              <ul className="text-white px-5 flex gap-2 items-center">
                <h2 className="text-xl font-bold">Genres : </h2>
                {movie.genres?.map((val, i) => {
                  return (
                    <li className="text-gray-300" key={i}>
                      {" "}
                      {val.name},{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
            <h2 className="px-5 text-gray-300">
              Realease Date : {movie.release_date}
            </h2>
            <h2 className="text-4xl font-bold text-center underline">
              Overview
            </h2>
            <p className="text-center w-2/3 self-center text-gray-300">
              {movie.overview}
            </p>
            <h2 className="text-4xl font-boldunderline underline">
              Production Companies
            </h2>
            <ul className="px-5 text-gray-300">
              {movie.production_companies?.map((val, i) => {
                return (
                  <li key={i}>
                    {i + 1}. {val.name}
                  </li>
                );
              })}
            </ul>
            <h2 className="text-4xl font-bold underline">
              Production Countries
            </h2>
            <ul className="text-gray-300 px-5">
              {movie.production_countries?.map((val, i) => {
                return (
                  <li key={i}>
                    {i + 1}. {val.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-full h-96 flex items-center justify-center text-white p-10 m-10">
          <BarLoader speedMultiplier={2} color="#ffffff" />
        </div>
      )}
    </>
  );
};

export default Movie;
