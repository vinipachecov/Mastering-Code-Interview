import { CLIENT_RENEG_LIMIT } from "tls";


/**
 * Find the first recurrent item in an array
 * 
 * Given an array = [2, 5 ,1 2, 3,5,1,2,4]
 * it should return 2
 * 
 * 
 * Given an array = [ 2,1,1,2,3,5,1,2,4]
 * it should return 1
 * 
 */
// Using hashSet
function firstRecurrent(array) {
  const start = new Date().getMilliseconds();
  // Do i have to save the keys?
  // or do I need only the check if the value
  // already in the structure?
  const hashSet = {};
  for (const item of array) {
    if (hashSet[item]) {
      console.log('Time with hash = ', start - new Date().getMilliseconds());
      return item;
    }
    hashSet[item] = item;     
  }  
  console.log('Time with hash = ', start - new Date().getMilliseconds());
  return undefined;
  //  loop over the array

  // save past values

  // check if value has been seen

}

const array = [2, 5 ,1 ,2, 3,5,1,2,4];
const test = [ 2,1,1,2,3,5,1,2,4];


console.log(firstRecurrent(array));
console.log(firstRecurrent(test));

// Using Set

function firstRecurrentWithSet(array) {
  const start = new Date().getMilliseconds();
  const set = new Set(); 
  for (const item of array) {
    if (set.has(item)){
      console.log('Time with set = ', start - new Date().getMilliseconds());
      return item
    }
    set.add(item);
  }
  console.log('Time with set = ', start - new Date().getMilliseconds());
  return undefined
}


console.log(firstRecurrentWithSet(array));
console.log(firstRecurrentWithSet(test));


// Andrei

function firstReucrringCharacter(input) {  
  for (let i = 0; i < array.length; i++) {    
    // check the element after i index    
    for (let j = i + 1; j < array.length; j++) {    
      if (input[i] === input[j]) {
        return input[i]        
      }
    }      
  }
  return undefined;
}
// time - O(n^2)
// space 0(1)


function firstReucrringCharacter2(input) {
  let map = {}
  for (let i = 0; i < array.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = input[i];
    }
  }
  return undefined;
}

console.log('andrei = ', firstReucrringCharacter([2,2]))

console.log('andrei2 = ', firstReucrringCharacter2([2,3,2]))
