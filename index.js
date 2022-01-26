var controller;

window.addEventListener('load', onLoad);

function onLoad() {
    console.log("Javascript running");    
    controller = new LoginPage();
}

function LoginPage() {
    console.log("Creating controller/model");

    var BaseUrl = "http://localhost:3000/users/";

    function loginsubmit(uname,pwd) {
        $.get(BaseUrl + uname, function(data, status){
            console.log(status);
            if(data.password == pwd) {
                alert("Login Successful");
                location.href = "/escman.html"
            } else {
                    alert("login failed");
                }
            });
    };

    this.login = function () {
        var uname = document.getElementById("uname").value;
        var pwd = document.getElementById("pwd").value;
        loginsubmit(uname,pwd)
    }

};