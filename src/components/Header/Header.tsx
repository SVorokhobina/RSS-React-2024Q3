import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { HeaderProps } from "../../types";
import styles from "./Header.module.scss";

export default function Header({ updateSearchQuery }: HeaderProps): ReactNode {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("searchQuery") || "",
  );

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const query = inputValue.toLowerCase().trim();
    localStorage.setItem("searchQuery", query);
    updateSearchQuery(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} />
      <form className={styles.searchForm} onSubmit={onFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={inputValue}
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
