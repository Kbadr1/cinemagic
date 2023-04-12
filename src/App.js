import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
  Home,
  Category,
  Movie,
  Cast,
  Discover,
  Reviews,
  Keyword,
  Search,
} from "./pages";

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(query);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home query={query} setQuery={setQuery} />} />
        <Route
          path="/cinemagic"
          element={<Home query={query} setQuery={setQuery} />}
        />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/movie/:id/cast" element={<Cast />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie/:id/reviews" element={<Reviews />} />
        <Route path="keyword/:id" element={<Keyword />} />
        <Route
          path="/search"
          element={
            <Search
              query={query}
              setQuery={setQuery}
              search={search}
              setSearch={setSearch}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
