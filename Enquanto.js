function Enquanto(){
    var user;
    var password;
    var recorrente;
    recorrente = true;
    do {
        window.alert("Digite o seu nome de usuário!");
        user = window.prompt('Enter a value for user');
        window.alert("Digite sua senha!");
        password = window.prompt('Enter a value for password');
        if (user == "Gustavo") {
            if (password == "1234") {
                window.alert("você será redirecionado ao seu perfil.");
                recorrente = false;
            } else {
                window.alert("Usuário ou senha inválido.");
            }
        } else {
            window.alert("usuário ou senha inválido.");
        }
    } while (recorrente == true);
}

function Faça() {
    var user;
    var password;
    var recorrente;
    
    recorrente = true;
    do {
        window.alert("Digite o seu nome de usuário!");
        user = window.prompt('Enter a value for user');
        window.alert("Digite sua senha!");
        password = window.prompt('Enter a value for password');
        if (user == "Gustavo") {
            if (password == "1234") {
                window.alert("Você será redirecionado ao seu perfil.");
                recorrente = false;
            } else {
                window.alert("Usuário ou senha inválido.");
            }
        } else {
            window.alert("Usuário ou senha inválido.");
        }
    } while (recorrente == true);
}
