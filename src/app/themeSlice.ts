import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../interfaces/interfaces";


// Check the user's preferred color scheme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


//Define the initial state (Assumming) is Light Mode
const initialState: ThemeState = {
    mode: prefersDarkMode,
}


//Create slice Here
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode(state) {
            state.mode = !state.mode;
        },
    },
});


// Export the actions and reducer
export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;