export const someAction = () => {};

export const checkAnswer = async ({ commit, rootGetters }, answer) => {
  const question = rootGetters['question/getQuestion'];

  console.log(question.answer);
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
};
