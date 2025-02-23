import { Link } from "react-router-dom";
import "./card.css";

interface Props {
    movieId: string;
  title: string;
  year: string;
  Poster: string;
}

export const Card = ({ movieId, title, year, Poster }: Props) => {
  return (
    <div className="card">
      <img src={Poster} alt="" />
      <div className="overlay">
        <div className="text-content">
          <h5 className="title">{title}</h5>
          <span className="year">{year}</span>
        </div>
        <Link to={`/detail/${movieId}`}>
          <button className="btn btn-light">Ver más</button>
        </Link>
      </div>
    </div>
  );
};
