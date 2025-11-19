import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  completedVerbs: 0,    // количество выученных глаголов
  totalVerbs: 0,        // общее количество глаголов
  lastUpdated: null,    // время последнего обновления прогресса
};


const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setTotalVerbs(state, action) {
      state.totalVerbs = action.payload;
    },
    incrementCompleted(state) {
      state.completedVerbs += 1;
      state.lastUpdated = new Date().toISOString();
    },
    resetProgress(state) {
      state.completedVerbs = 0;
      state.lastUpdated = null;
    },
  },
});


export const { setTotalVerbs, incrementCompleted, resetProgress } = progressSlice.actions;


export default progressSlice.reducer; 