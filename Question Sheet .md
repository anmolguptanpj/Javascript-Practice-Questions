https://chatgpt.com/share/68f23318-c0d8-8003-a3c0-b1423d185499



1. String Formatter

You are building a name card generator.
Given two strings firstName and lastName, write a function that returns a properly formatted name with the first letter capitalized and the rest in lowercase.
Example:
formatName("aNMoL", "guPTa") ➜ "Anmol Gupta"

2. Tip Calculator

A restaurant bill totals ₹945.
Write a JavaScript function calculateTip(billAmount, tipPercent) that returns the total amount after adding the tip.
Example:
calculateTip(945, 10) ➜ 1039.5

3. Odd or Even Counter

You are writing a feature for a small math learning app.
Write a function countOddEven(arr) that returns how many odd and even numbers are in an array.
Example:
countOddEven([1,2,3,4,5]) ➜ { odd: 3, even: 2 }

4. Login Validator

Create a small login validation function isValidUser(username, password) which returns true only if both username and password are non-empty strings and the password has at least 8 characters.
Example:
isValidUser("anmol", "secret123") ➜ true

⚙️ INTERMEDIATE LEVEL (4 Questions)
5. Word Frequency Counter

You are building a small analytics tool.
Given a paragraph of text, write a function wordFrequency(str) that counts how often each word appears.
Example:
wordFrequency("hello world hello") ➜ { hello: 2, world: 1 }

6. Unique Cart Items

In an e-commerce site, users can accidentally add the same item twice.
Given an array of item names, write a function uniqueCart(items) that removes duplicates.
Example:
uniqueCart(["apple", "banana", "apple"]) ➜ ["apple", "banana"]

7. Find Missing Number

You are debugging a student grading system.
You have roll numbers from 1 to 10, but one number is missing.
Write a function findMissing(nums) that finds the missing number.
Example:
findMissing([1,2,3,5,6,7,8,9,10]) ➜ 4

8. Countdown Timer

Write a function countdown(seconds) that prints numbers decreasing every second in the console until it reaches 0.
(Use setInterval and clearInterval.)
Example:
countdown(5) ➜ Logs: 5, 4, 3, 2, 1, 0

🚀 ADVANCED LEVEL (4 Questions)
9. Debounce Function

You are making a search input where API calls should happen only after the user stops typing for 500ms.
Write a custom debounce(func, delay) utility and demonstrate its use with a searchHandler() function.

10. Promises & Fetch

You are fetching data from a fake API (https://jsonplaceholder.typicode.com/users).
Write a function getUsers() that uses async/await to fetch data and log all user names.

11. Local Storage Sync

Design a small utility saveNoteToLocalStorage(noteId, noteData) that:

Saves the note object in localStorage under the noteId

Retrieves and parses it when called again
Simulate it with 2 notes.

12. Custom Array Methods

Implement a custom version of JavaScript’s Array.prototype.map() called myMap().
It should take a callback and return a new array after applying that callback to each element.
Example:

[1,2,3].myMap(x => x * 2) ➜ [2,4,6]
