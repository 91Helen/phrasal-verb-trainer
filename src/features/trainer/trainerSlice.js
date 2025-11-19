import { createSlice } from '@reduxjs/toolkit';

const getRandomSubset = (array, n) => {
  if (array.length <= n) return array;
  const shuffled = array.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const initialState = {
  currentVerbIndex: 0,
  correctCount: 0,
  incorrectCount: 0,
  finished: false,
  trainingVerbs: [],
};

const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {
    startTraining(state, action) {
      state.trainingVerbs = getRandomSubset(action.payload, 10);
      state.currentVerbIndex = 0;
      state.correctCount = 0;
      state.incorrectCount = 0;
      state.finished = false;
    },
    nextVerb(state) {
      if (state.currentVerbIndex < state.trainingVerbs.length - 1) state.currentVerbIndex += 1;
      else state.finished = true;
    },
    prevVerb(state) {
      if (state.currentVerbIndex > 0) state.currentVerbIndex -= 1;
    },
    markCorrect(state) { state.correctCount += 1; },
    markIncorrect(state) { state.incorrectCount += 1; },
    resetTrainer(state) {
      state.currentVerbIndex = 0;
      state.correctCount = 0;
      state.incorrectCount = 0;
      state.finished = false;
      state.trainingVerbs = [];
    },
  },
});

export const { startTraining, nextVerb, prevVerb, markCorrect, markIncorrect, resetTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;
