import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../app/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {theme: themeReducer}
export type AppDispatch = typeof store.dispatch;

export default store;