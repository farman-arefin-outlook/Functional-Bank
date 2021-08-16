//get input from function

function getInputValue(getInputId) {
    const inputField = document.getElementById(getInputId);
    const AmountText = inputField.value;
    const Amount = parseFloat(AmountText);
    //clear input field
    inputField.value = '';
    return Amount;

}


document.getElementById('deposit-button').addEventListener('click', function () {

    //get current deposit
    const depositAmount = getInputValue('deposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;


});


//handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawInput = getInputValue('withdraw-input');
    //update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawInput;

    //update balance after withdraw

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = currentBalance - withdrawInput;
});