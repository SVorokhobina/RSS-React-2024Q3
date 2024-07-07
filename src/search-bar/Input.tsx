import React from "react";
import { SearchText } from "../types";

export default class Input extends React.Component<SearchText> {
  constructor(props: SearchText) {
    super(props);
    this.state = {};
  }

  render() {
    const { searchText } = this.props;
    return <input className="search__input" type="search" value={searchText} />;
  }
}
