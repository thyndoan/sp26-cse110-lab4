1. line 9 will print: "values added: 20"
2. line 13 will print: "final result: 20"
3. We shouldn't use var in this case because var is function-scoped instead of block-scoped. This means variables declared with var can be accessed even outside of a block (line 13 is outside out block if), which can cause unexpected bugs. It's more correct to use let and const in this case.
4. line 9 will print: "values added: 20"
5. line 13 will give an error because let is block-scoped, so result only exists inside the if block. Line 13 is outside that block, so it can't access the value of result.
6. line 9 will give an error because we are trying to assign different number to result. Since result is declared as const, assigning different number to const variable will give a TypeError. Therefore, line 9 is never reached.
7. Same with line 13, since the error appeared in line 7, line 13 will never be reached. This line will give an error too.
