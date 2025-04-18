import useLocalStorage from "./hooks/useLocalStorage.ts";
import Header from "./components/Header/Header";
import View from "./components/View/View";

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
