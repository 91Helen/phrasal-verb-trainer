import { createSlice } from '@reduxjs/toolkit';
import phrasalVerbsData from '../../data/data';

const initialState = {
  verbs: phrasalVerbsData,
};

const verbsSlice = createSlice({
  name: 'verbs',
  initialState,
  reducers: {
    addVerb(state, action) {
      const newVerb = {
        ...action.payload,
        id: Date.now(),
        status: 'new',
        createdAt: new Date().toISOString(),
      };
      state.verbs.push(newVerb);
    },
    editVerb(state, action) {
      const index = state.verbs.findIndex(v => v.id === action.payload.id);
      if (index !== -1) {
        state.verbs[index] = { ...state.verbs[index], ...action.payload };
      }
    },
    deleteVerb(state, action) {
      state.verbs = state.verbs.filter(v => v.id !== action.payload);
    },
  },
});

export const { addVerb, editVerb, deleteVerb } = verbsSlice.actions;
export default verbsSlice.reducer;
