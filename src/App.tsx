import "./index.css";
import { Component } from "react";
import { SearchProps, SearchState } from "./types";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

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
        <Main />
      </>
    );
  }
}
