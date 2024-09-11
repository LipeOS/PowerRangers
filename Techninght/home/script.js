document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o conteúdo principal e adiciona a classe 'visible' quando a página é carregada
    const mainContent = document.querySelector("main");
    mainContent.classList.add("visible");

    // Seleciona o botão do hambúrguer e o menu de navegação
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Adiciona o evento de clique ao botão do hambúrguer
    hamburger.addEventListener('click', () => {
        // Alterna a classe 'active' no botão do hambúrguer
        hamburger.classList.toggle('active');
        // Alterna a classe 'show' no menu de navegação
        navMenu.classList.toggle('show');
    });

    // Seleciona a seção 'loc' e os elementos animados
    const locSection = document.querySelector('.loc');
    const animatedElements = document.querySelectorAll('.animate-up');
    const button = document.querySelector('.btn');
    let buttonInView = false;

    // Função para verificar a posição do scroll
    const checkScroll = () => {
        const locSectionTop = locSection.getBoundingClientRect().top;
        const halfViewportHeight = window.innerHeight / 2;

        // Verifica se a seção 'loc' está visível na tela
        if (locSectionTop < halfViewportHeight) {
            animatedElements.forEach(element => {
                element.classList.add('in-view');
            });
            buttonInView = true;
        } else {
            animatedElements.forEach(element => {
                element.classList.remove('in-view');
            });
            buttonInView = false;
        }
    };

    // Adiciona um ouvinte de evento de scroll à janela
    window.addEventListener('scroll', () => {
        checkScroll();
        // Adiciona ou remove a classe 'hide' no botão
        if (buttonInView) {
            button.classList.remove('hide');
        } else {
            button.classList.add('hide');
        }
    });

    // Verifica a posição do scroll ao carregar a página
    checkScroll();

    // Seleciona os links de navegação e o logo
    const navLinks = document.querySelectorAll('.nav-list a, .logo a');

    // Adiciona a classe 'fade-in' quando a página é carregada
    document.body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            const targetUrl = this.href;

            // Adiciona a classe 'fade-out' ao corpo
            document.body.classList.add('fade-out');

            // Aguarda a animação completar antes de navegar
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Ajuste este valor de acordo com a duração da animação
        });
    });

    // Seleciona os produtos e a seção 'hist'
    const produtos = document.querySelectorAll('.produtos');
    const hist = document.querySelector('.hist');

    // Função para verificar a posição do scroll para os produtos
    function checkScrollProdutos() {
        produtos.forEach(function(produto) {
            const produtoTop = produto.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (produtoTop < viewportHeight - 50) { // Adiciona um pequeno offset
                produto.classList.add('show');
            }
        });

        const histTop = hist.getBoundingClientRect().top;

        if (histTop < window.innerHeight - 50) {
            hist.classList.add('show');
        }
    }

    // Adiciona um ouvinte de evento de scroll à janela
    window.addEventListener('scroll', checkScrollProdutos);
    checkScrollProdutos(); // Verifica inicialmente se algum produto já está na tela
});
