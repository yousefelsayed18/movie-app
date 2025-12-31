import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../images/1.webp";
import Link from "next/link";
// import { useContext } from "react";
// import { MoviesContext } from "../Context/MoviesContext";
export default function CardList({movie}) {
  // const {Movies} = useContext(MoviesContext)
  return (
    <>
     <Link href={`moviedetails/${movie.id}`}>
   
          <Card className="card relative " sx={{ maxWidth: 345, mt: 5, borderRadius: 5 }}>
            <CardMedia
              component="img"
              height="500"
              image={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="green iguana"
              sx={{ objectFit: "cover" }}
            />
                 <div
            className="layer absolute top-0 right-0 left-0 text-center 
          flex justify-center items-center flex-col gap-2
          bg-black/60 opacity-0 hover:opacity-100 transition-all duration-300 h-full"
          >
            <h1 className="text-white text-base">Movie Name : {movie.title}</h1>
            <h1 className="text-white text-base">Release date : {movie.release_date}</h1>
            <h1 className="text-white text-base">Number of residents : {movie.vote_count}</h1>
            <h1 className="text-white text-base">Evaluation : {movie.vote_average}</h1>
          </div>
          </Card>
    
     </Link>
    </>
  );
}
