// Q1



// function formatName (firstname,lastname) {
//     const first = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase()
//     const second = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase()

//     return `${first} ${second}`

// }

// console.log(formatName("aNMoL","guPta"))



//Q2 
// function calculate(Amt,tip){
    
//         const total = Number(Amt + tip/100*Amt)

//       return  isNaN(total) ? "Invalid input" : total 
   
// }

// console.log(calculate(945,10))
// console.log(calculate("Animation","kj"))


//Q3
// const countoddeven = (arr) => {
//      let odd = 0;
//      let even = 0;
//     for (let num of arr ) {
//         if (num%2===0){even+=1}
//         else {odd+=1}
//     }

//     return `[odd :${odd},even:${even}]`
// }

// console.log(countoddeven([2,3,5,8,10]))


//Q4

// const isValidPassword = (username,password)=>{
//     if(username === "" && password ==="") return  false ;
//     return true
// }

// console.log(isValidPassword("anmol","secret123"))

//Q5


// const wordFrequency = (str)=>{
// const words = str.trim().split(' ');
// const freq = {}
// let count = 0
// for (let word of words ){
//    if (freq[word]>0) {freq[word]=freq[word]+1} 
//    else {(freq[word]=1)}
// }
// return freq}


// console.log(wordFrequency("hello world hello"))

//Q6

// const uniqueCart = (items) => [...new Set(items)];
// console.log(uniqueCart(['apple','banana','orange','apple','banana']))

//Q7

// function findMissing(numbers) {

// for (let i=numbers[0];i<numbers[numbers.length-1];i++){
//     if (!numbers.includes(i)) return i
   
    
// }
    
// }

// console.log(findMissing([1,2,3,5,6,7,8,9,10]))


//Q8
// const countdown =(seconds)=>{
//     console.log(seconds);
//     let timer = setInterval(
//         ()=>{
//             seconds--,
//             console.log(seconds);
//             if(seconds<=0){
//                 clearInterval(timer)
//                 console.log("timer completd")
//             }
//         },1000
//     )
   
//     }

// countdown(5)




//Q9

// function debounce(func,delay) {
//     let timer;

//     return function (...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func.apply(this,args);// call func after display
//             },delay)
//     };
// ;}

// function searchHandler(query){
//     console.log("searching for:",query)
    
// }

// const debounceSearch = debounce(searchHandler,500);

// debounceSearch("h");
// debounceSearch("he");
// debounceSearch("hel");
// debounceSearch("hell");
// debounceSearch("hello");


//Q10

// async function getUsers() {
//     try { 
//         const response = await fetch ("https://jsonplaceholder.typicode.com/users");

//         if(!response.ok){
//             throw new Error("Network response was not okay");
            
//         }

//         const users = await response.json();

//         console.log("List of User Names:");
//         users.forEach(users=>console.log(users.name))
//     } catch (error) {
//         console.log("Error fetching users:",error)
//     }
    
// }

// console.log(getUsers())


//Q11

// import fs from "fs";

// const STORAGE_FILE = "./localstorage.json";

// // Read from file
// function readStorage() {
//   if (!fs.existsSync(STORAGE_FILE)) {
//     fs.writeFileSync(STORAGE_FILE, "{}"); // create empty JSON if missing
//   }
//   const data = fs.readFileSync(STORAGE_FILE, "utf-8");
//   return JSON.parse(data || "{}");
// }

// // Write to file
// function writeStorage(data) {
//   fs.writeFileSync(STORAGE_FILE, JSON.stringify(data, null, 2));
// }

// // Save note
// function saveToLocalStorage(noteId, noteData) {
//   const storage = readStorage();       // load current storage
//   storage[noteId] = noteData;          // add or update note
//   writeStorage(storage);               // save changes
//   console.log(`${noteId} got saved`);
// }

// // Retrieve note
// function getFromLocalStorage(noteId) {
//   const storage = readStorage();       // read current storage
//   const note = storage[noteId];
//   if (note) {
//     console.log(`${noteId} retrieved successfully`);
//     console.log(note);
//   } else {
//     console.log(`${noteId} not found`);
//   }
// }

// // Example usage
// saveToLocalStorage("note1", { title: "Hello", body: "This is a test note" });
// getFromLocalStorage("note1");


// Q12

// Array.prototype.myMap = function (callback) {
//     const result = [];

//     for(let i = 0; i< this.length; i++){
//         if(this.hasOwnProperty(i)){
//             result.push(callback(this[i],i,this));
//         }
//     }

//     return result
// };

// const output = [1,2,3].myMap(x=>x*2)
// console.log(output);