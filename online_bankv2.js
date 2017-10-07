console.log ("Show Me The Money - Monolith");

// take userinput
// listen for button clicked
//	if deposit clicked 
//			add userinput to current balance
// 	if withdraw clicked
	// 		compare userinput to current balance
	//			if sufficient balance
	//				deduct userinput from current balance
	//			if insufficient balance
	//				display "insufficient funds"



// consider navigating dom tree using getElements, rather than repeating code?
// consider manipulating button call, rather than duplicating code twice!



//-------------------------SAVINGS ACCOUNT---------------------------//
var savingsAccCurrentBalance = document.querySelector('.savings-container #balance');
var savingsAccUserInputStr = document.querySelector('.savings-container #userInput');
var savingsAccWithdrawButton = document.querySelector(".savings-container #withdraw");
var savingsAccDepositButton = document.querySelector(".savings-container #deposit");

var savingsWithdrawal = function (balance, withdrawal){
	if (balance >= withdrawal){
		return balance - withdrawal;
	} else {
		return " ... "; // 'can use change of classList to display...''
	}
};

var newBalanceAfterDeposit = function(accountTypeAndBalance, userInputStr){
	var userInputNum = Number(userInputStr.value);
	var balance = Number(accountTypeAndBalance.textContent);
	var updateBalance = balance + userInputNum; // DEPOSIT
	return updateBalance
}

savingsAccDepositButton.addEventListener("click", function(){
	var newBalance = newBalanceAfterDeposit(savingsAccCurrentBalance,savingsAccUserInputStr)
	savingsAccCurrentBalance.textContent = newBalance;
	savingsAccUserInputStr.value = " ";
});

savingsAccWithdrawButton.addEventListener("click", function(){
	var userInputNum = Number(savingsAccUserInputStr.value);
	var balance = Number(savingsAccCurrentBalance.textContent);
	var updateBalance = savingsWithdrawal(balance, userInputNum);
	savingsAccCurrentBalance.textContent = updateBalance;
	savingsAccUserInputStr.value = " ";
});

//-------------------------CHECKING ACCOUNT---------------------------//
var checkAccCurrentBalance = document.querySelector('.checking-container #balance');
var checkAccUserInputStr = document.querySelector('.checking-container #userInput');
var checkAccWithdrawButton = document.querySelector(".checking-container #withdraw");
var checkAccDepositButton = document.querySelector(".checking-container #deposit");


checkAccDepositButton.addEventListener("click", function(){
	var userInputNum = Number(checkAccUserInputStr.value);
	var balance = Number(checkAccCurrentBalance.textContent);
	var updateBalance = balance + userInputNum;
	checkAccCurrentBalance.textContent = updateBalance;
	checkAccUserInputStr.value = " ";
});

checkAccWithdrawButton.addEventListener("click", function(){
	var userInputNum = Number(checkAccUserInputStr.value);
	var checkBalance = Number(checkAccCurrentBalance.textContent);
	var savingsBalance = Number(savingsAccCurrentBalance.textContent);
	checkAccUserInputStr.value = " ";

	console.log(savingsBalance);

	if (checkBalance>userInputNum){
		var updateBalance = savingsWithdrawal(checkBalance, userInputNum);
		checkAccCurrentBalance.textContent = updateBalance;
	} else {
		var updateCheckingBalance = 0;
		checkAccCurrentBalance.textContent = updateCheckingBalance;
		var overdraft = Math.abs(checkBalance - userInputNum);
		var updateSavingsBalance = savingsWithdrawal (savingsBalance, overdraft);
		savingsAccCurrentBalance.textContent = updateSavingsBalance;
	}
});