import { createStore } from "vuex";

import axios from "axios";

export default createStore({
  state: {
    products: [],
    categories: [],
    priceTotal: 0.002,
  },

  mutations: {
    GET_PRODUCTS: function (state, payload) {
      state.products = payload;
    },
    GET_CATEGORIES: function (state, payload) {
      state.categories = payload;
    },
    GET_PRICE: function (state, payload) {
      state.priceTotal = payload;
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
    priceTotal(state) {
      return state.priceTotal.value;
    },
  },
  modules: {},
});
