import { Provider } from "react-redux";
import store from "./redux/store.js";

import TableCore from "./components/tableCore/TableCore.jsx";

function Table(props) {
  return (
    <Provider store={store}>
      <TableCore {...props} />
    </Provider>
  );
}

export default Table;
