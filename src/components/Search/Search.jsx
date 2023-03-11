import React, { useContext } from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className={styles.root}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}

export default Search;
