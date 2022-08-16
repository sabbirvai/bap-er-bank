// step-1....
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2....
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-7....
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('pease provide the number...');
        return;
    }
    // step-3...
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er Banka a taka nai...');
        return;
    }
    //step-4...
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    withdrawField.innerText = newBalanceTotal;
});