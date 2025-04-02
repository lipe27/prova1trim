document.getElementById('signupButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Verificar se o usuário já existe
        if (localStorage.getItem(username)) {
            alert('Usuário já cadastrado! Escolha outro nome de usuário.');
        } else {
            // Salvar os dados do usuário
            localStorage.setItem(username, JSON.stringify({ password }));
            alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login.');
            window.location.href = 'login.html'; // Redireciona para login
        }
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
