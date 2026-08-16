import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: "",
  currentPage: 1,
  entriesPerPage: 10,
  sortDirection: "asc",
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setEntriesPerPage: (state, action) => {
      state.entriesPerPage = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
  },
});

export const {
  setSearchResult,
  setCurrentPage,
  setEntriesPerPage,
  setSortDirection,
} = tableSlice.actions;
export default tableSlice.reducer;
