import { useDispatch } from "react-redux";

import { setList } from "../../redux/tableSlice.js";

import Entries from "../entries/Entries";
import SearchBar from "../searchBar/SearchBar";
import TableList from "../tableList/TableList";
import EntriesDisplay from "../entriesDisplay/EntriesDisplay";
import Pagination from "../pagination/Pagination";
import styles from "./TableCore.module.scss";

function TableCore({ list }) {
  const dispatch = useDispatch();
  dispatch(setList(list));
  return (
    <>
      <div className={styles.tableHeader}>
        <Entries />
        <SearchBar />
      </div>
      <TableList />
      <div className={styles.tableFooter}>
        <EntriesDisplay />
        <Pagination />
      </div>
    </>
  );
}

export default TableCore;
