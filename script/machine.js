function getElementFromInput(id){
    const input=document.getElementById(id);
    const values=input.value;
    return values;
}
function getBalance()
{
    const balance=document.getElementById("account-balance");
    const currentBalance=balance.innerText;
    // console.log("sdadffd",currentBalance);
    return Number(currentBalance);
}

function setBalance(value){
    const balanceElement=document.getElementById("account-balance");
    balanceElement.innerText=value;
}

function showOnly(id)
{
    const addMoney=document.getElementById("addMoney");
    const Cahsout=document.getElementById("cashout");
    const TransferMoney=document.getElementById("transferMoney");
    const GetBonus=document.getElementById("getBonusInput");
    const PaymentMethod=document.getElementById("payment");
    const history=document.getElementById("history-container");
    console.log("clicked")
    // console.log(`addmoney ${addMoney} cashout ${Cahsout}`);
    addMoney.classList.add("hidden");
    Cahsout.classList.add("hidden");
    TransferMoney.classList.add("hidden");
    GetBonus.classList.add("hidden");
    PaymentMethod.classList.add("hidden");
    history.classList.add("hidden");

    // show only one
    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
    // selected.classList.remove("hidden");
}