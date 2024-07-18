import "./Loader.css";
import { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader__container">
        <span className="loader"></span>
      </div>
    );
  }
}
