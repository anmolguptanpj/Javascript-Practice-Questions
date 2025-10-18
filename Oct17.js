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

function countdown(seconds) {
  console.log(seconds); // Print first immediately

  const timer = setInterval(() => {
    seconds--;
    console.log(seconds);

    if (seconds <= 0) { 
      clearInterval(timer);
      console.log("Countdown complete! 🎉");
    }
  }, 1000);
}
 
countdown(5); // ✅ No console.log() wrapper here
