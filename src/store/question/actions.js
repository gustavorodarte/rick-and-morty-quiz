
const getRandomCharacter = (characters) => {
  const seed = Math.floor(Math.random() * characters.length);
  return characters[seed];
};

const generateNameOptions = (answer, characters, options = [], optionsAmount = 3) => {
  if (optionsAmount === 1) {
    options.push(answer);

    return options;
  }

  const randomChar = getRandomCharacter(characters);

  options.push(randomChar.name);
  const newCharacters = characters.filter(char => char.id !== randomChar.id);
  const newOptionsAmount = optionsAmount - 1;
  return generateNameOptions(answer, newCharacters, options, newOptionsAmount);
};

const generateRandomQuestionType = () => {
  const typesAmount = 2;
  return Math.floor(Math.random() * typesAmount);
};

const generateNameQuestion = (characters) => {
  const randomChar = getRandomCharacter(characters);
  return {
    text: 'What is a name of this character?',
    imgQuestion: randomChar.image,
    options: generateNameOptions(randomChar.name, characters),
    answer: randomChar.name,
  };
};

const generateStatusQuestion = (characters) => {
  const randomChar = getRandomCharacter(characters);
  return {
    text: `What's current status of ${randomChar.name}?`,
    imgQuestion: randomChar.image,
    options: ['Alive', 'Dead', 'unknown'],
    answer: randomChar.status,
  };
};

const getQuestion = (type, characters) => {
  const questionsTypes = [generateNameQuestion(characters), generateStatusQuestion(characters)];
  return questionsTypes[type];
};

export const generateQuestion = async ({ commit, dispatch, rootGetters }) => {
  await dispatch('character/getAllCharacters', null, {
    root: true,
  });
  const characters = rootGetters['character/allCharacters'];

  const newQuestion = getQuestion(generateRandomQuestionType(), characters);
  commit('setQuestion', newQuestion);
};

export const teste = some => some.thing;
