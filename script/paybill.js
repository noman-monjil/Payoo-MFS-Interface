document.getElementById("pay-btn").addEventListener("click",function(){
   
    let selected=getElementFromInput("select-mthod");
    console.log(selected);
    if(selected=="selected-one")
    {
        alert("select a payment method");
        return;
    }
     // payment number from input
    const numberInput=getElementFromInput("Biller-Account-Number");
    
   
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
// balance calculated
    const AmountTopay=getElementFromInput("Amount-to-Pay");
    let newBalance=getBalance()-AmountTopay;
    if(newBalance<0)
    {
        alert("Insufficient balance");
        return;
    }

    // pin numbner
    const PinNumber=getElementFromInput("pin-number");

    if(PinNumber=='1234')
    {
        alert( `Payment ${AmountTopay} is successful`);
        setBalance(newBalance);

        // ---------------------for history-----------
         // history container
        const history = document.getElementById("history");
        // 2- div create
        const newHistory = document.createElement("div");
        // 3 new div innerHtml add
        newHistory.innerHTML = `
        <div class="Transaction-card bg-base-100 p-5 ">
               ${selected} Payment  ${AmountTopay + "$"} to  Account Number is ${numberInput} successfully ${new Date()}
               </div>
        
        `;
        // new div append in history container
        history.prepend(newHistory);
    }
    else{
        alert("Incorrect pin number");
        return;
    }

})