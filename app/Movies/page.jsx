"use client";
import Card from "@/Components/Card";
import { changeCat, changeHome, changeMovie } from "@/Redux/slice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Movies = () => {
  let movies = useSelector((data) => data.MovieReducer.movies.popularMovies);
  movies = movies.concat(
    useSelector((data) => data.MovieReducer.movies.topRatedMovies),
  );
  const dispatch = useDispatch();
  console.log(movies);
  useEffect(() => {
    // dispatch(getPopularMovies());
    // dispatch(getTopMovies());
    dispatch(changeCat(false));
    dispatch(changeHome(false));
    dispatch(changeMovie(true));
  }, []);
  return (
    <>
      <div className="grid grid-cols-5 p-16">
        {movies.map((val, i) => {
          return <Card key={i} value={val} />;
        })}
      </div>
    </>
  );
};

export default Movies;
