<script setup>
import { ref } from 'vue';
import { InCart } from "../script/store.js";

const id = ref(null);

// カートに商品を追加する関数
const addToCart = () => {
  if (id.value !== null) {
    InCart(id.value);
  }
}
</script>

<template>
  <button @click="addToCart" id="IncartB">カートに入れる</button>
</template>
