document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão do hambúrguer e o menu de navegação
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Adiciona o evento de clique ao botão do hambúrguer
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    // Barra de Pesquisa Funcional
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const produtos = document.querySelectorAll('.produtos');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        produtos.forEach(produto => {
            const produtoName = produto.getAttribute('data-name').toLowerCase();
            if (produtoName.includes(searchTerm)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
    });
});
