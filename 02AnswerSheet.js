
// Q1

// function titleCase(firstname,lastname){
//     const x = firstname;
//     const y = lastname;
//     return`${(x[0].toUpperCase())+x.slice(1).toLowerCase()} ${(y[0].toUpperCase())+y.slice(1).toLowerCase()}`
    

// }

// console.log(titleCase("aNMOL","gUPta")

// )



//Q2


// function temperatureConverter (){
//     let temperature = prompt("Enter valid temperatures")
//     let scale = prompt("Enter Farhenhiet=> 1 and F and  Enter Celsius => C and 0")
//     let t = parseInt(temperature)
//     let s = String(scale || '').trim().toUpperCase()
//     let result;

//     if(s==='C'||s==='O'){
//         result = ((t * 9/5) + 32).toFixed(2)
//         console.log(`${t}C = ${result}F`)
//     }
//     else if (s==='F'||s==='1'){
//         result = ((t - 32) * 5/9).toFixed(2)
//         console.log(`${t}F = ${result}C`)
//     }
//     else{console.log("Please enter :- F or 1 for Farhaeinhiet and C or 0 for Celsius")}

// }


//Q3
// function SimpleInterestCalculator(p,t,r){
//     let SI;
//     SI=(Number(p*t*r/100)).toFixed(2)
//     if(isNaN(SI)){
//         console.log('Eror, PLease only input valid numbers')
//     } else{
//         console.log(`Simple Interest for Rs${p} for ${t} years at ${r}% is Rs${SI}  .`)
//     }
// }

// SimpleInterestCalculator(2000,2,4)


//Q4

// function CountChar(str){
//     let spaces = 0;
//     let vowels=0;
//     str=str.toLowerCase()
//     let consonant=0

//     for (i=0;i<str.length;i++){
//         if(str[i]===" "){
//             spaces+=1
//         } else if (
//             'aeiou'.includes(str[i])
//         ){
//             vowels+=1

//         } else {
//             consonant++
//         }
//     }

//     console.log(spaces,vowels,consonant)
// }

// CountChar("Hello world")



//Q5

// function wordFrequency(paragraph){
//     const cleanText = paragraph.replace(/[.,—-]/g, "").toLowerCase();

//     const words = cleanText.trim().toLowerCase().split(/\s+/)
//     const freq = {}
//     for (let word of words){
//         if(freq[word]>0)
//         {freq[word]=
//             freq[word]+1
//         } else{ freq[word]=1}
//         }
//         console.log(freq)
//     }
//     wordFrequency("Life is a constant journey of growth, change, and discovery. Each day brings new opportunities to learn something valuable, whether from success or failure. The beauty of living lies in the small moments — a smile from a friend, a peaceful sunset, or the quiet strength found in solitude. Challenges test our patience and resilience, but they also shape our character and vision. When we embrace both joy and struggle with an open heart, we begin to understand the deeper meaning of purpose. Ultimately, life is not about perfection, but about progress, compassion, and the courage to keep moving forward.")


//Q6

// function missingNumber(numbers){
//  let n = 10
//  let sum = n*(n+1)/2
//  let actualSum = 0

//  for(let num of numbers){
//     actualSum+= num
//  }
 
//   let missingnum = sum-actualSum
//   console.log(missingnum)
// }

// const rolls = [1,2,3,4,5,6,7,8,10];
// missingNumber(rolls)


//Q8


// function expenseTracker(transactions) {
//     let totalexpense=0;
//     let totalincome=0; 

// for ( let t of transactions){
//     if (t.type==="income"){
//         totalincome+=t.amount
//     } else if(t.type==="expense"){
//         totalexpense+=t.amount
//     } 

// }

// console.log(`Balance remaining = ${totalincome-totalexpense}
// Expenses made = ${totalexpense} 
// Incomes earned = ${totalincome}`)
// }

// // Example usage:
// const data = [
//   { amount: 5000, type: "income" },
//   { amount: 1200, type: "expense" },
//   { amount: 800, type: "expense" },
//   { amount: 3000, type: "income" }
// ];

// expenseTracker(data)


//Q8

// const mov = [
//   { title: "Inception", rating: 8.8 },
//   { title: "Interstellar", rating: 8.6 },
//   { title: "The Dark Knight", rating: 6.5 }
// ]

// const TopratedMovies= movies=>movies.filter(m=>m.rating>8)
// console.log(TopratedMovies(mov))
// console.log(mov)

//Q9
