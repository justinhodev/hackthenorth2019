import Vue from "vue";
import Vuex from "vuex";

import { getAllReceipts } from "./api/receipts";
import { getAllItems } from "./api/items";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    receipts: [],
    items: []
  },
  mutations: {
    setReceipts(state, receipts) {
      state.receipts = receipts;
    },
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    getReceipts({ commit }) {
      getAllReceipts().then(receipts => {
        commit("setReceipts", receipts);
      });
    },
    getItems({ commit }) {
      getAllItems().then(items => {
        commit("setItems", items);
      });
    }
  },
  getters: {
    getStoreNames: state => {
      if (state.receipts.length <= 0) return [];
      return state.receipts.data
        .map(receipt => receipt.store)
        .filter((value, index, self) => self.indexOf(value) === index);
    },
    getSpendingByStore: state => {
      if (state.receipts.length <= 0) return [];
      return state.receipts.data
        .map(receipt => receipt.total)
        .filter((value, index, self) => self.indexOf(value) === index);
    },
    getAllItems: state => {
      if (state.receipts.length <= 0) return [];
      return state.receipts.data.map(item => {
        return { productName: item.name, price: item.price, subtitle: "test" };
      });
    }
  }
});
