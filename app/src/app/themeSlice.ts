import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../interfaces/interfaces";

//Define the initial state (Assumming) is Light Mode
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
    },
});


// Export the actions and reducer
export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;