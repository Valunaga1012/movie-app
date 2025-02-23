import { createContext, useContext } from "react";

interface SearchContextType {
    value: string;
    setValue: (value: string) => void;
  }

  export const SearchContext =  createContext<SearchContextType>({value: '', setValue:()=>{} });

  export const useSearch = () => {
    const context = useContext(SearchContext);

    if (!context) {
      throw new Error("useSearch debe usarse dentro de un SearchProvider");
    }

    return context;
  };