const User = require('../models/Users');

const {deleteUser, updateUserData, findUserToDelete } = require('../services/userService');

  //index, show, store, update, destroy
module.exports = {

  async index(request, response) {
    const { page = 1 } = request.query;

    const users = await User.paginate({}, {page, limit: 10 });

    return response.json(users);
  },

  async destroy(req, res) {
    const {id } = req.params;
    const userExists = await findUserToDelete(id);
    const result = userExists ? {message: `O usuário ${userExists.nome} foi removido com sucesso`} : { 
      message: 'Usuário não encontrado!'
    }

    if(userExists) {
      await deleteUser(id);
    }

    return res.json(result);
  },

  async show(request, response) {
    const user = await User.findById(request.params.id);
    return response.json(user);
  },

  async update(req,res) {
   const { id } = req.params;
   const {nome, dataNascimento, cpf, celular, email, endereco, observacoes} = req.body;
   
   const user = await updateUserData(id, nome, dataNascimento, cpf, celular, email, endereco, observacoes);

    return res.json(user);
  },

  async store (request, response) {
    const {nome, dataNascimento, cpf, celular, email, endereco, observacoes} = request.body;
    
   let user = await User.findOne({ cpf, nome });

   if(!user) {
     user = await User.create({
      nome, 
      dataNascimento,
      cpf,
      celular, 
      email,
      endereco,
      observacoes
    });
   }
 
    return response.json(user);
  }
};