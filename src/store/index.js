import Vue from 'vue';
import Vuex from 'vuex';

import character from './character';
import question from './question';
import answer from './answer';
import game from './game';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    character,
    question,
    answer,
    game,
  },
});

export default store;
