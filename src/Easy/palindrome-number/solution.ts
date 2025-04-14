function countDigits(n: number): number {
	// We assume n >= 10
	return Math.floor(Math.log10(n)) + 1
}

function getNumberAtIndex(num: number, index:number, length:number) {
	return Math.floor(num / (Math.pow(10, length - index - 1)) % 10)
}

function isPalindrome(x: number): boolean {
	if(x < 0) return false;
	if (x < 10) return true;

	const numberOfDigits = countDigits(x)

	for(let checkedIndexFront = 0; checkedIndexFront < numberOfDigits; checkedIndexFront++) {
		const checkedIndexBack = numberOfDigits - checkedIndexFront - 1
		if (checkedIndexFront === checkedIndexBack) return true; // We are in the middle
		
		const frontNumber = getNumberAtIndex(x, checkedIndexFront, numberOfDigits)
		const backNumber = getNumberAtIndex(x, checkedIndexBack, numberOfDigits)
		if(frontNumber !== backNumber) return false
	}
	
    return true
};

// Example 1
console.log(isPalindrome(121)); // Output: true

// Example 2
console.log(isPalindrome(-121)); // Output: false

// Example 3
console.log(isPalindrome(10)); // Output: false