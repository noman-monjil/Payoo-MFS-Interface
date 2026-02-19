



document.getElementById('send-money-btn').addEventListener("click", function () {

    // get the number from input
    const numberInput = getElementFromInput("transfer-money-number-input");


    if (numberInput.length !== 11) {
        alert("Invalid number");
        return;
    }
    for (let i = 0; i < numberInput.length; i++) {
        if (numberInput.charCodeAt(i) < 48 || numberInput.charCodeAt(i) > 57) {
            alert("Invalid Number");
            return;
        }
    }
    //Cash amount 
    const CurrentBalance = getBalance();

    const cashOutAmountInput = getElementFromInput("transfer-money-amount-input");

    let newBalance = CurrentBalance - Number(cashOutAmountInput);
    if (newBalance < 0) {
        alert("Insufficient balance")
    }
    const PinNumber = getElementFromInput("transfer-pin");
    if (PinNumber == '1234') {
        alert(" Money transfer Successful");
        setBalance(newBalance)
        // availableBalance.innerText=newBalance;
        // history container
        const history = document.getElementById("history");
        // 2- div create
        const newHistory = document.createElement("div");
        // 3 new div innerHtml add
        newHistory.innerHTML = `
        <div class="Transaction-card bg-base-100 p-5 ">
                Transfer money  ${cashOutAmountInput + "$"} to  Account Number is ${numberInput} successfully ${new Date()}
               </div>
        
        `;
        // new div append in history container
        history.prepend(newHistory);
    } else {
        alert("Incorrect pin");
    }
})




