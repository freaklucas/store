<template>
  <div>
    <h1
      class="
        flex flex-center
        items-center
        justify-center
        mb-4
        dark:text-gray-300
        hover:translate-x-2
        text-3xl
        font-poppins
        mt-8
        text-gray-500
      "
    >
      {{ title }}
    </h1>

    <img :src="image" class="w-14" />
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
