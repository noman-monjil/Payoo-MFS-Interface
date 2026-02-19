document.getElementById('bonus-btn').addEventListener("click",function(){
    console.log("bonus");
    const getbonus=getElementFromInput("get-bonus-input");
    if(getbonus=='nom200'){
    let newBalance=200+getBalance();
    setBalance(newBalance);
    alert(`You have get $200`);
    // ---------------------for history-----------
         // history container
        const history = document.getElementById("history");
        // 2- div create
        const newHistory = document.createElement("div");
        // 3 new div innerHtml add
        newHistory.innerHTML = `
        <div class="Transaction-card bg-base-100 p-5 ">
              You have got $200 bonus ${new Date()}
               </div>
        
        `;
        // new div append in history container
        history.prepend(newHistory);
    return;
    }else{
        alert('wrong coupon code please try again');
        return;
    }
})