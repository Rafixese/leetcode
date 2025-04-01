using Xunit;
using LeetCode.Problems.Easy;

namespace LeetCode.Tests.Easy
{
    public class TwoSumTest
    {
        [Fact]
        public void TwoSum_ReturnsCorrectIndices_WhenSolutionExists()
        {
            // Arrange
            var nums = new[] { 2, 7, 11, 15 };
            var target = 9;
            var expected = new[] { 0, 1 };
            var twoSum = new TwoSum();

            // Act
            var result = twoSum.Solve(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void TwoSum_ReturnsCorrectIndices_WhenMultipleSolutionsExist()
        {
            // Arrange
            var nums = new[] { 3, 2, 4 };
            var target = 6;
            var expected = new[] { 1, 2 };
            var twoSum = new TwoSum();

            // Act
            var result = twoSum.Solve(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void TwoSum_ReturnsCorrectIndices_WhenDuplicateNumbersAreUsed()
        {
            // Arrange
            var nums = new[] { 3, 3 };
            var target = 6;
            var expected = new[] { 0, 1 };
            var twoSum = new TwoSum();

            // Act
            var result = twoSum.Solve(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void TwoSum_ThrowsException_WhenNoSolutionExists()
        {
            // Arrange
            var nums = new[] { 1, 2, 3 };
            var target = 7;
            var twoSum = new TwoSum();
            var expected = Array.Empty<int>();

            // Act
            var result = twoSum.Solve(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }
    }
}