import fruits from "./fruit";
import choose, { show, len, remove } from "./operate";

const ch = choose(fruits);
show(fruits, len(fruits));
console.log("Outcome of random choose : ", ch);
console.log("Length of array is : ", len(fruits));
console.log("Fruits array after removing 1st instance : ", remove(fruits, ch));
