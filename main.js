function getdata(){
    let name = document.getElementById("getName").value
    let email = document.getElementById("getEmail").value
    let phone = document.getElementById("getNumber").value
    let password = document.getElementById("getPassword").value
    if ( name == "" || email == "" || phone== "" || password == ""){
        alert("Field Is Empty")
        return
    }
    else if(email == "abc@gmail.com" ){
        alert("Email is Valid")

    }
    else if ( phone[0] <= 11){
        alert("must be 11 digits")
    }
    else if (password <= 8){

    }
    else {
        console.log('login Successful');
        
    }

}