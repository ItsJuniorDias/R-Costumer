const {Router} = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);

routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);



module.exports = routes;

