import { createStore } from "vuex";

import axios from "axios";

export default createStore({
  state: {
    products: [],
  },

  mutations: {
    GET_PRODUCTS: function (state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getProducts: async function ({ commit }) {
      try {
        let dataUrl = `https://fakestoreapi.com/products`;
        let response = await axios.get(dataUrl);

        commit("GET_PRODUCTS", response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    listProducts(state) {
      return state.products.length;
    },
  },
  modules: {},
});
