async function dhruv() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 1");
    }, 2000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data 2");
    }, 7000);
  });
  //   p1.then(alert);
  //   p2.then(alert);
  console.log("Fetching....");
  let store1 = await p1;
  console.log("fetched" + store1);
  console.log("Fetching....");
  let store2 = await p2;
  console.log("fetched" + store2);
  return [store1, store2];
}

console.log("yups");
let a = dhruv();
a.then((value) => {
  console.log(value);
});
