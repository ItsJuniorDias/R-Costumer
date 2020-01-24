const User = require('../models/Users');

module.exports = {


  async updateUserData(id, nome, dataNascimento, cpf, celular, email, endereco, observacoes) {
    //nome avatar bio localização tecnologias

    const user = await User.findByIdAndUpdate(id, {
      nome,
      dataNascimento,
      cpf,
      celular,
      email,
      endereco,
      observacoes,
    });

    return user;
  },

  async findUserToDelete(id) {
    const user = User.findById(id);
    return user;
  },

  async deleteUser(id) {
    await User.findByIdAndDelete(id)
  },
}