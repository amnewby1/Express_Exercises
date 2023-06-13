// Calculate the mean of the numbers
function calculateMean(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Calculate the median of the numbers
function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
  const length = numbers.length;
  return length % 2 === 0
    ? (numbers[length / 2 - 1] + numbers[length / 2]) / 2
    : numbers[Math.floor(length / 2)];
}

// Calculate the mode of the numbers
function calculateMode(numbers) {
  const frequencyMap = {};
  numbers.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let mode;
  let maxFrequency = 0;
  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      mode = num;
      maxFrequency = frequencyMap[num];
    }
  }

  return parseInt(mode);
}

module.exports = {
  mean: calculateMean,
  median: calculateMedian,
  mode: calculateMode,
};
