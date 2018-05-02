export const decreaseTimer = (state) => {
  state.timer -= 1;
};

export const resetTimer = (state) => {
  state.timer = 10;
};

export const loseLifes = (state) => {
  state.life -= 1;
};

export const resetLifes = (state) => {
  state.timer = 3;
};
