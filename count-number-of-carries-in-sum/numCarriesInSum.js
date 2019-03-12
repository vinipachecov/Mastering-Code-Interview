// receives two numbers 
// calculate the number of carries related to that sum

const num1 = 1;
const num2 = 0;

// String to Array approach
function numCarries(num1, num2) {  
  // transform each number into string 
  // transform each string into array
  const number1Array = num1.toString().split('')
  const number2Array = num2.toString().split('')
  let numberOfCarries = 0;
  let currentCarry = 0;

  let biggerLength;
  // find which array is bigger
  if (num1 > num2) {
    biggerLength = number1Array.length;    
  } else {
    biggerLength = number2Array.length;        
  } 
  
  //  loop over the arrays from the end
  // to the beggining just like a normal sum
  for(let i = 1; i < biggerLength + 1; i++) { 
    // console.log(`${Number(number1Array[number1Array.length - i])} + ${Number(number2Array[number2Array.length -i])} + ${currentCarry}`)       
    if (number1Array[number1Array.length - i] === undefined) {      
      //numberArray1 is the smaller number and is out of numbers
      // check until second array end + carry for more carries
      if (Number(number2Array[number2Array.length - i]) + currentCarry > 9) {
        currentCarry = 1;
        numberOfCarries++;
      } else {
        currentCarry = 0;        
      }
    } 
    else if(number2Array[number2Array.length - i] === undefined) {
      //numberArray2 is the smaller number and is out of numbers            

      // check until first array end + carry for more carries
      if (Number(number1Array[number1Array.length - i]) + currentCarry > 9) {
        currentCarry = 1;
        numberOfCarries++;        
      } else {
        currentCarry = 0;
      }
    }
    // have both numbers to be summed 
    else if (Number(number1Array[number1Array.length - i]) + Number(number2Array[number2Array.length -i]) + currentCarry > 9) {            
      currentCarry = 1;
      numberOfCarries ++;
    } else {
      currentCarry = 0;
    }
  }
  
  return numberOfCarries;
}

// Space - O(n)
// Time - O(n)
console.log('res = ', numCarries(num1,num2));