function trailingZeros(n) {
  //your JS code here. If required.
	 let count = 0;

    // Keep dividing n by powers of 5 and update the count
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }

    return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
