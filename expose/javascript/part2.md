1. line 12 will print out 3 because variable i was declared with var, which means line 12 can accessed to variable i. Since the array has length 3, i equal 3 will break out of the for loop and get printed out in line 12 by console.log(i).
2. line 13 will print 150. Because discountedPrice is declared with with var, which mean line 13 can accessed to discountedPrice. After the loop finished, discountedPrice hold the value from the last iteration which was 300 \* (1- 0.5) = 150. Therefore, console.log(discountedPrice) will print 150.

3. line 14 will also print 150, with the same reason as question number 2. finalPrice was declared using var, so it can be accessed throughout the whole function. In the last iteration, finalPrice = Math.round(150 \* 100) / 100 = 150. Therefore, console.log(finalPrice) will print 150.
4. This function will return the discounted array [50,100,150] because each price was calculated using the discount rate 0.5. So we have 100 \* (1 - 0.5) = 50, similarly, with 200 and 300 price would give us 100 and 150.
5. line 12 would give us an error because i was declared with let inside the for loop, which is a block-scoped. Since line 12 is outside of that scope, it wouldn't have access to i, so console.log(i) would give an error.
6. line 13 would also give us an error with same reason as question 5. discountedPrice is declared with let inside the for loop, so line 13 wouldn't have access to it.
7. line 14 would print out 150 because finalPrice was declared with let and can be accessed within discountPrices() block. After the for loop finished, finalPrice = 150, so line 14 will print out 150.
8. This function will return [50,100,150] same reason as question 7. Because discounted was declared using let, so it can be accessed within discountPrices() block. Also, the reason for the return values is the same as how they are calculated in question 4.
9. line 11 would give us an error because i was declared with let inside the for loop. Since line 11 is outside the loop, it wouldn't have access to i.
10. line 12 would print out 3 because length was declared with const on line 4 and can be accessed within the function discountPrice() block. Also, the array has length 3, so console.log(length) would print 3.
11. This function will return [50,100,150], same reason as question 8. Even though it's a const variable, changing the content of the array using push is acceptable.
12. 1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher'].name
    5. student.courseLoad[0]
13. 1. '32' because + will be treated as concat, and a string concat with a number will convert number into a string
    2. 1 because - doesn't have string version, so string 3 will be converted into a number.
    3. 3 because null will converted into same type as number 3 which is number 0
    4. '3null' because null will be converted into the same type as string 3 which is string 'null'
    5. 4 because true will be converted into the same type as number 3 which is number 1 (1 + 3 = 4)
    6. 0 because false and null will both be converted into number 0.
    7. '3undefined' because undefined is converted into same type as string 3, which is string 'undefined'
    8. NaN because it tries to convert both to numbers '3' becomes 3, undefined becomes NaN, and result is NaN
14. 1. true because '2' is converted into number 2 and 2 > 1
    2. false because both '2' and '12' are string, and string '2' comes before string '1' in '12', so '2' < '12' is false
    3. true because == convert string '2' into number 2, and 2 equal 2
    4. false because === check for type and not convert type, since number 2 and string 2 are different types, return false
    5. false because == convert true into number 1, and 1 is not equal 2
    6. true because Boolean(2) is true (all numbers except 0 and NaN are truthy), which is the same type and same value as true
15. == allows type coercion (automatically convert) before comparing, while === is stricter, it requires both value and type to match.
16. answer in part2-question16.js
17. result will be [2,4,6]. First, modifyArray takes in an array [1,2,3] and call doSomething as the callback function. Inside the modify function, it will create a newArr, loop through the array length, and call callback[array[i]] function, which is the doSomething function. doSomething will take i \* 2, then push the value into newArr. Therefore, each value inside array is \_ 2 and be push into newArr, then return the newArr which is [2,4,6]
18. answer in part2-question18.js
19. output: 1 4 3 2. Because line 2 will print out 1, then line 3 will put console.log(2) in waiting queue; 2 will be printed out after 1s. Line 4 will put console.log(3) in waiting queue and print out after 0s. line 5 print out 4. Then after 0s, it continues to print out 3. After 1s, it prints out 2.
