//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Guilherme de Moura Santos - 2110362
//DATA: 09/05/2023

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let patients = [];

// Rota para cadastrar um paciente
app.post('/patients', (req, res) => {
    const { name, age, gender } = req.body;
    const patient = { name, age, gender };
    patients.push(patient);
    res.status(201).send(`Paciente ${name} cadastrado com sucesso.`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Nesse trecho de código, estamos importando as dependências express e body-parser. O body-parser é utilizado para permitir que possamos acessar os dados enviados pelo cliente via POST, que são armazenados no objeto req.body. Criamos uma variável patients para armazenar os pacientes cadastrados e uma rota POST para a URL /patients. As informações do paciente, como nome, idade e gênero, são extraídas do req.body e utilizadas para criar um objeto patient. Esse objeto é então adicionado ao array patients. Para indicar que o paciente foi cadastrado com sucesso, é enviada uma resposta com o status 201.