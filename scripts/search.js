const inputSearch = document.querySelector('#input-search')
const tBodySearch = document.querySelector("#tbody");
//const iconSearch = document.querySelector('.ph-magnifying-glass')

inputSearch.addEventListener('keyup', () => {
    let expressao = inputSearch.value

    let linhas = tBodySearch.getElementsByTagName('tr')

    for(let posicao in linhas) {
        if(true == isNaN(posicao)){
            continue
        }

        let conteudoDaLinha = linhas[posicao].innerHTML

        if(true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = ''
        } else {
            linhas[posicao].style.display = 'none'
        }
    }
})