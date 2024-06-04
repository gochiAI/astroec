import { atom, map } from 'nanostores';
export const $ItemData = atom({
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
}
});
export const $cartDataAtom = map({});
export const InCart = (id) => {
let newCart = $cartDataAtom.get() || {};
if (newCart[id]) {
newCart[id].count++;
} else {
newCart[id] = {
name: fItemD(id).name,
price: fItemD(id).price,
count: 1
};
}
$cartDataAtom.set(newCart);
};
export const updateCart = (id, num) => {
let newCart = $cartDataAtom.get() || {};
if (newCart[id]) {
newCart[id].count = num;
if (newCart[id].count === 0) {
delete newCart[id];
}
}
$cartDataAtom.set(newCart);
};
export const removeFromCart = (id) => {
let newCart = $cartDataAtom.get() || {};
if (newCart[id]) {
delete newCart[id];
}
$cartDataAtom.set(newCart);
};
export const fItemD=(id)=>{
return $ItemData.get()[id];
}
export const clearCart = () => {
$cartDataAtom.set({});
};
