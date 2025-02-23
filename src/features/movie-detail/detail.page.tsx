import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./detail.css";

export const DetailPage = () => {
  const { id } = useParams();
  const url = `http://www.omdbapi.com/?i=${id}&apikey=9adf15d`;

  const { data, error, loading } = useFetch<any>(url);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>UPS! Hay un error: {error.message}</div>;
  }

  return (
    <>
      <div className="detail-container">
      <Link to={`/search`} className="btn-more">
      <button className="btn btn-dark">Regresar</button>
      </Link>
       
        <div className="img-content">
          <img src={data?.Poster} alt="" />
        </div>
        <div className="overlay">
          <div className="text-content w-auto">
            <h2>{data?.Title}</h2>
            <p className="col-12 col-md-6">{data?.Plot}</p>
            <ul className="d-md-flex d-block col-md-4 ps-3 justify-content-between mb-1">
              <li>{data?.Genre}</li>
              <li>{data?.Runtime}</li>
              <li>{data?.Year}</li>
            </ul>
            <ul className="d-md-flex d-block col-md-6 ps-3 justify-content-between">
              {data?.Ratings?.map((rating: any, index: any) => (
                <li key={index}>
                  {rating.Source}: <strong>{rating.Value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
