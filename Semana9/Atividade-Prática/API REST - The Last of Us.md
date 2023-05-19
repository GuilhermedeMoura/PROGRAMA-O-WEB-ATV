<!-- 
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Guilherme de Moura Santos - 2110362 
DATA: 19/05/2023 
-->

GET /api/survivors - Recuperar a lista de sobreviventes

POST /api/survivors - Criar um novo sobrevivente

GET /api/survivors/{survivor_id} - Recuperar informações de um sobrevivente específico por ID

PUT /api/survivors/{survivor_id} - Atualizar informações de um sobrevivente específico por ID

DELETE /api/survivors/{survivor_id} - Excluir um sobrevivente específico por ID

<!-- 
Esses endpoints permitem que você realize operações básicas de CRUD (Create, Read, Update, Delete) em relação aos sobreviventes. Por exemplo, com o endpoint GET /api/survivors, você pode obter a lista de todos os sobreviventes. O endpoint POST /api/survivors permite criar um novo sobrevivente enviando os dados relevantes no corpo da solicitação.

Ao usar os endpoints GET /api/survivors/{survivor_id}, PUT /api/survivors/{survivor_id} e DELETE /api/survivors/{survivor_id}, você pode interagir com um sobrevivente específico com base em seu ID. Por exemplo, o endpoint GET /api/survivors/123 recupera as informações do sobrevivente com o ID 123.

Lembre-se de que essa é apenas uma sugestão de design de API com base no tema "The Last of Us". Os detalhes exatos da estrutura da API, autenticação, validações de dados e outros recursos dependerão dos requisitos e especificações do seu projeto. -->