function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); 

    if(!campoPesquisa ) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um piloto.</p>";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        
        if (dado.titulo.toLowerCase().startsWith(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }
    }
    if(!resultados){
        resultados =  "<p>Nenhum Piloto foi encontrado!</p>";
    }
    section.innerHTML = resultados;
}