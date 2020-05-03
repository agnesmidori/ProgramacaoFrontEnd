// Slider da Pagina Inicial

function change1(){
         let element=document.getElementById("image");
         element.src="../view/images/banner1.png";
}

function change2(){
         let element=document.getElementById("image");
         element.src="../view/images/banner2.png";
}

function change3(){
         let element=document.getElementById("image");
         element.src="../view/images/banner3.png";
}
//  ---------------------------------------------------


// Validar Cadastro
function validarCadastro()
{
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    // verifica se o campo nome está vazio
    if (nome == "") {
        alert("Informe o nome.");
        nome.focus();
        return;
    }
    if (sobrenome == "") {
        alert("Informe o sobrenome.");
        sobrenome.focus();
        return;
    }
    if (email == "") {
        alert("Informe um e-mail.");
        email.focus();
        return;
    }
    if (password1 == "") {
        alert("Digite a Senha");
        password1.focus();
        return;
    }
    if(password1 != password2) {
        alert("Senhas não conferem.");
        password2.focus();
        return;
    }

    else {
        alert("Formulário enviado com sucesso!");
        // envia o formulário
        checkSignUp.submit();
        return true;
    }
}
//  ---------------------------------------------------

// Validar Login
function validarLogin()
{
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;

    if (email == "") {
        alert("Informe o e-mail cadastrado.");
        email.focus();
        return;
    }
    if (password1 == "") {
        alert("Digite a senha cadastrada.");
        password1.focus();
        return;
    }
    else {
        alert("Formulário enviado com sucesso!");
        // envia o formulário
        checkSignIn.submit();
        return true;
    }
}
//  ---------------------------------------------------
