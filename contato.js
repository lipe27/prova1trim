// Adiciona interatividade aos botões de contato
document.getElementById('instagramButton').addEventListener('click', function () {
    window.open('https://www.instagram.com/h_de_historia_', '_blank');
});

document.getElementById('emailButton').addEventListener('click', function () {
    window.location.href = 'mailto:HdeHistotia007@gmail.com';
});

document.getElementById('twitterButton').addEventListener('click', function () {
    window.open('https://twitter.com/seuPerfil', '_blank');
});
