<template>
  <div class="justify-center flex items-center">
    <section class="bg-white dark:bg-gray-900">
      <Presentation
        title="Store"
        :image="require('../assets/images/carrinho-de-compras.png')"
      />
      <div class="container px-6 py-8 mx-auto">
        <div class="lg:flex lg:-mx-2">
          <Menu />
          <Card />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Menu from "../components/Menu.vue";
import Card from "../components/Card.vue";
import Presentation from "../components/Presentation.vue";

export default {
  name: "Home",
  components: { Menu, Card, Presentation },

  created: function () {
    this.$store.dispatch("getProducts");
  },

  computed: {
    ...mapState(["products", "categories"]),
  },
};
</script>
