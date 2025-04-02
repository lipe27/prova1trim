// Seleção dos elementos do DOM
const usernameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const bioElement = document.getElementById('bio');
const profileImageElement = document.getElementById('profileImage');
const editUsernameButton = document.getElementById('editUsernameButton');
const editEmailButton = document.getElementById('editEmailButton');
const editBioButton = document.getElementById('editBioButton');
const editProfileImageButton = document.getElementById('editProfileImageButton');

// Função para carregar dados salvos no Local Storage
document.addEventListener('DOMContentLoaded', function () {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    const savedBio = localStorage.getItem('bio');
    const savedProfileImage = localStorage.getItem('profileImage');

    if (savedUsername) {
        usernameElement.textContent = savedUsername;
    }
    if (savedEmail) {
        emailElement.textContent = `Email: ${savedEmail}`;
    }
    if (savedBio) {
        bioElement.textContent = `Biografia: ${savedBio}`;
    }
    if (savedProfileImage) {
        profileImageElement.src = savedProfileImage;
    }
});

// Editar e salvar o nome de usuário
editUsernameButton.addEventListener('click', function () {
    const currentUsername = usernameElement.textContent;
    const newUsername = prompt('Digite o novo nome de usuário:', currentUsername);
    if (newUsername) {
        usernameElement.textContent = newUsername;
        localStorage.setItem('username', newUsername);
        alert('Nome de usuário atualizado com sucesso!');
    }
});

// Editar e salvar o email
editEmailButton.addEventListener('click', function () {
    const currentEmail = emailElement.textContent.replace('Email: ', '');
    const newEmail = prompt('Digite o novo email:', currentEmail);
    if (newEmail) {
        emailElement.textContent = `Email: ${newEmail}`;
        localStorage.setItem('email', newEmail);
        alert('Email atualizado com sucesso!');
    }
});

// Editar e salvar a biografia
editBioButton.addEventListener('click', function () {
    const currentBio = bioElement.textContent.replace('Biografia: ', '');
    const newBio = prompt('Digite a nova biografia:', currentBio);
    if (newBio) {
        bioElement.textContent = `Biografia: ${newBio}`;
        localStorage.setItem('bio', newBio);
        alert('Biografia atualizada com sucesso!');
    }
});

// Editar e salvar a imagem de perfil
editProfileImageButton.addEventListener('click', function () {
    const newProfileImage = prompt('Digite o URL da nova imagem de perfil:', profileImageElement.src);
    if (newProfileImage) {
        profileImageElement.src = newProfileImage;
        localStorage.setItem('profileImage', newProfileImage);
        alert('Imagem de perfil atualizada com sucesso!');
    }
});
// Botão de Logout
const logoutButton = document.getElementById('logoutButton');

// Função de Logout
logoutButton.addEventListener('click', function () {
    alert('Você foi deslogado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login
});

// Botão de Deletar Conta
const deleteAccountButton = document.getElementById('deleteAccountButton');

// Função para Deletar Conta
deleteAccountButton.addEventListener('click', function () {
    const confirmDelete = confirm('Tem certeza de que deseja deletar sua conta? Essa ação não pode ser desfeita.');
    if (confirmDelete) {
        localStorage.clear(); // Remove todos os dados salvos no Local Storage
        alert('Sua conta foi deletada com sucesso!');
        window.location.href = 'cadastro.html'; // Redireciona para a página de cadastro
    }
});
