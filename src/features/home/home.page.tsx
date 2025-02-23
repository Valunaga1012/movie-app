import { useState } from "react";
import { Search } from "../../components/search/search.component";
import { useFetch } from "../../hooks/useFetch";
import { useSearch } from "../../components/context/search.context";
import { Card } from "../../components/card/card";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

export const HomePage = () => {
  const { value } = useSearch();

  const url = value
    ? `http://www.omdbapi.com/?s=${encodeURIComponent(value)}&apikey=9adf15d`
    : "http://www.omdbapi.com/?i=''&apikey=9adf15d";

  const { data, error, loading } = useFetch<any>(url);

  if (error) {
    return <div>UPS! Hay un error: {error.message}</div>;
  }

  return (
    <>
      <div className="col-10 col-md-8 m-auto ">
        <Search />
      </div>

      {data?.Search?.length > 0 ? (
        <div className="d-flex container flex-wrap gap-3 justify-content-center">
          {data.Search.map((movie: any) => (
            <Card
              key={movie.imdbID}
              movieId={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              Poster={movie.Poster}
            />
          ))}
        </div>
      ) : (
        !loading && <div className="d-flex m-auto  justify-content-center align-items-center">
          <h4 className="mt-5">
        No se encontraron resultados.
       </h4></div> 
      )}
    </>
  );
};
