import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import image from "../images/1.webp";

export default function CardList({ movie }) {
  if (!movie?.id) return null;

  return (
    <Link href={`/moviedetails/${movie.id}`}>
      <Card
        className="card relative cursor-pointer"
        sx={{ maxWidth: 345, mt: 5, borderRadius: 5 }}
      >
        <CardMedia
          component="img"
          height="500"
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : image.src
          }
          alt={movie.title}
          sx={{ objectFit: "cover" }}
        />

        <div
          className="
            absolute inset-0
            flex flex-col justify-center items-center gap-2
            bg-black/60 opacity-0 hover:opacity-100
            transition-all duration-300 text-center
          "
        >
          <h1 className="text-white text-sm">
            Movie Name: {movie.title}
          </h1>
          <h1 className="text-white text-sm">
            Release Date: {movie.release_date}
          </h1>
          <h1 className="text-white text-sm">
            Votes: {movie.vote_count}
          </h1>
          <h1 className="text-white text-sm">
            Rating: {movie.vote_average}
          </h1>
        </div>
      </Card>
    </Link>
  );
}
