import React from "react";

import FuzzySearch from "fuzzy-search";

import SearchInput from "./SearchInput";
import PersonResult from "./PersonResult";

import PERSON_DATA from "./person-data";

const PersonSearcher = new FuzzySearch(PERSON_DATA, ["name"], {
  caseSensitive: false,
});

const PersonSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const results = !!searchValue
    ? PersonSearcher.search(searchValue)
    : PERSON_DATA.slice(0, 1000);

  return (
    <section>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onClear={() => {
          setSearchValue("");
        }}
      />

      {results.map(({ id, name, avatar, description }) => (
        <PersonResult
          key={id}
          name={name}
          avatar={avatar}
          description={description}
        />
      ))}
    </section>
  );
};

export default PersonSearch;
