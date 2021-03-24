import React from "react";

import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
}

const SearchInput = ({ value, onChange, onClear }: SearchInputProps) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Type a name..."
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default SearchInput;
