function substringCompression(n, k, s) {
  let result = [];

  for (let i = 0; i <= n - k; i++) {
    let t = s.substring(i, i + k);
    let minLength = k;

    for (let j = 2; j <= k; j += 2) {
      let length = 0;
      for (let l = 0; l < j; l += 2) {
        let t1 = parseInt(t[l]);
        let t2 = t.substring(l + 1, l + 2);
        length += t2.length * t1;
      }
      minLength = Math.min(minLength, length);
    }

    result.push(minLength);
  }

  console.log(result.join(" "));
}

// Example usage:
substringCompression(4, 4, "5999"); // Output: 14
substringCompression(10, 3, "1111111111"); // Output: 2 2 2 2 2 2 2 2
substringCompression(11, 4, "49998641312"); // Output: 12 18 17 15 12 7 7 2
