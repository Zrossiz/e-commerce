import React from "react";

import styles from "./Search.module.scss";
function Search({ searchValue, setSearchValue }) {
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