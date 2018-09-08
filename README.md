<<<<<<< HEAD
# First-Class Functions Lab

## Objectives
1. Invoke functions assigned to a variable.
2. Invoke functions stored in a data structure.
3. Write functions that return other functions.
4. Pass a function to another function.
5. Call a function returned by another function.

## Introduction
Functions are a very important part of JavaScript, and you will use them all the time. Without functions, we wouldn't get anything done! In this lab, we'll take a look at how we can use functions as first-class objects to pass them around, store them in variables and data structures, and return them from other functions.

+ `returnFirstTwoDrivers()` — Declare a variable with `const` that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the **first** two drivers in the array.
+ `returnLastTwoDrivers()` — Declare a variable with `const` that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the **last** two drivers in the array.
+ `selectingDrivers` — This is an array containing two elements: the two functions that we previously defined (`returnFirstTwoDrivers()` and `returnLastTwoDrivers()`).
+ `createFareMultiplier()` — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If `createFareMultiplier()` receives an argument of `4`, it will return a function that takes in a fare as an argument and quadruples the fare.
+ `fareDoubler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in such a way that the new `fareDoubler()` function accepts a fare as its lone argument and doubles it.
+ `fareTripler()` — Declare a variable with `const` and assign a function returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in such a way that the new `fareTripler()` function accepts a fare as its lone argument and triples it.
+ `selectDifferentDrivers()` — This function takes two arguments, an array of `drivers` and either the `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` function. Based on these two arguments, `selectDifferentDrivers()` will return either the first two drivers or the last two drivers.

## Resources
- [Wikipedia: First-class function](https://en.wikipedia.org/wiki/First-class_function)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [JavaScript is Sexy: Higher-Order Functions](http://javascriptissexy.com/tag/higher-order-functions/)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-advanced-functions-first-class-functions-lab'>First-Class Functions Lab</a> on Learn.co and start learning to code for free.</p>
=======
# First-Class Functions Practice Lab

## Objectives
1. Practice using forEach
2. Practice using sort
3. Practice using reduce

## Instructions
Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve.

You'll be writing six functions:
* `logDriverNames()` — Receives an array of `driver` objects and logs the `name` attribute of each `driver` to the console.
* `logDriversByHometown()` — Receives an array of `driver` objects as the first argument and a location as the second argument. The function logs to the console the `name` attribute of each `driver` whose hometown matches the string passed in as the 'location' argument.
* `driversByRevenue()` — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `revenue` attribute from lowest to highest.
* `driversByName()` — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `name` attribute from A to Z. Here, you may have to use the [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method.
* `totalRevenue()` — Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.
* `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.

## Resources
- [MDN: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN: Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN: Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<p class='util--hide'>View <a href='https://learn.co/lessons/js-advanced-first-class-functions-practice-lab'>First-Class Functions Practice Lab</a> on Learn.co and start learning to code for free.</p>
>>>>>>> e4178a3e74e001caaf1dc26a66b9b905cb942545
