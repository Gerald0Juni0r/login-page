let abrirCadastrar = document.querySelector(".form-cadastrar");
let abrirLogin = document.querySelector(".form-login");
let cadastrarHeader = document.querySelector(".form-cadastrar header");
let loginHeader = document.querySelector(".form-login header");

loginHeader.addEventListener("click", () => {
    let element = document.querySelector(".active");
    if (element !== null) {
        abrirLogin.classList.remove("active");
        abrirCadastrar.classList.add("active");
    }
    else {
        abrirLogin.classList.add("active");
        abrirCadastrar.classList.remove("active");
    }
});
cadastrarHeader.addEventListener("click", () => {
    let element = document.querySelector(".active");
    if (element !== null) {
        abrirLogin.classList.add("active");
        abrirCadastrar.classList.remove("active");
    }
    else {
        abrirCadastrar.classList.add("active");
        abrirLogin.classList.remove("active");
    }
});

let usuarios = [];

if (localStorage.getItem('cadastrados')) {
	usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function recarregarAPagina(){
    location.reload();
} 

function cadastrar() {
    let guardarLogin = document.getElementsByClassName('login')[0].value;
    let guardarSenha = document.getElementsByClassName('senha')[0].value;
    let usuario = {login: guardarLogin, senha: guardarSenha};
    let usuarios = JSON.parse(localStorage.getItem('cadastrados'));

    /* Impede que o usuário cadastre um nome menor que 5 caracteres e que adicione espaços vazios -> " " */
    if (guardarLogin.trim().length >= 5 && guardarSenha.trim().length >= 6) {
        usuarios.push(usuario);
        localStorage.setItem('cadastrados', JSON.stringify(usuarios));
    }
    else {
        if (guardarLogin.trim().length < 5) {
            alert("O nome de usuário deve ter ao menos 5 caracteres!");
        }
        if (guardarSenha.trim().length < 6) {
            alert("A senha deve ter ao menos 6 caracteres!");
        }
    }
}

let ativar = document.getElementsByTagName('button');
for (let i = 0; i < ativar.length; i++) {
	ativar[i].addEventListener('keypress', (event) => {
		if (event.key == "Enter") {
			cadastrar();
		}
	}, true);
}

console.log(usuarios)