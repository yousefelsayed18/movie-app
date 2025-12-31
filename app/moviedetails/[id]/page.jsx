"use client";
import { MoviesContext } from "@/app/MoviesContext/MoviesContext";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

export default function Details() {
  const { getMoviesDetails, Movies } = useContext(MoviesContext);

  useEffect(() => {
    getMoviesDetails();
  }, [getMoviesDetails]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 mt-6">
      <div
        className="
          h-[35vh]
          sm:h-[45vh]
          lg:h-[70vh]
          bg-center bg-no-repeat
          m-auto
          rounded-2xl
          overflow-hidden
        "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${Movies?.backdrop_path})`,
          backgroundSize: "contain",
        }}
      />

      <div className="mt-6 max-w-3xl mx-auto text-center space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold">
          🎬 {Movies?.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-400">
          Release Date: {Movies?.release_date}
        </p>
        <p className="text-sm sm:text-base">
          Votes: {Movies?.vote_count}
        </p>
        <p className="text-sm sm:text-base">
          Rating: ⭐ {Movies?.vote_average}
        </p>
      </div>

      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-center">
          Description
        </h2>
        <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
          {Movies?.overview}
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/">
          <Button
            className="w-full sm:w-auto"
            variant="contained"
          >
            Back to Home
          </Button>
        </Link>

        {Movies?.homepage && (
          <a href={Movies.homepage} target="_blank">
            <Button
              className="w-full sm:w-auto"
              variant="outlined"
            >
              Watch Now
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
