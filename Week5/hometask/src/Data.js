let dataArray = [
    { 'id': "4", "name": "Charmander", "type": "Fir", "exp": 62},
    { 'id': "7", "name": "Squirtel", "type": "Water", "exp": 63 },
    { 'id': "11", "name": "Metapod", "type": "Bug", "exp": 72},
    { 'id': "12", "name": "Butterfree", "type": "Flying", "exp": 178 },
    { 'id': "25", "name" :  "Pikachu","type" : "Electric", "exp" :  112},
    { 'id': "39", "name" :  "Jigglipuff","type" : "Normal", "exp" :  95},
    { 'id': "94", "name" :  "Gengar","type" : "Poison", "exp" :  225},
    { 'id': "133", "name" :  "Eevee","type" : "Normal", "exp" :  65}
]

let Array1 = [];
let Array2 = [];

for (let i = 0; i < 8; i++){
    let random = Math.floor(Math.random() * dataArray.length);
    if (i % 2 === 0) {
        Array1.push(dataArray[random]);
    } else {
        Array2.push(dataArray[random]);
    }
    dataArray = dataArray.slice(0, random).concat(dataArray.slice(random + 1, dataArray.length));
}

export {
    Array1,
    Array2
}