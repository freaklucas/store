<template>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">

    <div class="flex flex-col justify-center items-center">
      <div
        class="font-semibold text-2xl"
        v-for="product in products"
        :key="product.id"
      >
        <img 
          :src="product.image" 
          alt="imagem dos produtos"
        />        
      </div>
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
