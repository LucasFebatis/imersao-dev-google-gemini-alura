function pesquisar() {

    let campoPesquisa = document.getElementById("campo-pesquisa");

    let sectionResultados = document.getElementById("section-resultados");

    if (!campoPesquisa.value) {
        sectionResultados.innerHTML = "<p> Para realizar uma busca, primeiro digite algo no campo acima </p>"
        return
    }

    let resultados = "";
    let nome = "";
    let descricao = "";

    campoPesquisa.value = campoPesquisa.value.toLowerCase()

    for (let dado of dados) {
        nome = dado.nome.toLowerCase() 
        descricao = dado.descricao.toLowerCase()

        if (nome.includes(campoPesquisa.value) || descricao.includes(campoPesquisa.value)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.video} target="_blank">Mais informações</a>
            </div>
            `
        }
    }


    if (!resultados) {
        sectionResultados.innerHTML = "<p> Busca não retornou nenhum dado </p>"
        return
    }

    sectionResultados.innerHTML = resultados

}