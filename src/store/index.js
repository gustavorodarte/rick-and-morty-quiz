import Vue from 'vue';
import Vuex from 'vuex';

import character from './character';
import question from './question';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    character,
    question,
  },
});

export default store;
