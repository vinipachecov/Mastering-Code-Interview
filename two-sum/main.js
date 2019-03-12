/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
obj = {
7: 0
}
*/
var twoSum = function(nums, target) {
  const table = {};
//     loop over the array
  for(let i = 0; i < nums.length; i++) {
      // check for past values 
      // that could add to the target              
      if (table[nums[i]] !== undefined) {                   
          return [table[nums[i]], i ];                                    
      } else {        
          table[target - nums[i]] = i;
      }
  }    
};

console.log(twoSum([2,7,11,15], 9));