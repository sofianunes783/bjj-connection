const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Banco de dados em memória (temporário)
const alunos = [];

// Rota de teste
app.get('/', (req, res) => {
  res.send('API do BJJ Connection funcionando!');
});

// Rota de cadastro de alunos
app.post('/api/students', (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }

  const novoAluno = { id: alunos.length + 1, nome, email };
  alunos.push(novoAluno);

  res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso', aluno: novoAluno });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
