class Customer{
    constructor(name,type){
        this.name=name;
        this.type=type;
        this.balance=0;
        this.debit=0;
        this.credit=0;
        this.transaction="";
        this.history=[]
        
    }

    depositmoney(amount,transaction){
        this.credit=amount;
        this.balance+=amount;
        this.transaction=transaction;
        this.history.push({
            name: this.name,
            amount,
            balance:this.balance,
            date: new Date().toLocaleTimeString(),
            transactiontype:"deposit"
        })
    }


   withdrawmoney(amount,transaction){
        this.debit=amount;
        this.balance-=amount;
        this.transaction=transaction;
        this.history.push({
           name: this.name,
            amount,
            transaction,
            balance:this.balance,
            date:new Date().toLocaleTimeString(),
            transactiontype:"withdrawal"
        })
    }


    getuserdetail(){
     return {
      name: this.name,
      balance: this.balance,
      type: this.type,
    };
    }


    getTransactionhistory(){
        return this.history
    }
}

const anm = new Customer("Anmol Gupta","Savings A/C")
anm.depositmoney(500,"Income earned")
anm.withdrawmoney(200,"snacks")

console.log(anm.getuserdetail())
console.log(anm.getTransactionhistory())