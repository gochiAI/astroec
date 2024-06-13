import { persistentMap  } from "@nanostores/persistent";
import { atom, computed } from "nanostores";

export const product_items = atom({
  "1044": {
    name: "ランダム缶バッチ2個セット",
    price: 600,
  },
  "1055": {
    name: "ハンドバック",
    price: 3200,
  },
  "1066": {
    name: "アクリルキーホルダー",
    price: 2300,
  },
});
/*_shopping_cart items:[{item_name:String,item_price:Number,item_qnty:Number,item_page:String}]*/
export type ShoppingCart = {
  items: {
    item_name: string;
    item_price: number;
    item_qnty: number;
    item_page: string;
  }[];
};
const storeShoppingCart = persistentMap <ShoppingCart>(
  `_shopping_cart`,
  { items: [] },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
export function addCart(
  item_name: string,
  item_price: number,
  item_qnty: number,
  item_page: string
) {
  const currentCart = storeShoppingCart.get();
  const items = currentCart.items;
  const index = items.findIndex((item) => item.item_name === item_name);
  if (index === -1) {
    items.push({ item_name, item_price, item_qnty, item_page });
  } else {
    items[index].item_qnty += item_qnty;
  }
  storeShoppingCart.set({ ...currentCart, items }); // 変更されたカートを保存
}

const storeCartTotalPrice = computed(storeShoppingCart, (cart) => {
  return cart.items.reduce(
    (total, item) => total + item.item_price * item.item_qnty,
    0
  );
});
const storeCartTotalQnty = computed(storeShoppingCart, (cart) => {
  return cart.items.reduce((total, item) => total + item.item_qnty, 0);
});
const storeUniqueItemsQnty = computed(storeShoppingCart, (cart) => {
  return cart.items.length;
});
export {
  storeShoppingCart,
  storeCartTotalPrice,
  storeCartTotalQnty,
  storeUniqueItemsQnty,
};
