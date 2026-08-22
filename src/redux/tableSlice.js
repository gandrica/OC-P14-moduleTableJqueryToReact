import { createSlice } from "@reduxjs/toolkit";
import { filterList, sortList, sliceList } from "../utils/utils.js";

const initialState = {
  searchResult: "",
  currentPage: 1,
  entriesPerPage: 10,
  sortConfig: { key: null, direction: "asc" },
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.initialList = action.payload;
      state.list = sliceList(
        state.initialList,
        state.currentPage - 1,
        state.entriesPerPage,
      );
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
      state.list = filterList(state.initialList, action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setEntriesPerPage: (state, action) => {
      state.entriesPerPage = action.payload;
      state.list = sliceList(
        state.initialList,
        state.currentPage,
        state.entriesPerPage,
      );
    },
    setSortConfig: (state, action) => {
      state.sortConfig = action.payload;
      state.list = sortList(state.list, action.payload);
    },
  },
});

export const {
  setList,
  setSearchResult,
  setCurrentPage,
  setEntriesPerPage,
  setSortConfig,
} = tableSlice.actions;
export default tableSlice.reducer;
