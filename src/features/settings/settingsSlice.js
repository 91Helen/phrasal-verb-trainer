import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',   // текущая тема ('light' или 'dark')
  language: 'en',   // язык интерфейса, напр. 'en' или 'ru'
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload; // устанавливаем тему
    },
    setLanguage(state, action) {
      state.language = action.payload; // устанавливаем язык
    },
  },
});

export const { setTheme, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
