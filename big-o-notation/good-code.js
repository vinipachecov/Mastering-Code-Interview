// Big O Asymptotic Notation 
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo',
'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(10000000).fill('nemo');

function findNemo(array) {
  let t0 = new Date().getMilliseconds();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nome') {
      console.log('Found nemo!');
    }
  }
  let t1 = new Date().getMilliseconds();
  console.log('call to find nemo took ' + (t1-t0) + ' milliseconds');
}
findNemo(large) // which is linear -> goes through all the array length
// every time. so O(n)



// Example of O(1) || Constant Time
const boxes = [1,2,3,4,5]
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0])
  console.log(boxes[1])
}

// log All pairs

function logAllPairs(boxes) {
  for (const it1 of boxes) {
    for (const it2 of boxes) {
      console.log(it1 + ' ' + it2)      
    }    
  }
}

logAllPairs(boxes);