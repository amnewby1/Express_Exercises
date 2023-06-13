const { mean, median, mode } = require("./helpers");

describe("Mean Calculation", () => {
  it("calculates the mean of an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const meanValue = mean(numbers);
    expect(meanValue).toBe(3);
  });
});

describe("Median Calculation", () => {
  it("calculates the median of an array of numbers with an odd length", () => {
    const numbers = [1, 3, 5, 7, 9];
    const medianValue = median(numbers);
    expect(medianValue).toBe(5);
  });

  it("calculates the median of an array of numbers with an even length", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const medianValue2 = median(numbers);
    expect(medianValue2).toBe(3.5);
  });
});

describe("Mode Calculation", () => {
  it("calculates the mode of an array of numbers", () => {
    const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    const modeValue = mode(numbers);
    expect(modeValue).toBe(4);
  });
});
