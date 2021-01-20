var accountInfoList = [];

window.onload = function() {
    let btn = document.getElementById("btncreateaccount");
    btn.onclick = createAccount;
}

function createAccount() {
    let accName = document.getElementById("txtaccountname").value;
    let accDeposit = document.getElementById("txtdeposit").value;
    let acc = makeAccount.createAccount(accName,accDeposit*1);
    accountInfoList.push(acc);
    displayAccounts();
}

function displayAccounts(){
    let txtList = document.getElementById("txtareaaccounts");
    let val = accountInfoList[accountInfoList.length-1];
    let accName = val.getAccountName();
    let accBalance = val.getAccountBalance();
    txtList.value += "Account name:\t" + accName + "\t" + "Balance:\t" + accBalance + "\n";    
}
var makeAccount = function() {    
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