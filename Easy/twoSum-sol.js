function twoSum(nums, target) {
    const comp = new Map();
    for(let i=0; i<nums.length; i++) {
      if(comp[nums[i]] >= 0){ //found the pair
        return [comp[nums[i]], i];
      }
      comp[target - nums[i]] = i;
    }
    return [-1, -1];
  }
  
  exports.solution = twoSum;