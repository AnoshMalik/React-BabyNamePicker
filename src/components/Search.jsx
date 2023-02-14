import React, { useState } from "react";
import SearchResults from "./SearchResults";
import data from "../data/babyNamesData.json";

function Search() {
  const [names, setNames] = useState([]);

  function getNames(e) {
    setNames(
      data.map((object) => {
        if (object.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        //   console.log(object);
        //   names.push(object);
          return object;
        } else {
        //   console.log("No matches");
          return 0;
        }
      })
    );
  }

  return (
    <div style={{ margin: "15px" }}>
      <input type="text" placeholder="Search" onChange={getNames} />
      <SearchResults results={names} />
    </div>
  );
}

export default Search;
