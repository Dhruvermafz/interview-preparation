"strict mode";
// Function to simulate an asynchronous operation
function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("Operation 1 completed");
    callback();
  }, 1000);
}

function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("Operation 2 completed");
    callback();
  }, 1000);
}

function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("Operation 3 completed");
    callback();
  }, 1000);
}

function asyncOperation4(callback) {
  setTimeout(() => {
    console.log("Operation 4 completed");
    callback();
  }, 1000);
}

// Nesting the callbacks to create callback hell
asyncOperation1(() => {
  asyncOperation2(() => {
    asyncOperation3(() => {
      asyncOperation4(() => {
        console.log("All operations completed");
      });
    });
  });
});
