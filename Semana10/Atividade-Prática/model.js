
// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Guilherme de Moura Santos - 2110362
// DATA: 19/05/2023

class SurvivorModel {
  constructor() {
    this.survivors = [
      { id: 1, name: 'Joel', age: 45 }, // Inicializando a lista de sobreviventes com dados estáticos
      { id: 2, name: 'Ellie', age: 19 }
    ];
  }

  getAll() {
    return this.survivors; // Retorna todos os sobreviventes da lista
  }

  getById(id) {
    return this.survivors.find(survivor => survivor.id === parseInt(id)); // Encontra um sobrevivente específico pelo ID
  }

  add(survivor) {
    const newSurvivor = {
      id: this.survivors.length + 1, // Gera um novo ID para o sobrevivente
      name: survivor.name,
      age: survivor.age
    };
    this.survivors.push(newSurvivor); // Adiciona o novo sobrevivente à lista
    return newSurvivor; // Retorna o sobrevivente recém-adicionado
  }

  update(id, updatedSurvivor) {
    const survivor = this.survivors.find(survivor => survivor.id === parseInt(id)); // Encontra o sobrevivente a ser atualizado pelo ID
    if (!survivor) return null; // Verifica se o sobrevivente existe
    survivor.name = updatedSurvivor.name; // Atualiza o nome do sobrevivente
    survivor.age = updatedSurvivor.age; // Atualiza a idade do sobrevivente
    return survivor; // Retorna o sobrevivente atualizado
  }

  delete(id) {
    const survivor = this.survivors.find(survivor => survivor.id === parseInt(id)); // Encontra o sobrevivente a ser excluído pelo ID
    if (!survivor) return null; // Verifica se o sobrevivente existe
    const index = this.survivors.indexOf(survivor); // Encontra o índice do sobrevivente na lista
    this.survivors.splice(index, 1); // Remove o sobrevivente da lista
    return survivor; // Retorna o sobrevivente excluído
  }
}

module.exports = SurvivorModel; // Exporta a classe SurvivorModel para uso em outros arquivos