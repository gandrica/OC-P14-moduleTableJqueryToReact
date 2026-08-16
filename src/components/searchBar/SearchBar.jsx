import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResult } from "../../redux/tableSlice.js";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    dispatch(setSearchResult(event.target.value));
  };

  return (
    <label>
      Search:
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search employees..."
        aria-controls="employee-table"
      />
    </label>
  );
}

export default SearchBar;
