//Easy level

// class Product {
//     #name;
//     #price;
//     #stock;



//     constructor(name,price,stock){
//         this.#name = name;
//         this.#price= price;
//         this.#stock= stock;
//     }


//     // Method to sell products

//     sell(quantity){
//         if(quantity<=0){
//             console.log("Invalid quantity")
//             return;
//         }
//         if(quantity>this.#stock){
//             console.log(`X Not enough stock! only ${this.#stock} left.`)
//         } else {
//             this.#stock -= quantity;
//             console.log(`Sold ${quantity} ${this.#name}(s).Remaining Stock: ${this.#stock}`)
//         }
//     }


//     //Method to restock
//     restock(quantity){
//         if(quantity <= 0) {
//             console.log("Invalid quanity");
//             return;
//         }
//         this.#stock += quantity;
//         console.log(`Restocked ${quantity} ${this.#name}(s). Total Stock:#stock`);
//         return;
//     }


//     // optional getter for viewing details

//     getDetails(){
//         return {
//             name:this.#name,
//             price:this.#price,
//             stock:this.#stock
//         };
//     }
// }

// const product1 = new Product("Iphone",115000,250)

// console.log(product1.sell(250))
// console.log(product1.restock(25))
// console.log(product1.getDetails())


class Customer{


        constructor(name,credit,debit,type,date,balance,transaction){
            this.name = name
            this.credit = credit
            this.type = type
            this.date = date 
            this.balance=balance
            this.debit= debit
            this.credit= credit

        }
}