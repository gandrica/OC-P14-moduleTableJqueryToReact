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
          <th key={index}>
            {Object.values(header)[0]}{" "}
            <span className="sort-arrows">
              <span>▲</span>
              <span>▼</span>
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableListHeader;
