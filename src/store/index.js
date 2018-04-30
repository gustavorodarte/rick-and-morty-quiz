import Vue from 'vue';
import Vuex from 'vuex';

import character from './character';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    character,
  },
});

export default store;
