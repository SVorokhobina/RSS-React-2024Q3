import "./index.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import { SearchProps, SearchState } from "./types";
import ResultSection from "./components/ResultSection";

// import { fetchAll } from "./util/Responses";

export default class App extends Component {
  state: SearchState;

  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchValue: this.getSavedSearchText(),
    };
  }

  getSavedSearchText(): string {
    const value = localStorage.getItem("searchValue");
    if (value !== "" && value !== undefined && value !== null) {
      return value;
    }
    return "";
  }

  render() {
    return (
      <>
        <Header searchValue={this.state.searchValue} />
        <ResultSection />
      </>
    );
  }
}
