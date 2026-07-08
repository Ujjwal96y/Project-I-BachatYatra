function showRegister(){

    document.getElementById("login-box").classList.add("hidden");

    document.getElementById("register-box").classList.remove("hidden");

}



function showLogin(){

    document.getElementById("register-box").classList.add("hidden");

    document.getElementById("login-box").classList.remove("hidden");

}



// Create Account

function registerUser(){


    let name =
    document.getElementById("register-name").value;


    let email =
    document.getElementById("register-email").value;


    let password =
    document.getElementById("register-password").value;



    if(name=="" || email=="" || password==""){

        alert("Please fill all fields");

        return;

    }



    let user = {

        name:name,

        email:email,

        password:password

    };



    localStorage.setItem("user", JSON.stringify(user));


    alert("Account created successfully!");

    showLogin();

}



// Login

function loginUser(){


    let email =
    document.getElementById("login-email").value;


    let password =
    document.getElementById("login-password").value;



    let savedUser =
    JSON.parse(localStorage.getItem("user"));



    if(savedUser == null){

        alert("No account found. Please create an account.");

        return;

    }



    if(email === savedUser.email &&
       password === savedUser.password){


        alert("Login successful!");

        window.location.href="../HTML/home.html";


    }


    else{


        alert("Invalid email or password");


    }

}