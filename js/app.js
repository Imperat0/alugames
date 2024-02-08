let jogosDevolvivos = 0;

function contarJogosAlugados() {
    console.log(`Total de jogos alugados : ${jogosDevolvivos}`)
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        alert("Deseja devolver mesmo o jogo?")
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar';
        jogosDevolvivos--;
    } else {
        botao.classList.add('dashboard__item__button--return')
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        jogosDevolvivos++;
    }

    contarJogosAlugados();

    document.addEventListener('DOMContentLoaded', function() {
        jogosDevolvivos = document.querySelectorAll('.dashboard__item__img--rented').length;
        contarJogosAlugados();
    });
}

