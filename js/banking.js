//get input from function

function getInput() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';
    return depositAmount;

}


document.getElementById('deposit-button').addEventListener('click', function () {

    //get current deposit
    const depositAmount = getInput();
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
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
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