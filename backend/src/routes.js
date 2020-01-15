const {Router} = require('express');
const User = require('./models/Users');

const routes = Router();

routes.post('/users', async (request, response) => {
  const {nome, dataNascimento, cpf, celular, endereco, observacoes} = request.body;
  
 const user = await User.create({
    nome, 
    dataNascimento,
    cpf,
    celular,
    endereco,
    observacoes
  });
  return response.json(user);
});

module.exports = routes;

