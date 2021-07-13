// createAccount()
// deposit()
// withdrawal()
// balanceEnquiry()

class Bank {
    createAccount(account_number, name, balance) {
        this.account_number = account_number;
        this.name = name;
        this.balance = balance;
    }
    deposit(amt) {
        this.balance += amt;
        console.log(`your acc ${this.account_number}has been credited ${amt} blance is ${this.balance}`);
    }
    withdrawal(amt) {
        if (this.balance < amt)
            console.log(`transaction failed insufficient fund`);
        else {
            this.balance -= amt;
            console.log(`ur acc ${this.account_number} debited amount ${amt} ur bal ${this.balance}`);
        }
    }
    balanceEnquiry() {
        console.log(this.balance);
    }
}
var obj1 = new Bank;
obj1.createAccount(10111, 'Rocky', 25000);
obj1.deposit(25000)
obj1.balanceEnquiry()
obj1.withdrawal(50000)