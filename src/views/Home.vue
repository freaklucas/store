<template>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">

    <div class="flex flex-col justify-center items-center">
      <h2
        class="font-semibold text-2xl"
        v-for="product in products"
        :key="product.id"
      >
        {{ product.png }}
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},

  created: function () {
    this.$store.dispatch("getProducts");
  },

  computed: {
    ...mapState(["products"]),
  },
};
</script>
