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
    const depositAmount = getInput('deposit-total');
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
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
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    //update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawTotalText) + parseFloat(withdrawAmountText);
    //update balance after withdraw

    const balanceTotal = document.getElementById('balance-total');
    balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmountText);
    withdrawInput.value = '';

});