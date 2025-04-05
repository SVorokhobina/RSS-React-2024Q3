import { ReactNode } from "react";
import { HeaderProps } from "../../types";
import styles from "./Header.module.scss";

export default function Header({
  searchQuery,
  onInputChange,
  onFormSubmit,
}: HeaderProps): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="Enter the pokemon name"
          onChange={onInputChange}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

/* import "./Header.css";
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
} */

/* ---------------------------------------

 import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { HeaderProps } from "../../types";
import styles from "./Header.module.scss";

export default function Header({ getCards }: HeaderProps): ReactNode {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery") || "");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSearchQuery(e.currentTarget.value);
    console.log(searchQuery);
  }

  const onFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const value = searchQuery.toLowerCase().trim();
    localStorage.setItem("searchQuery", value);
    getCards(value);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          name="searchQuery"
          value={searchQuery}
          placeholder="Enter the pokemon name"
          onChange={onInputChange}
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
} */
