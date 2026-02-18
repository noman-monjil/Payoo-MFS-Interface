

const LoginButton=document.getElementById('Login-btn');
const MobileNumber=document.getElementById('mobile-number');
const PinNumber=document.getElementById('pin-number');
LoginButton.addEventListener("click",function(){
   
    console.log(MobileNumber.value);
    console.log(PinNumber.value);

    //get pin and number match

    if(MobileNumber.value=='01732119789' && PinNumber.value=='1234')
    {
        console.log('Login Successful');
        alert('Login Successful');
        // window.location.replace("/home.html")
        window.location.assign("/home.html")

    }else{
        console.log('Login failed');
         alert('Login failed');
         return;
    }

})