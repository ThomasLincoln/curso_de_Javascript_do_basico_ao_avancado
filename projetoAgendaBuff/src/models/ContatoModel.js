const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  idUser: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now },
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

function Contato(body, id) {
  this.id = id;
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function () {
  this.valida();
  // console.log("o id é "+this.id)
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
};

Contato.prototype.valida = function () {
  this.cleanUp();
  if (this.body.email && !validator.isEmail(this.body.email)) {
    this.errors.push("E-mail inválido");
  }

  if (!this.body.nome) this.errors.push("Nome é um campo obrigatório");

  if (!this.body.email && !this.body.phone)
    this.errors.push("Pelo menos um contato deve ser adcionado");
};

//? verifica se os campos estão preenchidos
Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== "string") {
      this.body[key] = "";
    }
  }
  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    phone: this.body.phone,
    idUser: this.id,
  };
};

Contato.prototype.edit = async function (id) {
  if (typeof id !== "string") return;
  this.valida();
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {
    new: true,
  });
};

// métodos estaticos
Contato.buscaPorId = async function (id) {
  if (typeof id !== "string") {
    return;
  }
  const contato = await ContatoModel.findById(id);
  return contato;
};

Contato.buscaContato = async function (id) {
  // console.log('opa')
  
  const contatos = await ContatoModel.find()
  .sort({criadoEm: -1});
  
  const contatosATT = await Contato.removePorId(id, contatos);
  // console.log(contatosATT)
  // console.log("Esses são os contatos: " + contatosatt)
  return contatosATT;
};

Contato.delete = async function (id) {
  if (typeof id !== "string") {
    return;
  }  
  const contato = await ContatoModel.findByIdAndDelete(id);
  return contato;
};

Contato.removePorId = async function (id, arr){
  
  for(let contato of arr){
    if(id !== contato.idUser){
      arr.pop(contato)
    }
  }
  return arr;
  // return arr.map(function (obj){
  //   if(obj.idUser == id) return;
  //   else return false;
  // }).filter(Boolean)
}

module.exports = Contato;
