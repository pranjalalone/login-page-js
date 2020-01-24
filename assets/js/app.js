const userInput = document.querySelector("input[name=username]");
const passInput = document.querySelector("input[name=password]");
const loginBtn = document.querySelector("#login-btn");
const message = document.querySelector("#message");
const validate = () => {
    if (userInput.value === "" && passInput.value === "") {
        message.innerHTML = "Please input username and password!";
    } else if (userInput.value === "") {
        message.innerHTML = "Please input username!";
    } else if (passInput.value === "") {
        message.innerHTML = "Please input password!";
    } else {
        alert('Login Successful!!!');
    }
}

loginBtn.addEventListener('click', validate);
