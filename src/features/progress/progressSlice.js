import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    completedVerbs: 0,
    totalVerbs: 0,
    lastUpdated: null,
  },
  reducers: {
    setTotalVerbs(state, action) {
      state.totalVerbs = action.payload;
    },
    incrementCompleted(state) {
      state.completedVerbs += 1;
      state.lastUpdated = Date.now();
    },
  },
});

export const { setTotalVerbs, incrementCompleted } = progressSlice.actions;
export default progressSlice.reducer;
