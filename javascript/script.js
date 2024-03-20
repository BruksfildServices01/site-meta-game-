

/* efeito do botoes */
function mostrarDetalhes(elementId) {
    const detalhes = document.getElementById(elementId);
    if (detalhes.style.display === 'none') {
        detalhes.style.display = 'block';
    } else {
        detalhes.style.display = 'none';
    }
}
/* efeito do botoes */


/*
document.getElementById('findShelly').addEventListener('click', function() {
    // Caminho para o arquivo JSON da Shelly
    var caminhoJson = "./personagens/descrição/json/Shelly.json";

    // Use fetch para carregar o arquivo JSON da Shelly
    fetch(caminhoJson)
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível encontrar o arquivo JSON: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // 'data' contém o objeto JSON carregado.
        // Aqui você pode mostrar os detalhes da Shelly ou indicar que ela foi encontrada.
        document.getElementById('resultado').innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
    })
    .catch(error => {
        // Se houver algum erro ao carregar o arquivo JSON:
        document.getElementById('resultado').textContent = 'Erro ao carregar o arquivo JSON: ' + error.message;
    });
});
*/
