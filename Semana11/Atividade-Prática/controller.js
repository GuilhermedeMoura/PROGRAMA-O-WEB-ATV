
// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Guilherme de Moura Santos - 2110362
// DATA: 19/05/2023

const SurvivorModel = require('./SurvivorModel');

class SurvivorController {
    // Método para recuperar todos os sobreviventes
    static async getAll(req, res) {
        try {
            const survivors = await SurvivorModel.getAll();
            res.json(survivors);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao buscar os sobreviventes');
        }
    }

    // Método para recuperar um sobrevivente por ID
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const survivor = await SurvivorModel.getById(id);
            if (!survivor) {
                res.status(404).send('Sobrevivente não encontrado');
            } else {
                res.json(survivor);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao buscar o sobrevivente');
        }
    }

    // Método para criar um novo sobrevivente
    static async create(req, res) {
        try {
            const survivorData = req.body;
            const newSurvivor = await SurvivorModel.add(survivorData);
            res.status(201).json(newSurvivor);
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao criar o sobrevivente');
        }
    }

    // Método para atualizar um sobrevivente existente
    static async update(req, res) {
        try {
            const { id } = req.params;
            const survivorData = req.body;
            const updatedSurvivor = await SurvivorModel.update(id, survivorData);
            if (!updatedSurvivor) {
                res.status(404).send('Sobrevivente não encontrado');
            } else {
                res.json(updatedSurvivor);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao atualizar o sobrevivente');
        }
    }

    // Método para remover um sobrevivente
    static async remove(req, res) {
        try {
            const { id } = req.params;
            const removedSurvivor = await SurvivorModel.delete(id);
            if (!removedSurvivor) {
                res.status(404).send('Sobrevivente não encontrado');
            } else {
                res.json(removedSurvivor);
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao remover o sobrevivente');
        }
    }
}

module.exports = SurvivorController;