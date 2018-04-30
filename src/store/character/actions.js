import api from './../../api/rickAndMorty';

export const getAllCharacters = async ({ commit }) => {
  commit('setCharacters', await api.character.getAll());
};

export const getById = async ({ commit }) => {
  commit('setCharacters', await api.character.getAll());
};
