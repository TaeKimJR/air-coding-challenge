import React from "react";

import FuzzySearch from "fuzzy-search";

import InfiniteScroller from "shared/InfiniteScroller";

import SearchInput from "./SearchInput";
import PersonResult from "./PersonResult";
import PERSON_DATA from "./person-data";

// Number of results to paginate by (e.g. page 1 has 20 results)
const PAGE_SIZE = 20;

const PersonSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const { current: PersonSearcher } = React.useRef(
    new FuzzySearch(PERSON_DATA, ["name"], {
      caseSensitive: false,
    })
  );

  const results = PersonSearcher.search(searchValue);
  const shownResults = results.slice(0, currentPage * PAGE_SIZE);
  const hasMoreResults = shownResults.length < results.length;

  return (
    <section>
      <SearchInput
        value={searchValue}
        onChange={(v) => {
          setSearchValue(v);
          setCurrentPage(1);
        }}
        onClear={() => {
          setSearchValue("");
          setCurrentPage(1);
        }}
      />
      <InfiniteScroller.Container
        hasMoreItems={hasMoreResults}
        loadingItems={false}
        onLoadMore={() => {
          setCurrentPage((prevPage) => prevPage + 1);
        }}
      >
        {shownResults.map(({ id, name, avatar, description }) => (
          <InfiniteScroller.Item key={id} showHideThreshold={2500}>
            <PersonResult
              name={name}
              avatar={avatar}
              description={description}
            />
          </InfiniteScroller.Item>
        ))}

        <InfiniteScroller.LoadMore loadMoreThreshold={500}>
          Load More
        </InfiniteScroller.LoadMore>
      </InfiniteScroller.Container>
    </section>
  );
};

export default PersonSearch;
