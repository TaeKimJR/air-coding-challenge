import React from "react";

import SearchInput from "./SearchInput";
import PersonResult from "./PersonResult";

import PERSON_DATA from "./person-data";

const PersonSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const filteredResults = PERSON_DATA.slice(0, 1000); // Grab first 1000 for now

  return (
    <section>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onClear={() => {
          setSearchValue("");
        }}
      />

      {filteredResults.map(({ id, name, avatar, description }) => (
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
