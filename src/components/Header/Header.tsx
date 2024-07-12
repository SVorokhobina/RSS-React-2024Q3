import "./Header.css";
import logo from "../../assets/logo.svg";
import { Component } from "react";
import { SearchProps } from "../../types";

export default class Header extends Component<SearchProps> {
  render() {
    return (
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="logo" />
        </div>

        <form className="header__search-form">
          <input
            className="header__search-input"
            type="text"
            defaultValue={this.props.searchValue}
          />

          <button className="header__search-button" type="submit">
            Let&aposs find!
          </button>
        </form>

        <button className="header__error-button" type="submit">
          Error, please!
        </button>
      </header>
    );
  }
}
