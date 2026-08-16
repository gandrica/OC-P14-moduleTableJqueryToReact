import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

const unsubscribe = store.subscribe(() => {
  console.log("State updated:", store.getState());
});
// Call this function to stop listening to state updates when needed

export default store;
