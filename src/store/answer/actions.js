export const someAction = () => {};

export const checkAnswer = async ({ commit, dispatch, rootGetters }, answer) => {
  const question = rootGetters['question/getQuestion'];

  if (question.answer === answer) {
    const newAnswer = {
      correct: true,
      user: answer,
      expect: question.answer,
    };
    commit('incrementCorrectAnswer', newAnswer);
  } else {
    const newAnswer = {
      correct: false,
      user: answer,
      expect: question.answer,
    };
    commit('game/loseLifes', null, { root: true });
    commit('incrementIncorrectAnswer', newAnswer);
  }
  commit('game/resetTimer', null, { root: true });
  await dispatch('question/generateQuestion', null, { root: true });
};
