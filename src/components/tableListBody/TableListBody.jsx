import { useSelector } from "react-redux";

function TableListBody() {
  const tableListBody = useSelector((state) => state.table.list);
  console.log("tableListBody", tableListBody);
  return (
    <tbody>
      {tableListBody.map((row, index) => (
        <tr key={index}>
          <td>{row.firstName}</td>
          <td>{row.lastName}</td>
          <td>{row.startDate}</td>
          <td>{row.department}</td>
          <td>{row.birthDate}</td>
          <td>{row.street}</td>
          <td>{row.city}</td>
          <td>{row.state}</td>
          <td>{row.zipCode}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableListBody;
