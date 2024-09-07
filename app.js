function pesquisar() {

    let campoPesquisa = document.getElementById("campo-pesquisa");

    let sectionResultados = document.getElementById("section-resultados");

    let resultados = "";

    for (let dado of dados) {
        if (dado.nome.includes(campoPesquisa.value)) {
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

    sectionResultados.innerHTML = resultados

}