
function getdata() {
    let name = document.getElementById("getName").value.trim();
    let email = document.getElementById("getEmail").value.trim();
    let phone = document.getElementById("getNumber").value.trim();
    let password = document.getElementById("getPassword").value;

    if (name == "" || email == "" || phone == "" || password == "") {
        alert("All fields are required");
        return;
    }

    // Name validation
    if (name.length < 3) {
        alert("Name must contain at least 3 characters");
        return;
    }

    if (!isNaN(name)) {
        alert("Name cannot contain only numbers");
        return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email");
        return;
    }

    if (email.indexOf("@") > email.lastIndexOf(".")) {
        alert("Enter a valid email");
        return;
    }

    // Phone validation
    if (phone.length != 11 || isNaN(phone)) {
        alert("Phone number must contain exactly 11 digits");
        return;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (!password.match(/[A-Z]/)) {
        alert("Password must contain an uppercase letter");
        return;
    }

    if (!password.match(/[0-9]/)) {
        alert("Password must contain a number");
        return;
    }

    if (!password.match(/[!@#$%^&*]/)) {
        alert("Password must contain a special character");
        return;
    }

    document.getElementById("getName").value = "";
    document.getElementById("getEmail").value = "";
    document.getElementById("getNumber").value = "";
    document.getElementById("getPassword").value = "";

    alert("Registration Successful");
}
