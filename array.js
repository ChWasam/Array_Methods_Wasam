// Methods of Array 
let dataset1 = [
    { product: "Camera", price: 5000 },
    { product: "Book", price: 2000 },
    { product: "Video Game", price: 200 },
    { product: "Shoes", price: 400 },
    { product: "jewelry", price: 1500 },
];
console.log(dataset1);
//1: Concate
let concat1 = dataset1.concat({ product: "Cloths", price: 1000 });
console.log(concat1);
// result: 
// [
//     { product: 'Camera', price: 5000 },
//     { product: 'Book', price: 2000 },
//     { product: 'Video Game', price: 200 },
//     { product: 'Shoes', price: 400 },
//     { product: 'jewelry', price: 1500 },
//     { product: 'Cloths', price: 1000 }
//   ]
// 2. Length
console.log(concat1.length);
// 3. indexof 
// console.log(dataset1.indexOf({product:"Shoes", price:400}));// will give -1 
// bcz it won't be able to find index in case of object
let arr1 = [3, 4, 5, 6, 7, 4, 9, 12, 22, 4];
console.log(arr1.indexOf(4));
console.log(arr1.indexOf(4, 2));
console.log(arr1.lastIndexOf(4));
console.log(arr1.lastIndexOf(4, 8));
//4: push
let push1 = dataset1.push({ product: "Cloths2", price: 1100 });
console.log(push1); //returns new length of array
console.log(dataset1);
// 5: pop
let pop1 = dataset1.pop();
console.log(pop1); // returns deleted value 
console.log(dataset1);
//6:unshift
let unshift1 = dataset1.unshift({ product: "Cloths3", price: 1400 });
console.log(unshift1); // returns new length of array
console.log(dataset1);
// 7: shift
let shift1 = dataset1.shift();
console.log(shift1); // returns deleted value 
console.log(dataset1);
//8:slice
let slice1 = dataset1.slice(2, 5);
console.log(slice1);
//9:splice
let splice1 = dataset1.splice(2, 1, { product: 'Video Game2', price: 400 });
console.log(splice1); // returns deleted value
console.log(dataset1);
//10:foreach (loop)
// due to inflation we need to inclease price of each item by 100
let forEachLoop1 = dataset1.forEach((value) => { console.log(value.price + 100); });
console.log(forEachLoop1);
// 11:filter
// Due to inflation i cannot buy products greater than 2100 
let filter1 = dataset1.filter((value) => { return value.price <= 2100; });
console.log(filter1);
// understand the difference between map and filter
// 12: Map
// adding name of shop with each item 
let map1 = dataset1.map((value) => value.product + "(Save Mart)");
console.log(map1);
// 13: reduce
//Total amount that i have to pay at counter 
// syntax understanding   
// array.reduce((accumulator,one by one value of array)=>{accumulator+one by one value of array,initial value(from where you want to start}));
// accumulator starts from zero in first itration 
let reduce1 = filter1.reduce((acc, value) => acc + value.price, +0);
console.log(reduce1);
// Total price 4300
// If one want Save Mart to deliver these products to their home 
// then we can replace (initial value =0) to delivery charges(250) 
let reduce2 = filter1.reduce((acc, value) => acc + value.price, +250);
console.log(reduce2);
//14: sort
let arr2 = [4, 3, 5, 2, 7, 1, 9, 1];
console.log(arr2.sort()); // only in  asceding order 
// Result
//[
//     1, 1, 2, 3,
//     4, 5, 7, 9
//   ]
let arr3 = [4, 'a', 3, 'B', 5, 'A', 2, 7, 'c', 1, 9, 1, 'E']; // ascending order according to UTF-16
console.log(arr3.sort());
// Result 
// [
//     1,   1, 2,   3,   4,   5,
//     7,   9, 'A', 'B', 'E', 'a',
//     'c'
//   ]
let arr4 = [4, 3, 5, -1, 2, 7, 1, -1, 9, -9, 1];
console.log(arr4.sort());
// Problems occured
//1.not able to arrange negative numbers correctly
//2.cant arrange them in descending order
// Solution 
// ascending order ==> a-b
console.log(arr4.sort((a, b) => a - b));
//result
// [
//     -9, -1, -1, 1, 1,
//      2,  3,  4, 5, 7,
//      9
//   ]
console.log(arr2.sort((a, b) => a - b));
// result
//   [
//     1, 1, 2, 3,
//     4, 5, 7, 9
//   ]
// descending order ==> b-a
console.log(arr4.sort((a, b) => b - a));
//result
//   [
//      9, 7, 5,  4,  3,
//      2, 1, 1, -1, -1,
//     -9
//   ]
console.log(arr2.sort((a, b) => b - a));
// result
//   [
//     9, 7, 5, 4,
//     3, 2, 1, 1
//   ]
//again  problem 
// we cannot sort string like this 
// arr 3 ==> string
// ascending order
let arr6 = ['g', 'n', 'c', 'z', 'a', 'C', 'D', 'P', 'e', 'T', 'w', 'p', 'N', 'r'];
console.log(arr6.sort((a, b) => a.localeCompare(b)));
// Result 
// [
//   'a', 'c', 'C', 'D',
//   'e', 'g', 'n', 'N',
//   'p', 'P', 'r', 'T',
//   'w', 'z'
// ]
let arr5 = [4, 'a', 3, -8, 'B', 5, -1, 'A', 2, -3, 7, 'c', -9, 1, 9, 1, -1, 'E', -8];
// array me ak hi type ka variable hota han 
// different value types  ka lia tuples hoti ha 
// aur aus me ham sorting karta hi nahoi han 
function sorting(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
}
console.log(arr6.sort(sorting));
//888888888888888888888888888888888888888888888888888888888888888888888888888
// 15: join 
console.log(arr6.join());
// result: C,D,N,P,T,a,c,e,g,n,p,r,w,z
console.log(arr6.join('-'));
// result: C-D-N-P-T-a-c-e-g-n-p-r-w-z
console.log(dataset1.join('-'));
// Result : [object Object]-[object Object]-[object Object]-[object Object]-[object Object]
//8888888888888888888888888888888888888888888888888888888888888888888888888888
// 16: includes
// gives true or false in return 
console.log(arr6.includes('P'));
// result :true 
console.log(dataset1.includes({ product: 'Shoes', price: 400 }));
// result :false  // check why not working on this 
// 17: find (only returns 1st value which satisfy the condition )
console.log(arr2.find((value) => value % 5 === 0));
// result:5
//console.log(dataset1);
console.log(dataset1.find((value) => value.price % 5 === 0));
// result:{ product: 'Camera', price: 5000 }
//18: findindex
console.log(arr2.findIndex((value) => value % 5 === 0));
// result:2
console.log(dataset1.findIndex((value) => value.price % 5 === 0));
// result:0
//8888888888888888888888888888888888888888888888888888888888888888888
//19:every
let arr7 = [2, 6, 4, 10];
console.log(arr7.every((value) => value % 2 === 0));
// result: true 
//20:some 
console.log(arr7.some((value) => value % 2 === 0));
// result: true 
//88888888888888888888888888888888888888888888888888888888888
//21:reverse
console.log(arr7.reverse());
// result: 
// [ 10, 4, 6, 2 ]
console.log(arr6);
console.log(arr6.reverse());
//result: [
//   'z', 'w', 'r', 'p',
//   'n', 'g', 'e', 'c',
//   'a', 'T', 'P', 'N',
//   'D', 'C'
// ]
//22:at
console.log(arr7.at(2));
// result:6
console.log(arr7.at(-1));
export {};
// result:2
