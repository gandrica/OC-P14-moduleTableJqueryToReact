import { useDispatch, useSelector } from "react-redux";
import { setEntriesPerPage } from "../../redux/tableSlice";
import styles from "./Entries.module.scss";

function Entries() {
  const dispatch = useDispatch();
  const currentEntries =
    useSelector((state) => state.table.entriesPerPage) || 10;

  const handleSelect = (e) => {
    dispatch(setEntriesPerPage(Number(e.target.value)));
  };

  return (
    <div className={styles.entriesControl}>
      <label>
        Show
        <select
          name="table-entries"
          id="table-entries"
          value={currentEntries}
          onChange={handleSelect}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
    </div>
  );
}

export default Entries;
