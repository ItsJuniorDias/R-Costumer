const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  nome:{
    type: String,
    required: true
  },
  dataNascimento: {
    type: Number,
    required: true
  },
  cpf: {
    type: Number,
    required: true
  },
  celular: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  observacoes: String,
});

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);