import React, { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(query);

  return (
    <SearchContext.Provider value={{ query, setQuery, search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
