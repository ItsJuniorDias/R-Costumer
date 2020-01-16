const {Router} = require('express');
const UserController = require('./controllers/UserController');


const routes = Router();

function checkUserExists(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ error: "Nome do usuário é obrigatório "})
  }
  if (!req.body.dataNascimento) {
    return res.status(400).json({ error: "A data de nascimento é obrigatório "})
  }
  if (!req.body.cpf) {
    return res.status(400).json({ error: "O CPF é obrigatório "})
  }
  if (!req.body.email) {
    return res.status(400).json({ error: "O email é obrigatório "})
  }
  if (!req.body.endereco) {
    return res.status(400).json({ error: "O endereco é obrigatório "})
  }
  return next();
}


routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

routes.post('/users', checkUserExists,UserController.store);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);



module.exports = routes;

