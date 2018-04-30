const getRandomCharacter = (characters) => {
  const seed = Math.floor(Math.random() * characters.length);
  return characters[seed];
};

const generateOptions = (answer, characters, options = [], optionsAmount = 3) => {
  if (optionsAmount === 1) {
    options.push({
      id: answer.id,
      name: answer.name,
    });

    return options;
  }

  const randomChar = getRandomCharacter(characters);

  options.push({
    id: randomChar.id,
    name: randomChar.name,
  });
  const newCharacters = characters.filter(char => char.id !== randomChar.id);
  const newOptionsAmount = optionsAmount - 1;
  return generateOptions(answer, newCharacters, options, newOptionsAmount);
};


export const generateQuestion = async ({ commit, dispatch, rootGetters }) => {
  await dispatch('character/getAllCharacters', null, { root: true });
  const characters = rootGetters['character/allCharacters'];
  const answer = getRandomCharacter(characters);
  const newQuestion = {
    text: 'Qual é o nome desse personagem?',
    imgQuestion: answer.image,
    options: generateOptions(answer, characters),
    answer: answer.id,
  };
  commit('setQuestion', newQuestion);
};

export const teste = some => some.thing;

