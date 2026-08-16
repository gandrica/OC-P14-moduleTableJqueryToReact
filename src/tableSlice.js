import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: null,
  filterResult: null,
  page: 1,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setFilterResult: (state, action) => {
      state.filterResult = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setSearchResult, setFilterResult, setPage } = tableSlice.actions;
export default tableSlice.reducer;
