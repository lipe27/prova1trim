document.getElementById('recoverButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;

    if (username) {
        // Recupera os dados do LocalStorage
        const userData = JSON.parse(localStorage.getItem(username));

        if (userData) {
            // Exibe a senha recuperada (apenas para protótipo)
            alert(`Sua senha é: ${userData.password}`);
        } else {
            alert('Usuário não encontrado! Verifique o nome de usuário.');
        }
    } else {
        alert('Por favor, insira o nome de usuário!');
    }
});
