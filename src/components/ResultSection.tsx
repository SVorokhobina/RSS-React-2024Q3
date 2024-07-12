import { Component } from "react";
// import { SearchProp } from "../util/types";
// import { fetchData } from "../util/Responses";
// import Card from "./Card";
// import { CardParams } from "../util/types";

export default class ResultSection extends Component {
  state = {
    cardParams: {
      name: "",
      photoUrl: "",
    },
  };

  /* componentDidMount(): void {
    const fetchedCardParams = await fetchData("ditto");
    
    this.setState({cardParams: {name: fetchedCardParams.}}); 
  } */

  render() {
    return <div className="result-section"></div>;
  }
}
