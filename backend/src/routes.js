const {Router} = require('express');
const UserController = require('./controllers/UserController');


const routes = Router();

function checkUserExists(req, res, next) {
  if (!req.body.nome) {
    return res.status(400).json({ error: "Nome do usuário e obrigatório "})
  }

  return next();
}

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

routes.post('/users', checkUserExists,UserController.store);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);



module.exports = routes;

