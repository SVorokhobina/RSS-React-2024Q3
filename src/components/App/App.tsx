import useLocalStorage from "../../hooks/useLocalStorage.ts";
import Header from "../Header/Header.tsx";
import View from "../View/View.tsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useLocalStorage("searchQuery");

  const updateSearchQuery = (query: string): void => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header updateSearchQuery={updateSearchQuery} />
      <View searchQuery={searchQuery} />
    </>
  );
}
