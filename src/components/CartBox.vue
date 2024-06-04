<template>
  <div id="Cart">
    <h2>カート</h2>
    <table>
      <thead>
        <tr>
          <th>商品名</th>
          <th>価格</th>
          <th>数量</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, id) in cartData" :key="id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}円</td>
          <td>
            {{ item.count }}
            <!--<input type="number" v-model="item.count" min="1" @change="updateCart(id, item.count)" />-->
          </td>
          <td>{{ item.price * item.count }}円</td>
          <!--<td>
            <button @click="removeFromCart(id)">削除</button>
          </td>-->
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3">合計</th>
          <th>{{ totalAmount }}円</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from '@nanostores/vue';
import { $cartDataAtom } from "../script/store";
const $cartItems = useStore($cartDataAtom);
export default {
  props: ['cartData'],
  setup(props) {
    const cartData = ref(props.cartData || $cartItems);
    const totalAmount = computed(() => {
      return Object.values(cartData.value).reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    });

    watch(() => $cartItems, (newVal) => {
      cartData.value = newVal;
    });
    return {
      cartData,
      totalAmount,
      updateCart,
      removeFromCart,
      clearCart,
    };
  },
};
</script>

<style scoped>
#Cart {
  display: flex;
  justify-content: center;
  color: white;
}
#cartnone {
  margin: 40px;
}
table {
  color:black;
  width: 60vw;
  background-color: aliceblue;
  border-collapse: collapse;
  margin: 40px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

input[type="number"] {
  width: 50px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: azure;
}
</style>
