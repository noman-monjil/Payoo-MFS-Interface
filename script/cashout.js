



document.getElementById('withdraw-btn').addEventListener("click",function(){

    // get the number from input
    const numberInput=getElementFromInput("cashout-number-input");
    
   
    if(numberInput.length !==11)
    {
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
     const CurrentBalance=getBalance();
   
    const cashOutAmountInput=getElementFromInput("cashout-amount-input");
    
    let newBalance=CurrentBalance-Number(cashOutAmountInput);
    if(newBalance<0)
    {
        alert("Insufficient balance")
    }
    const PinNumber=getElementFromInput("cashout-pin");
    if(PinNumber =='1234')
    {
        alert("Cash Out Successful");
        setBalance(newBalance)
        // availableBalance.innerText=newBalance;
         // ---------------------for history-----------
         // history container
        const history = document.getElementById("history");
        // 2- div create
        const newHistory = document.createElement("div");
        // 3 new div innerHtml add
        newHistory.innerHTML = `
        <div class="Transaction-card bg-base-100 p-5 ">
              Cash out  ${cashOutAmountInput + "$"} to  Account Number is ${numberInput} successfully ${new Date()}
               </div>
        
        `;
        // new div append in history container
        history.prepend(newHistory);
    }else{
        alert("Incorrect pin");
    }
})













// const cashoutButton = document.getElementById('cashout-btn');
// const cashoutNumber = document.getElementById('cashout-number');
// const cashoutPin = document.getElementById('cashout-pin');
// const AvailableBalance = document.getElementById("account-balance");
// const cashoutAmount = document.getElementById('cashout-amount');

// cashoutButton.addEventListener("click", function () {

//     const num = cashoutNumber.value;

//     // number validation
//     if (num.length === 0) {
//         alert("Invalid Number");
//         return;
//     }

//     for (let i = 0; i < num.length; i++) {
//         if (num.charCodeAt(i) < 48 || num.charCodeAt(i) > 57) {
//             alert("Invalid Number");
//             return;
//         }
//     }

//     // cash amount
//     const currentBalance = parseInt(AvailableBalance.innerText);
//     const cashoutAmountValue = parseInt(cashoutAmount.value);

//     if (cashoutAmountValue > currentBalance) {
//         alert('Insufficient balance');
//         return;
//     }

//     // pin check
//     if (cashoutPin.value !== "1234") {
//         alert('Pin is incorrect');
//         return;
//     }

//     // update balance
//     const newBalance = currentBalance - cashoutAmountValue;
//     AvailableBalance.innerText = newBalance;

//     alert('Cash Out successful');
// });
