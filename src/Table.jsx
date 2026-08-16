import { Provider } from "react-redux";
import store from "./redux/store.js";

import TableCore from "./components/tableCore/TableCore.jsx";

function Table() {
  return (
    <Provider store={store}>
      <TableCore />
    </Provider>
  );
}

export default Table;
