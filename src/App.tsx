import React from "react";
import SearchForm from "./search-bar/SearchForm";
import { SearchText } from "./types";

export default class App extends React.Component {
  constructor(props: SearchText) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="search-section">
          <SearchForm />
        </div>
        <div className="result-section">Section 2</div>
      </>
    );
  }
}
