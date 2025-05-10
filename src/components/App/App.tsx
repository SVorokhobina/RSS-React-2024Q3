import { Routes, Route } from "react-router";
import useLocalStorage from "../../hooks/useLocalStorage.ts";
import Header from "../Header/Header.tsx";
import View from "../View/View.tsx";
import PageNotFound from "../ErrorPages/PageNotFound.tsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useLocalStorage("searchQuery");

  const updateSearchQuery = (query: string): void => {
    setSearchQuery(query);
  };

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Header updateSearchQuery={updateSearchQuery} />
            <View searchQuery={searchQuery} />
          </>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
