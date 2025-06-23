const jSQuestions = [
  {
    question: "How do you create an empty array in JavaScript?",
    options: ["var arr = {};", "var arr = [];", "var arr = new Object();"],
    correct: 1, // Using square brackets
  },
  {
    question:
      "What is the correct way to access the first element of an array?",
    options: ["arr[1]", "arr[0]", "arr.first()"],
    correct: 1, // Arrays are zero-indexed
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["arr.add()", "arr.append()", "arr.push()"],
    correct: 2, // push() method
  },
  {
    question: "What does the length property of an array return?",
    options: [
      "The last element of the array",
      "The number of elements in the array",
      "The memory size of the array",
    ],
    correct: 1, // Number of elements
  },
  {
    question: "Which method removes the last element from an array?",
    options: ["arr.pop()", "arr.remove()", "arr.delete()"],
    correct: 0, // pop() method
  },
  {
    question: "How do you add an element to the beginning of an array?",
    options: ["arr.unshift()", "arr.prepend()", "arr.addFirst()"],
    correct: 0, // unshift() method
  },
  {
    question: "Which method removes the first element from an array?",
    options: ["arr.removeFirst()", "arr.shift()", "arr.pop()"],
    correct: 1, // shift() method
  },
  {
    question: "What will arr[10] return if the array has only 5 elements?",
    options: ["null", "undefined", "0"],
    correct: 1, // undefined for non-existent indices
  },
  {
    question: "How do you check if a variable is an array?",
    options: [
      "typeof arr === 'array'",
      "Array.isArray(arr)",
      "arr instanceof Object",
    ],
    correct: 1, // Array.isArray() method
  },
  {
    question: "Which method joins all elements of an array into a string?",
    options: ["arr.join()", "arr.toString()", "Both A and B"],
    correct: 2, // Both methods work
  },
  {
    question:
      "What does the indexOf() method return if the element is not found?",
    options: ["0", "-1", "null"],
    correct: 1, // Returns -1 when not found
  },
  {
    question: "How do you create an array with 5 empty slots?",
    options: ["new Array(5)", "Array(5)", "Both A and B"],
    correct: 2, // Both create array with 5 empty slots
  },
  {
    question:
      "Which method creates a new array with all elements that pass a test?",
    options: ["arr.filter()", "arr.find()", "arr.search()"],
    correct: 0, // filter() method
  },
  {
    question: "What does the slice() method do?",
    options: [
      "Removes elements from an array",
      "Returns a copy of a portion of an array",
      "Splits an array into multiple arrays",
    ],
    correct: 1, // Returns shallow copy of portion
  },
  {
    question:
      "Which method modifies the original array by removing/adding elements?",
    options: ["arr.slice()", "arr.splice()", "arr.split()"],
    correct: 1, // splice() modifies original
  },
  {
    question: "How do you reverse the elements in an array?",
    options: ["arr.reverse()", "arr.backwards()", "arr.flip()"],
    correct: 0, // reverse() method
  },
  {
    question: "Which method sorts the elements of an array?",
    options: ["arr.order()", "arr.sort()", "arr.arrange()"],
    correct: 1, // sort() method
  },
  {
    question: "What does the concat() method do?",
    options: [
      "Combines two or more arrays",
      "Converts array to string",
      "Counts array elements",
    ],
    correct: 0, // Combines arrays
  },
  {
    question: "How do you find the last index of an element in an array?",
    options: ["arr.indexOf()", "arr.lastIndexOf()", "arr.findLast()"],
    correct: 1, // lastIndexOf() method
  },
  {
    question: "Which method executes a function for each array element?",
    options: ["arr.forEach()", "arr.each()", "arr.loop()"],
    correct: 0, // forEach() method
  },
  {
    question: "What does the map() method return?",
    options: [
      "The original array modified",
      "A new array with transformed elements",
      "The first matching element",
    ],
    correct: 1, // Returns new array with results
  },
  {
    question: "How do you check if an array includes a specific element?",
    options: ["arr.contains()", "arr.includes()", "arr.has()"],
    correct: 1, // includes() method
  },
  {
    question: "What is the syntax to access the last element of an array?",
    options: ["arr[arr.length]", "arr[arr.length - 1]", "arr.last()"],
    correct: 1, // length - 1 for last index
  },
  {
    question:
      "Which method finds the first element that satisfies a condition?",
    options: ["arr.find()", "arr.search()", "arr.locate()"],
    correct: 0, // find() method
  },
  {
    question: "What does the some() method return?",
    options: [
      "Some elements of the array",
      "True if at least one element passes the test",
      "The number of matching elements",
    ],
    correct: 1, // Returns boolean
  },
  {
    question: "Which method tests if all elements pass a condition?",
    options: ["arr.all()", "arr.every()", "arr.check()"],
    correct: 1, // every() method
  },
  {
    question: "How do you create an array from a string?",
    options: ["string.split()", "Array.from(string)", "Both A and B"],
    correct: 2, // Both methods work
  },
  {
    question: "What does the reduce() method do?",
    options: [
      "Reduces array size",
      "Executes a reducer function and returns single value",
      "Removes duplicate elements",
    ],
    correct: 1, // Reduces to single value
  },
  {
    question: "How do you copy an array in JavaScript?",
    options: ["arr.copy()", "[...arr] or arr.slice()", "arr.clone()"],
    correct: 1, // Spread operator or slice
  },
  {
    question: "What is the result of [1, 2, 3].toString()?",
    options: ["'[1,2,3]'", "'1,2,3'", "'123'"],
    correct: 1, // Comma-separated string
  },
  {
    question: "Which method removes duplicate values from an array?",
    options: ["arr.unique()", "There's no built-in method", "arr.distinct()"],
    correct: 1, // No built-in method, need custom solution
  },
  {
    question: "How do you check if an array is empty?",
    options: ["arr.length == 0", "arr.isEmpty()", "arr == []"],
    correct: 0, // Check length property
  },
  {
    question: "What does Array.from() do?",
    options: [
      "Creates array from array-like objects",
      "Copies an existing array",
      "Both A and B",
    ],
    correct: 2, // Can do both
  },
  {
    question: "How do you flatten a nested array one level deep?",
    options: ["arr.flat()", "arr.flatten()", "arr.merge()"],
    correct: 0, // flat() method
  },
  {
    question: "What is the difference between null and undefined in an array?",
    options: [
      "They are the same",
      "null is assigned, undefined means no value exists",
      "undefined is assigned, null means no value exists",
    ],
    correct: 1, // null is explicit, undefined is default
  },
  {
    question:
      "Which method finds the index of the first element that satisfies a condition?",
    options: ["arr.findIndex()", "arr.searchIndex()", "arr.locateIndex()"],
    correct: 0, // findIndex() method
  },
  {
    question:
      "What happens when you assign a value to arr[100] in a 5-element array?",
    options: [
      "Error occurs",
      "Array grows to 101 elements with empty slots",
      "Only the first 5 elements remain",
    ],
    correct: 1, // Array grows with empty slots
  },
  {
    question: "How do you convert an array to JSON string?",
    options: ["arr.toJSON()", "JSON.stringify(arr)", "arr.toString()"],
    correct: 1, // JSON.stringify method
  },
  {
    question: "What does the fill() method do?",
    options: [
      "Fills empty slots in an array",
      "Changes all elements to a static value",
      "Adds elements to fill a specific length",
    ],
    correct: 1, // Changes elements to static value
  },
  {
    question:
      "Which is the correct way to declare an array with initial values?",
    options: [
      "var arr = [1, 2, 3];",
      "var arr = new Array(1, 2, 3);",
      "Both A and B",
    ],
    correct: 2, // Both are correct
  },
  {
    question: "What does the keys() method return?",
    options: [
      "Array of all values",
      "Array iterator of indices",
      "Array of key-value pairs",
    ],
    correct: 1, // Iterator of indices
  },
  {
    question: "How do you insert an element at a specific position?",
    options: [
      "arr.insert(index, element)",
      "arr.splice(index, 0, element)",
      "arr.add(index, element)",
    ],
    correct: 1, // Using splice with 0 deleteCount
  },
  {
    question: "What is the maximum length of an array in JavaScript?",
    options: ["1000 elements", "2^32 - 1 elements", "Unlimited"],
    correct: 1, // 2^32 - 1 maximum
  },
  {
    question:
      "Which method creates a string by concatenating array elements with a separator?",
    options: [
      "arr.join(separator)",
      "arr.concat(separator)",
      "arr.merge(separator)",
    ],
    correct: 0, // join() method
  },
  {
    question: "What does arr.length = 0 do?",
    options: ["Does nothing", "Empties the array", "Causes an error"],
    correct: 1, // Empties the array
  },
  {
    question: "How do you get all values from an array?",
    options: ["arr.values()", "arr.getValues()", "Just iterate through arr"],
    correct: 2, // Direct iteration or values() method
  },
  {
    question: "What is the result of [1, 2] + [3, 4]?",
    options: ["[1, 2, 3, 4]", "'1,23,4'", "Error"],
    correct: 1, // String concatenation occurs
  },
  {
    question: "Which method removes elements based on a condition?",
    options: [
      "arr.removeIf()",
      "arr.filter() returns new array",
      "arr.delete()",
    ],
    correct: 1, // filter creates new array without elements
  },
  {
    question: "How do you create a multidimensional array?",
    options: [
      "var arr = [[1,2], [3,4]];",
      "var arr = new Array(2,2);",
      "var arr = Array.multi(2,2);",
    ],
    correct: 0, // Nested array literals
  },
  {
    question: "What does the entries() method return?",
    options: [
      "Array of values",
      "Iterator of [index, value] pairs",
      "Array of indices",
    ],
    correct: 1, // Iterator of key-value pairs
  },
  {
    question: "How do you compare two arrays for equality?",
    options: [
      "arr1 == arr2",
      "arr1 === arr2",
      "JSON.stringify(arr1) === JSON.stringify(arr2)",
    ],
    correct: 2, // Need deep comparison method
  },
  {
    question: "What happens with arr.push(arr.pop())?",
    options: [
      "Array remains unchanged",
      "Last element is duplicated",
      "Array becomes empty",
    ],
    correct: 0, // Removes last then adds it back
  },
  {
    question:
      "Which method creates a new array by calling a function on every element?",
    options: ["arr.transform()", "arr.map()", "arr.apply()"],
    correct: 1, // map() method
  },
  {
    question: "How do you find the minimum value in a numeric array?",
    options: ["arr.min()", "Math.min(...arr)", "arr.minimum()"],
    correct: 1, // Using spread with Math.min
  },
  {
    question: "What does the copyWithin() method do?",
    options: [
      "Creates a copy of the array",
      "Copies elements within the same array to another position",
      "Copies elements from another array",
    ],
    correct: 1, // Copies within same array
  },
  {
    question: "How do you remove a specific element by value?",
    options: [
      "arr.remove(value)",
      "arr.splice(arr.indexOf(value), 1)",
      "delete arr[value]",
    ],
    correct: 1, // Find index then splice
  },
  {
    question:
      "What is the difference between delete arr[i] and arr.splice(i,1)?",
    options: [
      "No difference",
      "delete leaves empty slot, splice removes completely",
      "splice leaves empty slot, delete removes completely",
    ],
    correct: 1, // delete creates hole, splice removes
  },
  {
    question:
      "Which method returns a new array with elements in reverse order?",
    options: [
      "arr.reverse() creates new array",
      "arr.slice().reverse()",
      "arr.backward()",
    ],
    correct: 1, // Need to copy first, then reverse
  },
  {
    question: "How do you convert array elements to uppercase?",
    options: [
      "arr.toUpperCase()",
      "arr.map(item => item.toUpperCase())",
      "arr.upper()",
    ],
    correct: 1, // Use map with toUpperCase
  },
  {
    question: "What does Array.of() do?",
    options: [
      "Creates array from arguments",
      "Same as new Array()",
      "Creates empty array",
    ],
    correct: 0, // Creates array from arguments
  },
  {
    question: "How do you check if at least one element is greater than 10?",
    options: [
      "arr.some(x => x > 10)",
      "arr.any(x => x > 10)",
      "arr.check(x => x > 10)",
    ],
    correct: 0, // some() method
  },
  {
    question: "What is the result of new Array(3).fill(0)?",
    options: ["[0, 0, 0]", "[3, 0]", "undefined"],
    correct: 0, // Array of 3 zeros
  },
  {
    question: "How do you get the sum of all elements in a numeric array?",
    options: ["arr.sum()", "arr.reduce((a, b) => a + b, 0)", "arr.total()"],
    correct: 1, // Using reduce method
  },
  {
    question: "Which method removes all elements from an array?",
    options: ["arr.clear()", "arr.length = 0 or arr.splice(0)", "arr.empty()"],
    correct: 1, // Set length to 0 or splice all
  },
  {
    question: "What does the flatMap() method do?",
    options: [
      "Maps then flattens one level",
      "Only flattens the array",
      "Only maps the array",
    ],
    correct: 0, // Combines map and flat
  },
  {
    question: "How do you create an array of numbers from 1 to 5?",
    options: [
      "Array.range(1, 5)",
      "Array.from({length: 5}, (_, i) => i + 1)",
      "[1, 2, 3, 4, 5]",
    ],
    correct: 2, // Direct literal is simplest
  },
  {
    question: "What happens when you call push() on a non-array?",
    options: [
      "It works if object has length property",
      "Always throws an error",
      "Converts to array first",
    ],
    correct: 1, // TypeError occurs
  },
  {
    question:
      "Which method is best for checking if array contains object with specific property?",
    options: [
      "arr.includes()",
      "arr.some(item => item.property === value)",
      "arr.contains()",
    ],
    correct: 1, // some() with condition
  },
  {
    question: "How do you sort an array of numbers correctly?",
    options: ["arr.sort()", "arr.sort((a, b) => a - b)", "arr.numericalSort()"],
    correct: 1, // Need compare function for numbers
  },
  {
    question: "What is array destructuring?",
    options: [
      "Removing elements from array",
      "const [a, b] = array syntax",
      "Breaking array into pieces",
    ],
    correct: 1, // Destructuring assignment syntax
  },
];
