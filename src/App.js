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
} from "./pages";
import Search from "./pages/Search";
import SearchContextProvider from "./context/SearchContext";

function App() {
  return (
    <SearchContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/movie/:id/cast" element={<Cast />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/movie/:id/reviews" element={<Reviews />} />
        <Route path="keyword/:id" element={<Keyword />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </SearchContextProvider>
  );
}

export default App;
