//incluir as bibliotecas
// Gerenciar as requisições, rotas e urls, entre outras  funcionabilidades 
const express = require('express');
// Chamar a função express
const app = express();

// Criar a rota do tipo GET direcionando para a raiz do projeto
app.get('/', function (req, res) {
  //retornar para os site 
    res.send(`hello word `)
  });

  // iniciar o servidor na porta 8080
  app.listen(8080, function ()  {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
  });
  
  
