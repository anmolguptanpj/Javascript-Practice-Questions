
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



