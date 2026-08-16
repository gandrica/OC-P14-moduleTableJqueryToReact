import Entries from "../entries/Entries";
import SearchBar from "../searchBar/SearchBar";
import TableList from "../tableList/TableList";
import EntriesDisplay from "../entriesDisplay/EntriesDisplay";
import Pagination from "../pagination/Pagination";

function TableCore() {
  return (
    <>
      <Entries />
      <SearchBar />
      <TableList />
      <EntriesDisplay />
      <Pagination />
    </>
  );
}

export default TableCore;
