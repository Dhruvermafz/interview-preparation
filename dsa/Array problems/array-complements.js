// returns things in array "a" that are not in array "b"
//["a", "b", "c", "1", "2", "3"].complement(["b", "c", "d", "e"])

const complements = (arr1, arr2) => {
  return Array.isArray(arr1) && Array.isArray(arr2)
    ? arr1.filter((el) => arr2.indexOf(el) === -1)
    : undefined;
};

let arr1 = ["a", "b", "c", "1", "2", "3"];
let arr2 = ["b", "c", "d", "e"];

console.log(complements(arr1, arr2));
