export const someAction = () => {};

export const checkAnswer = async ({ commit, dispatch, rootGetters }, answer) => {
  const question = rootGetters['question/getQuestion'];

  if (question.answer === answer.id) {
    const newAnswer = {
      correct: true,
      user: answer.name,
      expect: question.answer.name,
    };
    commit('incrementCorrectAnswer', newAnswer);
  } else {
    const newAnswer = {
      correct: false,
      user: answer.name,
      expect: question.answer.name,
    };
    commit('incrementIncorrectAnswer', newAnswer);
  }
  await dispatch('question/generateQuestion', null, { root: true });
};
