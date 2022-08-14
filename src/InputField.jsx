import React, { useState } from "react";

const InputField = ({ showDiv }) => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="text"
        data-testid="searchBar"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 data-testid="displaySearch">{search}</h1>
      {showDiv && <div data-testid="divWeWantToShow">Hey I am Justin</div>}
    </div>
  );
};

export default InputField;
