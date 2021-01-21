
window.onload = function() {
    let btn = document.getElementById("btncreateaccount");
    btn.onclick = guiHandler.btnCreateOnclickHandler;
}

var guiHandler = function () {
    "use strict";
    let accountInfoList = [];
    let accountFactory = function() {    
        "use strict";
        const CreateAccount = function(name, deposit) {
            let accName = name;
            let accBalance = deposit;
            const getAccName = function() {
                return accName;
            }
            const getAccBalance = function() {
                return accBalance;
            }
            const addAccDeposit = function(deposit){
                if(deposit > 0){
                    accBalance += deposit;
                }
                else{
                    alert("Deposit must be greater than 0!");
                } 
            }
            return {        
                getAccountName: getAccName,
                getAccountBalance: getAccBalance,
                addAccountDeposit: addAccDeposit           
            }
        }
    
        return {
            createAccount : CreateAccount
        };
    }();

    const createAccount = function() {
        let accName = document.getElementById("txtaccountname").value;
        let accDeposit = document.getElementById("txtdeposit").value;
        let acc = accountFactory.createAccount(accName,accDeposit*1);
        accountInfoList.push(acc);
        displayAccounts();
    }

    const displayAccounts = function(){
        let txtList = document.getElementById("txtareaaccounts");
        let val = accountInfoList[accountInfoList.length-1];
        let accName = val.getAccountName();
        let accBalance = val.getAccountBalance();
        txtList.value += "Account name:\t" + accName + "\t" + "Balance:\t" + accBalance + "\n";    
    }

    return {
        btnCreateOnclickHandler : createAccount
    };
}();

