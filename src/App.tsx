import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import fetchData from "./api/apiResponses";
import { StateParams } from "./types";

export default function App() {
  const [state, setState] = useState<StateParams>({
    searchQuery: localStorage.getItem("searchQuery") || "",
    apiResponseArray: [],
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setState({ ...state, searchQuery: e.currentTarget.value });
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newValue = state.searchQuery.toLowerCase().trim();
    localStorage.setItem("searchQuery", newValue);
    getApiData(state.searchQuery);
  }

  function getApiData(searchQuery: string = "") {
    fetchData(searchQuery).then((response) => {
      setState({ ...state, apiResponseArray: response });
    });
  }

  return (
    <>
      <Header
        searchValue={state.searchQuery}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Main cardsArray={state.apiResponseArray} />
    </>
  );
}

/*export default class App extends Component {
  state: SearchState = {
    searchQuery: localStorage.getItem("searchQuery") || "",
    resultArray: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getApiRequestData(this.state.searchQuery);
  }

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSearchQuery = this.state.searchQuery.trim().toLowerCase();
    localStorage.setItem("searchQuery", newSearchQuery);

    this.getApiRequestData(this.state.searchQuery);
  };

  getApiRequestData = (searchQuery: string = "") => {
    this.setState({
      isLoading: true,
    });
    fetchData(searchQuery)
      .then((response) => {
        if (response) {
          this.setState({
            resultArray: response.arr,
            isLoading: response.isLoading,
          });
        } else {
          console.log("Empty response???");
        }
      })
      .catch(() => console.log("Something went wrong (App.tsx)"));
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header
          searchValue={this.state.searchQuery}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Main
          requestArray={this.state.resultArray}
          isLoading={this.state.isLoading}
        />
      </>
    );
  }
} */
