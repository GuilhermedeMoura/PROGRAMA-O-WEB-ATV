
// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Guilherme de Moura Santos - 2110362
// DATA: 19/05/2023

class SurvivorModel {
    constructor() {
        this.survivors = [
            {
                id: 1,
                name: 'Joel',
                age: 45,
                weapons: [1, 2], // IDs das armas relacionadas
                supplies: [1, 2, 3] // IDs dos itens de suprimentos relacionados
            },
            {
                id: 2,
                name: 'Ellie',
                age: 19,
                weapons: [3], // IDs das armas relacionadas
                supplies: [4, 5] // IDs dos itens de suprimentos relacionados
            }
        ];

        this.weapons = [
            { id: 1, name: 'Revólver' },
            { id: 2, name: 'Faca' },
            { id: 3, name: 'Arco' }
        ];

        this.supplies = [
            { id: 1, name: 'Kit de primeiros socorros' },
            { id: 2, name: 'Água' },
            { id: 3, name: 'Comida enlatada' },
            { id: 4, name: 'Bandagens' },
            { id: 5, name: 'Bateria' }
        ];
    }

    getAll() {
        return this.survivors;
    }

    getById(id) {
        const survivor = this.survivors.find(survivor => survivor.id === parseInt(id));
        if (!survivor) return null;

        const relatedWeapons = this.weapons.filter(weapon => survivor.weapons.includes(weapon.id));
        const relatedSupplies = this.supplies.filter(supply => survivor.supplies.includes(supply.id));

        return {
            ...survivor,
            weapons: relatedWeapons,
            supplies: relatedSupplies
        };
    }

    // Restante dos métodos...
}

module.exports = SurvivorModel;