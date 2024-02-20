// both .then and .catch will return a new promise

let promise1 = new Promise((resolve, reject) => {
  reject();
});

promise1
  .then(() => {
    console.log("Hey I'm in relationship, so im finished looking for love.");
  })
  .catch(() => {
    console.log("Hey I'm rejected by my crush, so i'll hit on everyone now.");
  });

let promise2 = new Promise((resolve, reject) => {
  resolve();
});

promise2
  .then(() => {
    console.log("Hey Im done with love, meri wali saap hai.");
  })
  .catch(() => {
    console.log(
      "Hey dude wo saap to hai but dasti ni hai, but im done with love."
    );
  });
