// Problem Type - Array
// 1480. Running Sum of 1d Array
// Easy

// 942

// 94

// Add to List

// Share
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6
// Accepted
// 233,719
// Submissions
// 261,433

/**** 
Solution In JavaScript
*****/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var sum = 0;
    for(var i = 0; i<nums.length; i++){  
        sum = sum+nums[i];
        nums[i] = sum;
    }
    return nums;
};

/* Submission Result
Runtime: 80 ms, faster than 73.96% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 39 MB, less than 36.30% of JavaScript online submissions for Running Sum of 1d Array.
*/