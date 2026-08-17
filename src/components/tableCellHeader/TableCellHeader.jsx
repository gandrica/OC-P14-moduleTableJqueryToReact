import { useDispatch, useSelector } from "react-redux";
import { setSortConfig } from "../../redux/tableSlice.js";

function TableCellHeader({ header }) {
  const dispatch = useDispatch();
  const currentSortConfig = useSelector((state) => state.table.sortConfig);

  const key = Object.keys(header)[0];
  const label = header[key];

  const handleSort = () => {
    let direction = "asc";

    if (currentSortConfig?.key === key) {
      direction = currentSortConfig.direction === "asc" ? "desc" : "asc";
    }

    dispatch(setSortConfig({ key, direction }));
  };
  const isSorted = currentSortConfig?.key === key;
  const isAsc = isSorted && currentSortConfig.direction === "asc";
  const isDesc = isSorted && currentSortConfig.direction === "desc";

  return (
    <th onClick={handleSort} style={{ cursor: "pointer" }}>
      {label}
      <span className="sort-arrows" style={{ marginLeft: "8px" }}>
        <span style={{ opacity: isAsc ? 1 : 0.3 }}>▲</span>
        <span style={{ opacity: isDesc ? 1 : 0.3 }}>▼</span>
      </span>
    </th>
  );
}

export default TableCellHeader;
