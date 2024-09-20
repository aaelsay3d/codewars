let findAverage = function (nums) {
  let sum = 0;
  let length = nums.length;
  for (let i = 0; i < length; i++){
    sum += nums[i];
  } return sum / length;
}
