/* http://callbackhell.com/ explains callback hell in very good manner. It’s a situation you get into when you have to call asynchronous code with an asynchronous flow. In simple words, calling callbacks inside each other. Nothing gets broken. It will still work but it becomes messy and difficult to understand what’s going on there. Let’s take an example:

Here I defined a method named addOneTo that takes a number and returns number+1 through a callback. Meaning, that (number + 1) is passed as an argument to the callback and whatever the callback does inside it, is returned from the function as the final output.
This is a simplified example, usually, I/O or time-consuming tasks are done using callbacks. Anyways we defined this method and then called it and got the result through the callback.
*/

addOneToNum = (number, callback) => {
  let result = number + 1;
  if (callback) {
    callback(result);
  }
};
