<template>
  <div>
    <h1
      class="
        flex flex-center
        items-center
        justify-center
        mb-4
        dark:text-gray-300
        text-3xl
        font-poppins
        mt-14
        text-gray-500
      "
    >
      {{ title }}
    </h1>

    <img :src="image" class="w-14 ml-14 mt-4 sm:ml-20" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "@/assets/images/carrinho-de-compras.png",
    },
  },
};
</script>
