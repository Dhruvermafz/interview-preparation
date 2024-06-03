// remove duplicates

function replace(sentence, character, index) {
  return sentence.substr(0, index) + character + sentence.substr(index + 1);
}
