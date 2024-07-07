import React from "react";
import Input from "./Input";
import { SearchText } from "../types";

export default class SearchForm extends React.Component {
  constructor(props: SearchText) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form className="search__form">
        <Input searchText="Nice value" />
        <button type="button" className="search__button">
          Search
        </button>
      </form>
    );
  }
}
