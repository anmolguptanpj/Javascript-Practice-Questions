
## 🧩 **BASIC LEVEL (4 Questions)**

1. **String Capitalizer (repeat)**
   Create a function `capitalizeWords(sentence)` that capitalizes the first letter of each word.
   Example: `"hello world"` → `"Hello World"`

2. **Even-Odd Sorter**
   Given an array of integers, separate even and odd numbers into two arrays.
   Example: `[1,2,3,4,5]` → `{ even: [2,4], odd: [1,3,5] }`

3. **Find Maximum Number**
   Write a function `findMax(arr)` that returns the maximum value without using `Math.max()`.

4. **Word Reverser**
   Reverse the order of words in a string without reversing the words themselves.
   Example: `"learn javascript fast"` → `"fast javascript learn"`

---

## ⚙️ **INTERMEDIATE LEVEL (4 Questions)**

5. **Unique Array Filter (repeat)**
   Create a function `uniqueElements(arr)` that removes duplicates from an array.

6. **Inventory Manager**
   Given an array of items with `name`, `price`, `quantity`, calculate total stock value.
   Example:
   `[{name:'pen',price:10,quantity:2},{name:'book',price:20,quantity:1}]` → `40`

7. **Time Converter**
   Convert total minutes into `hours` and `minutes`.
   Example: `125` → `"2 hours 5 minutes"`

8. **Simple BMI Calculator**
   Write a function `calculateBMI(weight, height)` returning a health category: Underweight, Normal, Overweight.

---

## 🚀 **ADVANCED LEVEL (4 Questions)**

9. **Debounce Function (repeat)**
   Implement `debounce(func, delay)` to delay execution until typing stops for the specified time.

10. **Retry Promise Function**
    Write `retryPromise(fn, retries)` that retries a failing promise up to `n` times.

11. **Task Runner**
    Given an array of async tasks, execute them one after another using `async/await`.

12. **Deep Object Comparison**
    Write a function `deepEqual(obj1, obj2)` that compares two objects deeply for equality.

---

## 💡 **PRO LEVEL (4 Questions)**

13. **Throttling Function**
    Implement a `throttle(func, limit)` that restricts a function from executing more than once in a time period.

14. **Memoization Utility**
    Build a `memoize(fn)` that caches results for previously computed inputs.

15. **Custom Event Emitter (repeat)**
    Create an `EventEmitter` class with `on()`, `emit()`, and `off()` to manage custom events.

16. **Promise Pool Manager**
    Run multiple promises concurrently but with a maximum concurrency limit (`promisePool(tasks, limit)`).

---

## ⚛️ **REACT LEVEL (4 Questions)**

17. **To-Do App Component**
    Build a React component that can add, delete, and mark tasks complete using `useState()`.

18. **Custom Hook for Fetch**
    Create a custom hook `useFetch(url)` that fetches data and returns `{ data, loading, error }`.

19. **Search Input with Debounce (repeat)**
    Implement a search input that delays API calls using a custom debounce hook.

20. **Dark/Light Theme Toggle**
    Use React Context API to manage a global theme state and toggle it with a button.

---

## ⚙️ **EXPRESS LEVEL (4 Questions)**

21. **CRUD API**
    Build Express routes for a resource `/tasks`:

* `GET /tasks` – list all
* `POST /tasks` – add
* `PUT /tasks/:id` – update
* `DELETE /tasks/:id` – remove

22. **Middleware Logger**
    Write a middleware function that logs each incoming request’s method, URL, and timestamp.

23. **Error Handler Middleware**
    Create a centralized error-handling middleware that catches errors and sends structured JSON responses.

24. **JWT Authentication (repeat)**
    Implement user login that issues JWT tokens and protects a route `/dashboard` using token verification.

---

## 🗄️ **DATABASE METHODS LEVEL (1 Problem)**

25. **Employee Analytics Query (MongoDB)**
    Design a MongoDB query (or aggregation) that returns:

* All employees with salary > 50000
* Sorted by department, and
* Shows total employees per department

Bonus: Write a version that uses `aggregate()` with `$match`, `$group`, and `$sort`.

