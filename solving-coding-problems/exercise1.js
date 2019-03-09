/*  Given 2 arrays, create a function
taht let`s a user know(true/false) whether
these two arrays contain any common alignItems: '

for Example:
const array1 = ['a', 'b', 'c', 'x']
const array2 = = ['z', 'y', 'i']
// should return false
const array1 = ['a', 'b', 'c', 'x']
const array2 = = ['z', 'y', 'x']
// should return true

2 parameters - arrays - no size limit
return true or false
',
*/
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'r'];

// function containCommonItem(arr1,arr2) {
  
//   for(let i =0;  i< arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       return true;
//     }
//     // for(let j = 0; j< arr2.length; j++) {
//     //   if(arr1[i] === arr2[j]) {
//     //     return true;
//     //   }          
//     // }
//   }
//   return false;
// }
// O(a*b)
// Space complexity - O(1)

// 1st optimization 

/*
Use hash tables to check literals already 
checked
*/

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// My solution ****
// function containCommonItem(arr1,arr2) {
//   // 1 loop through first array and create object
//   // where properties === items in the array
//   const table = {};
//   for (const iterator of arr1) {
//     table[iterator] = iterator;    
//   }
//   // console.log(table);
//   // 2 loop through second array and check if item in second
//   // array exists in the created object
//   for (const iterator of arr2) {
//     if (table[iterator] !== undefined) {
//       console.log('common item =', iterator);
//       return true;
//     }    
//   }
//   return false;
// }


// Andrei solution
function containCommonItem(arr1,arr2) {
  // 1 loop through first array and create object
  // where properties === items in the array
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }  
  // 2 loop through second array and check if item in second
  // array exists in the created object  
  for (let j = 0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }    
  return false;
}
// console.log(containCommonItem(array1,array2));
// O(a+b)
// O(a) - Space complexity

function containsCommonItem3(arr1,arr2) {
  return arr1.some(item => arr2.includes(item));
}
console.log(containsCommonItem3(array1,array2));


