let abrirCadastrar = document.querySelector(".form-cadastrar");
let abrirLogin = document.querySelector(".form-login");
let cadastrarHeader = document.querySelector(".form-cadastrar h1");
let loginHeader = document.querySelector(".form-login h1");

// Animação da tela "Login"
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

// Animação da tela "Cadastro"
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




let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

function recarregarAPagina(){
    location.reload();
} 

function validaInput(){
    /* Impede que o usuário cadastre um nome menor que 5 caracteres e que adicione espaços vazios -> " " */
    let guardarLogin = document.getElementById('usuario').value;
    let guardarSenha = document.getElementById('senha').value;

    if (guardarLogin.trim().length >= 5 && guardarSenha.trim().length >= 6) {
        listaUser.push(usuario);
        localStorage.setItem('cadastrados', JSON.stringify(listaUser));

        recarregarAPagina()
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

function cadastrar(){
    
    // validaInput()

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    if(validNome && validUsuario && validSenha && validConfirmSenha) {
        listaUser.push(
            {
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
            }
        )
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        

        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        setTimeout(()=>{
            window.location.href = './index.html'
        }, 3000)

        recarregarAPagina()

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

// LOGIN
function entrar(){

    let usuarioLogin = document.querySelector('#usuarioLogin')
    let userLabel = document.querySelector('#userLabel')

    let senhaLogin = document.querySelector('#senhaLogin')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgErrorLogin = document.querySelector('#msgErrorLogin')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if(usuarioLogin.value == item.userCad && senhaLogin.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
            window.location.href = './home.html'
        } if(usuarioLogin.value == userValid.user && senhaLogin.value == userValid.senha && usuarioLogin.length >4 && senhaLogin.length >5){
        
            let mathRandom = Math.random().toString(16).substr(2)
            let token = mathRandom + mathRandom
            
            localStorage.setItem('token', token)
            localStorage.setItem('userLogado', JSON.stringify(userValid))
            
            window.location.href = './home.html'
        } else {
            userLabel.setAttribute('style', 'color: red')
            usuarioLogin.setAttribute('style', 'border-color: red')
            senhaLabel.setAttribute('style', 'color: red')
            senhaLogin.setAttribute('style', 'border-color: red')
            msgErrorLogin.setAttribute('style', 'display: block')
            msgErrorLogin.innerHTML = 'Usuário ou senha incorretos'
            usuarioLogin.focus()
        }
    })
    
    
    
}














// 
// Recebe o "login" e a "senha" do usuário
// let usuarios = [];

// if (localStorage.getItem('cadastrados')) {
// 	usuarios = JSON.parse(localStorage.getItem('cadastrados'))
// }

// function recarregarAPagina(){
//     location.reload();
// } 

// function cadastrar() {
//     let guardarLogin = document.getElementsByClassName('login')[0].value;
//     let guardarSenha = document.getElementsByClassName('senha')[0].value;
//     let usuario = {login: guardarLogin, senha: guardarSenha};
//     let usuarios = JSON.parse(localStorage.getItem('cadastrados'));

//     /* Impede que o usuário cadastre um nome menor que 5 caracteres e que adicione espaços vazios -> " " */
//     if (guardarLogin.trim().length >= 5 && guardarSenha.trim().length >= 6) {
//         usuarios.push(usuario);
//         localStorage.setItem('cadastrados', JSON.stringify(usuarios));
//     }
//     else {
//         if (guardarLogin.trim().length < 5) {
//             alert("O nome de usuário deve ter ao menos 5 caracteres!");
//         }
//         if (guardarSenha.trim().length < 6) {
//             alert("A senha deve ter ao menos 6 caracteres!");
//         }
//     }
// }

// let ativar = document.getElementsByTagName('button');
// for (let i = 0; i < ativar.length; i++) {
// 	ativar[i].addEventListener('keypress', (event) => {
// 		if (event.key == "Enter") {
// 			cadastrar();
// 		}
// 	}, true);
// }

// console.log(usuarios)



// // LOGIN
// // let btn = document.querySelector('.fa-eye')

// // btn.addEventListener('click', ()=>{
// //   let inputSenha = document.querySelector('#senha')
  
// //   if(inputSenha.getAttribute('type') == 'password'){
// //     inputSenha.setAttribute('type', 'text')
// //   } else {
// //     inputSenha.setAttribute('type', 'password')
// //   }
// // })

// function entrar(){
//     let usuario = document.querySelector('#usuario')
//     let senha = document.querySelector('#senha')

//     let listaUser = []
    
//     let userValid = {
//         user: '',
//         senha: ''
//     }
    
//     listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
//     listaUser.forEach((item) => {
//         if(usuario.value == item.login && senha.value == item.senha){
        
//         userValid = {
//             user: item.login,
//             senha: item.senha
//         }
        
//         }
//     })
   
//   if(usuario.value == userValid.user && senha.value == userValid.senha){
//     window.location.href = 'https://cdpn.io/thicode/debug/abpVEeB/jVMpoEDNzPxk'
    
//     let mathRandom = Math.random().toString(16).substr(2)
//     let token = mathRandom + mathRandom
    
//     localStorage.setItem('token', token)
//     localStorage.setItem('userLogado', JSON.stringify(userValid))

//     console.log("Logou!")
//   } else {
//     // userLabel.setAttribute('style', 'color: red')
//     // usuario.setAttribute('style', 'border-color: red')
//     // senhaLabel.setAttribute('style', 'color: red')
//     // senha.setAttribute('style', 'border-color: red')
//     // msgError.setAttribute('style', 'display: block')
//     // msgError.innerHTML = 'Usuário ou senha incorretos'
//     // usuario.focus()
//   } 
// }