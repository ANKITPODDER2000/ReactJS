import fruits from "./fruit";

function choose(fruits) {
    let ch = Math.floor(Math.random() * fruits.length);
    ch = fruits[ch];
    return ch;
}

function show(fruits, num) {
    console.log("Array is : ", fruits.slice(0, num), " ........");
}

function len(fruits) {
    return fruits.length;
}

function remove(fruits , ch) {
    let get = false;
    let newArray = [];
    for (let i = 0; i < len(fruits); i++){
        if (fruits[i] == ch) {
            if (get == true) {
                newArray.push(fruits[i]);
            } else {
                get = true;
            }
        } else {
            newArray.push(fruits[i]);
        }
    }
    return newArray;
}

export default choose;
export { show  , len , remove};