// Exemplo de efeito de rolagem suave
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#servicos').scrollIntoView({
        behavior: 'smooth'
    });
});
