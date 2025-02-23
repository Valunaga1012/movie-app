import { useState } from "react";
import { useSearch } from "../context/search.context";

export const Search = () => {
  const { setValue } = useSearch();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setValue(input);
    }
  };

  return (
    <div className="input-group my-5 m-auto">
      <input
        type="text"
        className="form-control "
        id="searchInput"
        placeholder="Buscar pelicula..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="btn btn-danger"
        type="button"
        id="button-addon2"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};
