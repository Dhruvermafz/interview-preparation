function longestWord(str) {
  let words = str.split(" ");
  let longestWord = words.sort(function (a, b) {
    return b.length - a.length;
  });

  return longestWord[0].length;
}

console.log(
  longestWord(
    "Barbenheimer is an Internet phenomenon that began circulating on social media before the simultaneous theatrical release of two blockbuster films, Barbie and Oppenheimer, on July 21, 2023, in the United States and some other countries."
  )
);
