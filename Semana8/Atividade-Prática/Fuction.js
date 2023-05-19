// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Guilherme de Moura Santos - 2110362 
// DATA: 19/05/2023

// Função para adicionar um item à lista
function adicionarItem() {
    // Obtém o elemento de input pelo seu ID
    var input = document.getElementById("item");
    // Obtém o elemento da lista pelo seu ID
    var lista = document.getElementById("lista");
    // Cria um novo elemento de item de lista (<li>)
    var novoItem = document.createElement("li");
    // Define o texto do novo item como o valor do input
    novoItem.innerText = input.value;
    // Adiciona o novo item à lista
    lista.appendChild(novoItem);
    // Limpa o valor do input
    input.value = "";
}
