var number = prompt("ENTER THE NUMBER");

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}

console.log(even_or_odd(number));
