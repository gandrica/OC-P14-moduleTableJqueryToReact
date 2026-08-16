import TableCellHeader from "../tableCellHeader/TableCellHeader.jsx";
function TableListHeader() {
  const tableHeaders = [
    { firstName: "First Name" },
    { lastName: "Last Name" },
    { startDate: "Start Date" },
    { department: "Department" },
    { birthDate: "Date of Birth" },
    { street: "Street" },
    { city: "City" },
    { state: "State" },
    { zipCode: "Zip Code" },
  ];
  return (
    <thead>
      <tr>
        {tableHeaders.map((header, index) => (
          <TableCellHeader key={index} header={header} index={index} />
        ))}
      </tr>
    </thead>
  );
}

export default TableListHeader;
