import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "src/state/dataSlice";

const store = configureStore({
    reducer: {
        dataSlice: dataSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export { store };