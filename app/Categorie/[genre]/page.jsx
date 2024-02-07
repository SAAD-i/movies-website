"use client";
import React from "react";
import { useSelector } from "react-redux";
import Card from "@/Components/Card";
const genre = (props) => {
  console.log(props);
  const gen = JSON.parse(props.params.genre);
  const popularMovies = useSelector(
    (data) => data.MovieReducer.movies.popularMovies,
  );
  const moviesList = popularMovies.concat(
    useSelector((data) => data.MovieReducer.movies.topRatedMovies),
  );
  const movies = moviesList.filter((movie) => {
    return movie.genre_ids.includes(gen);
  });
  //   let movies = [];
  //   moviesList.map((movie) => {
  //     // console.log("Movie Title : ", movie.original_title);
  //     movie.genre_ids.map((genre) => {
  //       //   console.log(JSON.parse(props.params.genre));
  //       if (genre === gen) {
  //         movies.push(movie);
  //       }
  //     });
  //   });
  console.log("Filtered movies:", movies);

  //   const movies = moviesList.filter((movie) =>
  //     movie.genres.some((genre) => genre === props.params.genre),
  //   );
  //   let movies = [];
  //   moviesList.map((data) => {
  //     data.genres.map((val) => {
  //       // val === props.params.genre ? movies.push(val)
  //       if (val === props.params.genre) {
  //         movies.push(data);
  //         return null;
  //       }
  //     });
  //   });
  //   console.log(movies);
  return (
    <>
      {movies.length !== 0 ? (
        <div className="grid pt-32 grid-cols-5 p-16">
          {movies?.map((val, i) => {
            return <Card key={i} value={val} />;
          })}
        </div>
      ) : (
        <h1 className="text-5xl text-white font-bold w-full my-72 text-center">
          No Movies Found!
        </h1>
      )}
    </>
  );
};

export default genre;
