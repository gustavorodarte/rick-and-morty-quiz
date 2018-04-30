
export const incrementCorrectAnswer = (state, answer) => {
  state.correct += 1;
  state.all.push(answer);
};

export const incrementIncorrectAnswer = (state, answer) => {
  state.incorrect += 1;
  state.all.push(answer);
};
