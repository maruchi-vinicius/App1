const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
   const body = request.body;
   
   return response.json({
    evento: 'Semana OmniStack 11',
    aluno: 'Cleiton Souza'
   });
});

module.exports = routes;