const User = require('../models/Users');

  //index, show, store, update, destroy
module.exports = {

  async index(request, response) {
    const { page = 1 } = request.query;

    const users = await User.paginate({}, {page, limit: 10 });

    return response.json(users);
  },

  async destroy(request,response) {
    await User.findByIdAndDelete(response.params.id);

    return response.send();
  },

  async show(request, response) {
    const user = await User.findById(request.params.id);
    return response.json(user);
  },

  async update(request,response) {
    const user = await User.findByIdAndUpdate(request.params.id, request.body, {new: true});

    return response.json(user);
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