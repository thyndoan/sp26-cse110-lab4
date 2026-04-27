1. The bug: num1 and num2 are strings instead of numbers because they are both obtained by .value which return a string. This will cause + is treated as a concatenation instead of add.
2. I fixed it by convert both num1 and num2 into numbers using Number().
