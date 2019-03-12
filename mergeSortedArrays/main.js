// given two arrays into a function
// merge them so they continue ordered


const arr1 = [0,3,4,31];
const arr2 = [4,6,30];

// Lazy approach

function mergeSortedArrays(arr1, arr2) {
  // combine both arrays into one
  // sort them again
  const res = [...arr1, ...arr2]
  res.sort((a, b) => a - b);
  return res;
}
// console.log('[mergeSortedArrays] ', mergeSortedArrays(arr1,arr2));


// Andrei first solution
function mergeSortedArrays2(arr1, arr2) {
  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];

  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr2;
  }

  let i = 1;
  let j = 1;
  while(array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }    
  }
  
  return mergedArray;
}
console.log('[mergeSortedArrays] ', mergeSortedArrays2(arr1,arr2));