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

let appointments = [];

// Rota para cadastrar um agendamento
app.post('/appointments', (req, res) => {
    const { patientName, date } = req.body;
    const appointment = { patientName, date };
    appointments.push(appointment);
    res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`);
});

// Rota para listar todos os agendamentos
app.get('/appointments', (req, res) => {
    res.status(200).json(appointments);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Nesse trecho de código, as dependências do express e body-parser são importadas para o projeto. O body-parser é usado para permitir o acesso aos dados enviados pelo cliente via método POST, contidos no objeto req.body. Uma variável chamada appointments é declarada para armazenar os agendamentos. Em seguida, é criada uma rota do tipo POST para a URL /appointments. Dentro dessa rota, as informações do agendamento (nome do paciente e data) são extraídas do objeto req.body. A partir dessas informações, um objeto appointment é criado e adicionado ao array de agendamentos. Por fim, é enviado uma resposta com status para indicar o sucesso da operação.