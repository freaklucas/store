<template>
  <div class="justify-center flex items-center">
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-8 mx-auto">
        <div class="lg:flex lg:-mx-2">
          <Menu />
          <Cart />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Menu from "../components/Menu.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "Home",
  components: { Menu, Cart },

  created: function () {
    this.$store.dispatch("getProducts");
  },

  computed: {
    ...mapState(["products", "categories"]),
  },
};
</script>
