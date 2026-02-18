function getElementFromInput(id){
    const input=document.getElementById(id);
    const values=input.value;
    return values;
}
function getBalance()
{
    const balance=document.getElementById("account-balance");
    const currentBalance=balance.innerText;
    console.log("sdadffd",currentBalance);
    return Number(currentBalance);
}

function setBalance(value){
    const balanceElement=document.getElementById("account-balance");
    balanceElement.innerText=value;
}