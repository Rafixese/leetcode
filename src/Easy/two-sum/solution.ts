function twoSum(nums: number[], target: number): number[] {
    const mappedNums = new Map<number, number>();

    nums.forEach((value, index) => {
        mappedNums.set(value, index);
    });

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const complementValue = target - currentNumber;

        const complementIndex = mappedNums.get(complementValue)
        if (complementIndex && complementIndex !== i) {
            return [i, complementIndex]
        }
    }
    return new Array<number>;
};

// Example 1
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

// Example 2
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

// Example 3
console.log(twoSum([3, 3], 6)); // Output: [0, 1]

// Example 4
console.log(twoSum([1,3,4,2], 6)); // Output: [2, 3]
