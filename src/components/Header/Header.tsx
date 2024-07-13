import "./Header.css";
import logo from "../../assets/logo.svg";
import { ChangeEvent, Component, FormEvent } from "react";
import { SearchState } from "../../types";

export default class Header extends Component {
  state: SearchState = {
    searchQuery: localStorage.getItem("searchQuery") || "",
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("searchQuery", this.state.searchQuery);
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      searchQuery: e.target.value,
    });
  };

  render() {
    return (
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="logo" />
        </div>

        <form className="header__search-form" onSubmit={this.handleFormSubmit}>
          <input
            className="header__search-input"
            type="text"
            defaultValue={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
          <button className="header__search-button" type="submit">
            Let&apos;s find!
          </button>
        </form>

        <button className="header__error-button" type="submit">
          Error, please!
        </button>
      </header>
    );
  }
}
