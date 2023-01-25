const cadastrar = document.querySelector(".form-cadastrar");
const login = document.querySelector(".form-login");
const cadastrarHeader = document.querySelector(".form-cadastrar header");
const loginHeader = document.querySelector(".form-login header");

loginHeader.addEventListener("click", () => {
    var element = document.querySelector(".active");
    if (element !== null) {
        login.classList.remove("active");
        cadastrar.classList.add("active");
    }
    else {
        login.classList.add("active");
        cadastrar.classList.remove("active");
    }
});
cadastrarHeader.addEventListener("click", () => {
    var element = document.querySelector(".active");
    if (element !== null) {
        login.classList.add("active");
        cadastrar.classList.remove("active");
    }
    else {
        cadastrar.classList.add("active");
        login.classList.remove("active");
    }
});