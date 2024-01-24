// Count minimum reversal to make brackets balanced.

// To count the minimum number of bracket reversals needed to make a set of brackets balanced, you can follow these steps:

// 1. Initialize a stack to keep track of the brackets.

// 2. Iterate through the given string containing brackets, from left to right.

// 3. For each opening bracket ('('), push it onto the stack.

/** 4. For each closing bracket (')'), check the top of the stack:
   a. If the stack is empty, this closing bracket is unbalanced. Push it onto the stack.
   b. If the top of the stack is an opening bracket, pop it from the stack, as it matches with the current closing bracket.
   c. If the top of the stack is a closing bracket, push the current closing bracket onto the stack.

5. After processing all the brackets in the string, the stack will contain unbalanced brackets (if any).

6. Count the number of opening and closing brackets left in the stack:
   a. If there are an even number of unbalanced brackets in the stack, each pair can be reversed to make them balanced. So, the minimum number of reversals required is half of the number of unbalanced brackets in the stack.
   b. If there are an odd number of unbalanced brackets in the stack, you will need at least one reversal, as you cannot pair them up. The minimum number of reversals required is (number of unbalanced brackets - 1) / 2 + 1. **/

// Here is a Python function to implement this algorithm:

// ```python
// def minBracketReversals(brackets):
//     stack = []
//     for bracket in brackets:
//         if bracket == '(':
//             stack.append(bracket)
//         elif bracket == ')':
//             if stack and stack[-1] == '(':
//                 stack.pop()
//             else:
//                 stack.append(bracket)

//     unbalanced_count = len(stack)

//     if unbalanced_count % 2 == 0:
//         return unbalanced_count // 2
//     else:
//         return (unbalanced_count - 1) // 2 + 1

// # Example usage:
// brackets = "}}}}{{{{"
// min_reversals = minBracketReversals(brackets)
// print("Minimum reversals required:", min_reversals)
// ```

// Replace the `brackets` variable with your input string of brackets to find the minimum number of reversals needed to balance the brackets.

function minBracketReversals(brackets) {
  const stack = [];

  for (const bracket in brackets) {
    if (bracket === "(") {
      stack.push(bracket);
    } else if (bracket === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    }
  }

  const unbalancedCount = stack.length;

  if (unbalancedCount % 2 === 0) {
    return unbalancedCount / 2;
  } else {
    return Math.floor((unbalancedCount - 1) / 2) + 1;
  }
}

const brackets = "))))((((";
const minReversals = minBracketReversals(brackets);
console.log("Minimum reversals required: ", minReversals);
