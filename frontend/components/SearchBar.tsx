import { useState, useEffect, FC, BaseSyntheticEvent } from "react";

type Item = {
  id: number;
  description: string;
};

interface Props {
  items: Item[];
  setItems: any;
  initialItems: Item[];
}

const SearchBar: FC<Props> = ({ items, setItems, initialItems }) => {
  const [searched, setSearched] = useState("");

  const search = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const searchTerm = e.target.firstElementChild.value.toLowerCase();
    setSearched(searchTerm);

    if (searchTerm !== "") {
      const filteredItems = items.filter((item) =>
        item.description.toLowerCase().includes(searchTerm)
      );
      setItems(filteredItems);
    } else {
      setItems(initialItems);
    }
    console.log(searchTerm);
  };

  const resetSearch = () => {
    setSearched("");
    setItems(initialItems);
  };

  return (
    <div>
      <form onSubmit={search}>
        <input
          type="text"
          placeholder="Search item..."
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />
      </form>
      <button onClick={resetSearch}>Reset</button>
    </div>
  );
};

export default SearchBar;
