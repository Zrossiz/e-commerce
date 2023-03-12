import React, { useCallback, useContext } from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useState } from "react";
function Search() {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <input
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}

export default Search;
