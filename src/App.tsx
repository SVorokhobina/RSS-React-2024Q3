import "./index.css";
import { ChangeEvent, Component, FormEvent } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { SearchState } from "./types";
import fetchData from "./api/apiResponses";

export default class App extends Component {
  state: SearchState = {
    searchQuery: localStorage.getItem("searchQuery") || "",
    resultArray: [],
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSearchQuery = this.state.searchQuery.trim().toLowerCase();
    localStorage.setItem("searchQuery", newSearchQuery);

    fetchData()
      .then((response) => {
        this.setState({
          resultArray: response,
        });
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
        <Main requestArray={this.state.resultArray} />
      </>
    );
  }
}
