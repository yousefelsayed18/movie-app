"use client";
import React, { useContext, useEffect } from "react";
import CardList from "../cardlist/page";
import { MoviesContext } from "../MoviesContext/MoviesContext";
import Paginition from "../Paginaition/Paginition";
// import { MoviesContext } from "../Context/MoviesContext";
export default function MovieList() {
  const { getAllData, Movies } = useContext(MoviesContext);
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <div className=" container w-[98%] m-auto ">
        <div className=" flex flex-wrap gap-4 justify-center">
          {Movies.length >= 1
            ? Movies.map((movie) => <CardList key={movie.id} movie={movie} />)
            : "there is no movies"}
        </div>
        
      </div>
      <div className=" mt-5 w-[50%] m-auto text-center">
        <Paginition/>
      </div>
    </>
  );
}
