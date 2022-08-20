import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {

    },
});
export const dataSliceActions = dataSlice.actions;
export default dataSlice.reducer;