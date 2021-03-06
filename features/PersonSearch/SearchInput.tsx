import React from "react";

import cx from "classnames";

import SearchIcon from "./SearchIcon";
import ClearIcon from "./ClearIcon";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
}

const SearchInput = ({ value, onChange, onClear }: SearchInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>();
  const [active, setActive] = React.useState(!!value);

  return (
    <div
      className={cx(styles.container, {
        [styles.active]: active,
        [styles.hasValue]: !!value,
      })}
    >
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>

      <input
        data-test-id="search-input"
        ref={inputRef}
        aria-label="search person by name"
        className={styles.input}
        type="text"
        placeholder="Type a name..."
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          setActive(!!value);
        }}
      />

      <div className={styles.clearSearch}>
        <button
          data-test-id="search-input-clear"
          className={styles.clearButton}
          aria-label="clear search"
          onClick={() => {
            onClear();

            // On clear, set focus to the input
            inputRef.current.focus();
          }}
        >
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
