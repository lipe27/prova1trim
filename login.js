document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Recuperar os dados do usuário do LocalStorage
        const userData = JSON.parse(localStorage.getItem(username));

        if (userData && userData.password === password) {
            alert('Login bem-sucedido! Bem-vindo, ' + username + '!');
            // Redireciona para a página inicial
            window.location.href = "inicio2.html";
        } else {
            alert('Usuário ou senha incorretos!');
        }
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
