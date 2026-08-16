function TableCellHeader({ header, index }) {
  return (
    <th key={index}>
      {Object.values(header)[0]}
      <span className="sort-arrows">
        <span>▲</span>
        <span>▼</span>
      </span>
    </th>
  );
}

export default TableCellHeader;
