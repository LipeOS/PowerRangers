document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector("main");
    mainContent.classList.add("visible");
});

// Seleciona o botão do hambúrguer e o menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Adiciona o evento de clique ao botão do hambúrguer
hamburger.addEventListener('click', () => {
    // Alterna a classe 'active' no botão do hambúrguer
    hamburger.classList.toggle('active');

    // Alterna a classe 'show' no menu
    navMenu.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const locSection = document.querySelector('.loc');
    const animatedElements = document.querySelectorAll('.animate-up');
    const button = document.querySelector('.btn');
    let buttonInView = false;

    const checkScroll = () => {
        const locSectionTop = locSection.getBoundingClientRect().top;
        const halfViewportHeight = window.innerHeight / 2;

        // Verificar se a seção "loc" está visível na tela
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

    // Adicionar um ouvinte de evento de scroll à janela
    window.addEventListener('scroll', () => {
        checkScroll();
        // Adicionar ou remover classe 'hide' no botão
        if (buttonInView) {
            button.classList.remove('hide');
        } else {
            button.classList.add('hide');
        }
    });

    // Verificar a posição do scroll ao carregar a página
    checkScroll();
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a, .logo a');

    // Adiciona a classe fade-in quando a página é carregada
    document.body.classList.add('fade-in');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            const targetUrl = this.href;

            // Adiciona a classe fade-out ao corpo
            document.body.classList.add('fade-out');

            // Aguarda a animação completar antes de navegar
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Ajuste este valor de acordo com a duração da animação
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtos');

    function checkScroll() {
        produtos.forEach(function(produto) {
            const produtoTop = produto.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (produtoTop < viewportHeight - 50) { // Adiciona um pequeno offset
                produto.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica inicialmente se algum produto já está na tela
});


document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtos');
    const hist = document.querySelector('.hist');

    function checkScroll() {
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

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica inicialmente se algum elemento já está na tela
});



document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-up');
    
    elements.forEach(function(element) {
        element.classList.add('in-view');
    });
});

let searchBar = document.querySelector('.search-bar');


searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();

    musicList.forEach((music, index) => {
        const musicName = music.textContent.toLowerCase();

        if (musicName.includes(searchTerm)) {
            music.style.display = 'flex';
        } else {
            music.style.display = 'none';
        }
    });
});