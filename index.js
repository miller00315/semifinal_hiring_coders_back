const express = require('express'); // Importação do pacote do servidor express
const cors = require('cors'); // Importação do pacote para tratar compartilhamento de recursos de origin privada
const bodyParser = require('body-parser'); // Importação do body parser para tratar solicitações de urls
const helmet = require('helmet'); // Importação de biblioteca para impedir ataques desconhecidos

// Instanciando o server Express
const app = express();

app.use(cors()); // Aplicando cors
app.use(helmet()); // Aplicando proteção contra ataques desconhecidos
app.use(bodyParser.urlencoded({ extended: false })); //aplicando bodyParser.urlencoded
app.use(bodyParser.json()); //aplicando bodyParser.json

app.disable('x-powered-by');

app.listen(3000, () => {
  console.log('Escutando na porta 3000');
});
