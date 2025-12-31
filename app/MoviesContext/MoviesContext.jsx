"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { createContext, useState } from "react";
export const MoviesContext = createContext();

export default function MoviesContextProvider(props) {
  const param = useParams();
  const [Movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  //getAllMovies
  async function getAllData() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ff0709cbbd6905ad7bfb14c0730e0007`
    );
    // console.log(data.results);
    setMovies(data.results);
    setpageCount(data.total_pages);
  }

  //searchMovie
  async function searchMovies(word) {
    if (word !== "") {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=ff0709cbbd6905ad7bfb14c0730e0007&query=${word}`
      );
      setMovies(data.results);
      setpageCount(data.total_pages);
    } else {
      getAllData();
    }
  }
  //movieDetails
  async function getMoviesDetails() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=ff0709cbbd6905ad7bfb14c0730e0007`
    );
    setMovies(data);
    console.log(data);
  }
  //paginition
  async function getPage(page) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ff0709cbbd6905ad7bfb14c0730e0007&page=${page}`
    );
    setMovies(data.results);
    console.log(data);
    setpageCount(data.total_pages);
  }

  return (
    <MoviesContext.Provider
      value={{ getAllData, Movies, searchMovies, getMoviesDetails, getPage , pageCount }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
