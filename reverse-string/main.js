// Create a function that reverses a string:
// 'Hi my name is Andrei should be:
//'ierdnA si eman vM iH'

// with reverse
// function reverse(str) {    
//   return str.split('').reverse().join('');
// }

function reverse(str) {
  if (str && str.length < 2 || typeof str !== 'string') {
    return 'not a string';
  }

  // create an auxiliary func to save the str backwards
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);    
  }  

  console.log(backwards);
  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join()

console.log(reverse('Hi my name is Andrei'));