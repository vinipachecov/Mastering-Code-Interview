/*
You will receive two arrays, with no duplicates.
Write a function that takes two arrays and returns true
if one is a rotatino of the other.

if one array is a rotation of the other, it means the 
the elements have the same elements in the same order
but in different indices
 */

const list1 = [1, 2, 3, 4, 5, 6, 7]
const list2a = [4, 5, 6, 7, 8, 1, 2, 3]

function isRotation(arr1, arr2) {

  //check if the array has the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // get first element
  const first =  arr1[0];
  for (const item of arr2) {
        
  }
  // check if there is in the array
}