import Vue from 'vue'
import Vuex from 'vuex'

import { getAllReceipts } from './api/receipts';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    receipts: [],
    items: []
  },
  mutations: {
    setReceipts(state, products) {
      state.receipts = products;
    }
  },
  actions: {
    getReceipts({ commit }) {
      getAllReceipts().then(receipts => {
        commit('setReceipts', receipts);
      });
    }
  }
})
