import React, {useState} from "react";
import styles from "./Search.module.css";

const Search = ({childToParent}) => {
    const [query, setQuery] = useState("");

    const searchPhotos = (e) => {
      e.preventDefault();
      childToParent(query);
    };

    return(
    <div className="container">
      <form className={styles.form} onSubmit={searchPhotos}>
        {" "}
        <label className={styles.label} htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className={styles.input}
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
    </form>
    </div>
    )
}

export default Search;