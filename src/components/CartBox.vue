<script setup>
import { ref } from 'vue';
import { storeShoppingCart,storeUniqueItemsQnty  } from "../script/store";
const cart = ref(storeShoppingCart.get().items);


</script>
<template>
  <div id="Cart">
    <table v-if="cart.length > 0">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <input type="number" v-model="item.quantity" @change="updateCart" />
          </td>
          <td>{{ item.price * item.quantity }}</td>
          <td>
            <button @click="removeItem(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else id="cartnone">
      <h2>Your cart is empty</h2>
      {{ storeShoppingCart.get().items }}
    </div>
  </div>
</template>

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
  color: black;
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
