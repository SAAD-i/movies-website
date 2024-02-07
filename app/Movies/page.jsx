"use client";
import Card from "@/Components/Card";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovies, getTopMovies } from "@/Redux/movieSlice";

const Movies = () => {
  let movies = useSelector((data) => data.MovieReducer.movies.popularMovies);
  movies = movies.concat(
    useSelector((data) => data.MovieReducer.movies.topRatedMovies),
  );
  const dispatch = useDispatch();
  console.log(movies);
  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getTopMovies());
  }, []);
  return (
    <>
      <div className="grid pt-32 grid-cols-5 p-16">
        {movies.map((val, i) => {
          return <Card key={i} value={val} />;
        })}
      </div>
    </>
  );
};

export default Movies;
