const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  dataNascimento: Number,
  cpf: Number,
  celular: Number,
  email: String,
  endereco: String,
  observacoes: String,
});

module.exports = mongoose.model('User', UserSchema);