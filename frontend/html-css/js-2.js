// write a js program to get the extension of a file name

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));
