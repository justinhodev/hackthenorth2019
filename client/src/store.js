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
  },
  getters: {
    getStoreNames: state => {
      if (state.receipts.length <= 0) return [];
      return state.receipts.data.map(receipt => receipt.store).filter((value, index, self) => self.indexOf(value) === index);
    },
    getSpendingByStore: state => {
      if (state.receipts.length <= 0) return [];
      return state.receipts.data.map(receipt => receipt.total).filter((value, index, self) => self.indexOf(value) === index);
    }
  }
})
