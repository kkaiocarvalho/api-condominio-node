import express from 'express';
import router from './routes.js';
import { createTable } from './controller/Moradores.js';

const app = express();

app.use(express.json());
app.use(router);

createTable().then(() => {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`API rodando na porta ${PORT}.`));
});
