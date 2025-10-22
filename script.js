
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona todos os links do menu de navegação
    // Isso pega todos os <a> que estão dentro de um <li> dentro de '.menu-navegacao'
    const menuLinks = document.querySelectorAll('.menu-navegacao li a');

    // 2. Adiciona um "ouvinte de evento" (EventListener) para cada link
    // 'forEach' é um loop que passa por cada link que encontramos
    menuLinks.forEach(link => {
        
        // Adiciona um evento que "escuta" pelo clique no link
        link.addEventListener('click', (evento) => {
            
            // 3. Previne o comportamento padrão (o "pulo" brusco)
            evento.preventDefault();

            // 4. Pega o ID da seção para onde o link aponta
            // ex: O link <a href="#sobre">...</a> vai retornar a string "#sobre"
            const href = link.getAttribute('href');

            // 5. Seleciona a seção no HTML que tem esse ID
            // ex: document.querySelector("#sobre")
            const secaoAlvo = document.querySelector(href);

            // 6. Calcula a posição da seção na página
            // 'offsetTop' nos dá a distância (em pixels) do topo da seção
            // até o topo da página.
            // Subtraímos 70px para compensar a altura do nosso menu fixo!
            const posicaoAlvo = secaoAlvo.offsetTop - 70; 

            // 7. Faz a mágica da rolagem suave!
            // 'window.scrollTo' é o comando para rolar a página
            window.scrollTo({
                top: posicaoAlvo,      // Rolar ATÉ esta posição
                behavior: 'smooth'   // Fazer isso de forma SUAVE


                
            });
        });
    });

});
// Arquivo: script.js (Adicionar no final)

// --- LÓGICA DO MENU HAMBÚRGUER ---

// Seleciona o ícone do hambúrguer e o menu de navegação
const menuHamburger = document.querySelector('.menu-hamburger');
const menuNavegacao = document.querySelector('.menu-navegacao');

// Adiciona o evento de clique no ícone do hambúrguer
menuHamburger.addEventListener('click', () => {
    // A cada clique, ele ADICIONA ou REMOVE a classe 'ativo' do menu
    menuNavegacao.classList.toggle('ativo');
});

// --- FECHAR O MENU AO CLICAR EM UM LINK (NO MOBILE) ---

// Reutiliza a variável 'menuLinks' que já tínhamos declarado no topo do arquivo
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Se o menu estiver aberto, remove a classe 'ativo' para fechá-lo
        if (menuNavegacao.classList.contains('ativo')) {
            menuNavegacao.classList.remove('ativo');
        }
    });
});
