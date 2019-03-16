const arr = [1,1,9];

console.log(arr.reduce((acc,cur) => {
  acc += cur;
  return acc;
}, 0))

console.log(arr.sort((a,b)=> {
  return a < b ? -1 : 1;
}))
