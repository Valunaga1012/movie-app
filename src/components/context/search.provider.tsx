import { ReactNode, useState } from "react";
import { SearchContext } from "./search.context";



export const SearchProvider = ({children}: { children: ReactNode }) => {
    const [value, setValue] = useState("");

    return (
        <SearchContext.Provider value={{ value, setValue }}>
        {children}
      </SearchContext.Provider>
    )
}