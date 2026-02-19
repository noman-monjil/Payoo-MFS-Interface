
document.getElementById("add-money-btn").addEventListener("click", function () {

    //  bank account select
    const selected = getElementFromInput("select-one");
    console.log(selected)

    if (selected == "selected-a") {
        alert("You have must select a Bank");
        return;
    }
    // Bank account number
    const addMoneyNumberInput = getElementFromInput("add-money-bank-number");


    if (addMoneyNumberInput.length !== 11) {
        alert("Invalid number");
        return;
    }
    for (let i = 0; i < addMoneyNumberInput.length; i++) {
        if (addMoneyNumberInput.charCodeAt(i) < 48 || addMoneyNumberInput.charCodeAt(i) > 57) {
            alert("Invalid Number");
            return;
        }
    }


    // Bank  Amount to Add 
    const addmoneyAmountBank = getElementFromInput("Bank-Amount-to-Add");
    let newBalance = Number(addmoneyAmountBank) + Number(getBalance());


    // pin number
    const pinNumber = getElementFromInput("add-money-pin");
    if (pinNumber !== "1234") {
        alert("Incorrect pin number");
        return;
    } else {
        alert(`Cash added ${addmoneyAmountBank + "$"} from  ${selected} is successful`);
        setBalance(newBalance);
        // history container
        const history = document.getElementById("history");
        // 2- div create
        const newHistory = document.createElement("div");
        // 3 new div innerHtml add
        newHistory.innerHTML = `
        <div class="Transaction-card bg-base-100 p-5 ">
                Cash added ${addmoneyAmountBank + "$"} from  ${selected} Account Number is ${addMoneyNumberInput} successfully ${new Date()}
               </div>
        
        `;
        // new div append in history 
        // append dile aktar niche arekta div but prepend dile opore jai
        history.prepend(newHistory);
        // console.log(history);
    }



})