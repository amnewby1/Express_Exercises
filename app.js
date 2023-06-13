const express = require("express");
const { mean, median, mode } = require("./helpers");
const ExpressError = require("./expressError");

const app = express();
app.use(express.json());

app.get("/mean", function (req, res) {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: "numbers are required" });
  }
  let numbers;
  if (Array.isArray(nums)) {
    numbers = nums;
  } else {
    numbers = nums.split(",").map(Number);
  }
  if (numbers.some(isNaN)) {
    return res
      .status(400)
      .json({ error: `${nums} contains invalid number(s)` });
  }

  const meanValue = mean(numbers);

  res.json({ operation: "mean", value: meanValue });
});

app.get("/median", function (req, res) {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: "numbers are required" });
  }
  let numbers;
  if (Array.isArray(nums)) {
    numbers = nums;
  } else {
    numbers = nums.split(",").map(Number);
  }
  if (numbers.some(isNaN)) {
    return res
      .status(400)
      .json({ error: `${nums} contains invalid number(s)` });
  }

  const medianValue = median(numbers);

  res.json({ operation: "median", value: medianValue });
});

app.get("/mode", function (req, res) {
  const nums = req.query.nums;

  if (!nums) {
    return res.status(400).json({ error: "numbers are required" });
  }
  let numbers;
  if (Array.isArray(nums)) {
    numbers = nums;
  } else {
    numbers = nums.split(",").map(Number);
  }
  if (numbers.some(isNaN)) {
    return res
      .status(400)
      .json({ error: `${nums} contains invalid number(s)` });
  }

  const modeValue = mode(numbers);

  res.json({ operation: "mode", value: modeValue });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
