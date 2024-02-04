/*https://leetcode.com/problems/remove-element/description/

Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.*/

/*My solution steps - First read about in-place Algo ( https://en.wikipedia.org/wiki/In-place_algorithm )

Basically, under this algo, a small amount of extra storage space is allowed for auxiliary variables (which in this case is the variable 'tmp')

A> Create two pointers from beginning and end ( the variables head and tail in this code)

A> Take the first element of the array (i.e. index starting with 0) and compare it to the given "val"

B> If it matches, do the following

	(i) Swap the value of head with the tail. This is because, I want moved the matched value to the end of the array, and then reduce tail by doing tail-- So I can completely ignore that matched value for all my future calculations. Effectively I have removed the matched valued.

	(ii) Decrement tail by one. Because, when there's a match, I am removing that particular element from the Array fully, i.e. removing it from all counting. Which means I have to reduce the numerical index value of (nums.length - 1) by one.

	Also, with the swapping code, I have already swapped the original value of tail by assigning it to head. So, decrementing tail will have no impact on the comparisons to be made for the next iteration, as that matched valued needs to be effectively taken out of scene completely.

C> Else, if it DOES NOT match, increment the value of head by 1, and then compare the second element of the array with the given "val".
So, for each non-matching character (with the given 'value') - I am incrementing 'head' by one. Meaning, at the end of the array the final value of 'head' will be my length of array.

E> Do this loops till the last element of the array
*/

var removeElement = function (nums, val) {
  var head = 0;
  var tail = nums.length - 1;

  while (head <= tail) {
    if (nums[head] === val) {
      var temp = nums[head];
      nums[head] = nums[tail];
      nums[tail] = temp;
      tail--;
    } else {
      head++;
    }
  }
  return head;
};

console.log(removeElement([3, 2, 4, 5, 32, 2], 2));
