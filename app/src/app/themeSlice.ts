import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../interfaces/interfaces";

//Assumming Initial state is Light Mode
const initialState: ThemeState = {
    darkMode: false,
}

//Create slice Here
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
        },
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload;
        },
    },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;