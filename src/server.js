const express = require('express');
const logger = require('./config/logger');
const { client } = require('./services/whatsappClient');
const sendGroupRoute = require('./routes/sendGroup');
const sendUserRoute = require('./routes/sendUser');
const logRequest = require('./middlewares/logRequest');

const app = express();
const PORT = 3000;

// 🔒 Ativa o trust proxy para capturar corretamente o IP real
app.set('trust proxy', true);

app.use(express.json());
app.use(logRequest);

// Rotas
app.use('/api', sendGroupRoute);
app.use('/api', sendUserRoute);

app.listen(PORT, () => {
  logger.info(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

client.initialize();
