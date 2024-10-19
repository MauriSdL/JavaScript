// Carregar as variáveis de ambiente do arquivo .env
require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
