import React from "react";

interface SearchBarProps {
  filterConfigs: (filter: string) => void;
  filterText: string;
  addEntry: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  const changeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    props.filterConfigs(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.persist();
    if (event.key === "Enter" && props.filterText !== "") {
      props.addEntry();
    }
  };

  return (
    <div id="searchBar">
      <input value={props.filterText} onChange={changeFilter} onKeyDown={handleKeyDown}></input>
    </div>
  );
}
