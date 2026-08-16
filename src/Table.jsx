import { Provider } from "react-redux";
import store from "./redux/store.js";

import TableCore from "./components/tableCore/TableCore.jsx";

function Table() {
  const list = [
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "2022-01-01",
      department: "Sales",
      birthDate: "1990-01-01",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      startDate: "2022-01-01",
      department: "Marketing",
      birthDate: "1995-01-01",
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      startDate: "2022-01-01",
      department: "Engineering",
      birthDate: "1985-01-01",
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      startDate: "2022-01-01",
      department: "Finance",
      birthDate: "1992-01-01",
      street: "321 Pine Rd",
      city: "Houston",
      state: "TX",
      zipCode: "77002",
    },
    {
      firstName: "David",
      lastName: "Wilson",
      startDate: "2022-01-01",
      department: "Human Resources",
      birthDate: "1988-01-01",
      street: "654 Cedar Ln",
      city: "Phoenix",
      state: "AZ",
      zipCode: "85001",
    },
    {
      firstName: "Sarah",
      lastName: "Miller",
      startDate: "2022-01-01",
      department: "Operations",
      birthDate: "1993-01-01",
      street: "987 Maple Dr",
      city: "Philadelphia",
      state: "PA",
      zipCode: "19103",
    },
  ];
  return (
    <Provider store={store}>
      <TableCore list={list} />
    </Provider>
  );
}

export default Table;
