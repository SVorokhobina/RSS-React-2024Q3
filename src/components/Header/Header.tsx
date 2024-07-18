import "./Header.css";
import logo from "../../assets/logo.svg";
import { Component } from "react";
import { HeaderProps } from "../../types";

export default class Header extends Component<HeaderProps> {
  state = {
    isError: false,
  };

  createError = () => {
    this.setState({
      isError: true,
    });
  };

  render() {
    if (this.state.isError === true) {
      throw new Error("Error boundary test error");
    }

    return (
      <header className="header">
        <div>
          <img className="header__logo" src={logo} alt="logo" />
        </div>

        <form
          className="header__search-form"
          onSubmit={this.props.handleFormSubmit}
        >
          <input
            className="header__search-input"
            type="text"
            defaultValue={this.props.searchValue}
            onChange={this.props.handleInputChange}
          />
          <button className="header__search-button" type="submit">
            Let&apos;s find!
          </button>
        </form>

        <button
          className="header__error-button"
          type="submit"
          onClick={this.createError}
        >
          Error, please!
        </button>
      </header>
    );
  }
}
