class Bank {
    status = 0;
    accounts = {
        1000: { account_number: 1000, name: "ajay", balance: 15000, username: 1000, password: "userone" },
        1001: { account_number: 1001, name: "vjay", balance: 25000, username: 1001, password: "usertwo" },
        1002: { account_number: 1002, name: "ram", balance: 35000, username: 1002, password: "userthree" },
        1003: { account_number: 1003, name: "ravi", balance: 45000, username: 1003, password: "userfour" }
    }

    getAccountDetails() {

        return this.accounts
    }
    authenticate(username, pwd) {
        let account_details = this.accounts
        if (username in account_details) {
            if (pwd == account_details[username]["password"]) {
                this.status = 1; // if loged in sucess then status value will change to 1
                return username;
            }
            else {

                return -1
            }
        }
        else {
            return 0
        }
    }

    balanceEnquiry(account_number) {

        if (this.status == 1) {
            return this.accounts[account_number]["balance"]
        }
        else {
            return "invalid session"
        }
    }

    fundTransfer(fromAccount, toAccount, amount) {

        if (this.status == 1) {

            let balance = this.balanceEnquiry(fromAccount)
            if (balance >= amount) {
                if (toAccount in this.accounts) {

                    this.accounts[fromAccount]["balance"] -= amount;
                    this.accounts[toAccount]["balance"] += amount;

                }
                else {
                    console.log("invalid account number");
                }

            }
            else {
                console.log("insuffient balance");
            }

        }
        else {
            console.log("invalid session");
        }

    }
    logOut(user){
        this.status=0;
    }
}

var obj1 = new Bank();
var user = obj1.authenticate(1003, "userfour");
//var res = user == 0 ? 'invalid user' : user == -1 ? 'invalid password' : 'login success';
//console.log(res);
console.log(obj1.balanceEnquiry(user));
//obj1.logOut()
obj1.fundTransfer(user, 1001, 5000)
console.log(obj1.balanceEnquiry(user));