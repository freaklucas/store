import { createStore } from "vuex";

import axios from "axios";

export default createStore({
  state: {
    products: [],
    categories: [],
  },

  mutations: {
    GET_PRODUCTS: function (state, payload) {
      state.products = payload;
    },
    GET_CATEGORIES: function (state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    getProducts: async function ({ commit }) {
      try {
        let dataUrl = `https://fakestoreapi.com/products`;
        let response = await axios.get(dataUrl);

        commit("GET_PRODUCTS", response.data);
        commit("GET_CATEGORIES", response.data);

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
    listCategories(state) {
      return state.categories.length;
    },
  },
  modules: {},
});
