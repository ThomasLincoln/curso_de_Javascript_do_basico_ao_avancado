const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController.js");
const {loginRequired} = require('./src/middlewares/middleware')

// Rotas da home
route.get("/", homeController.index);

// Rotas de login
route.get("/login/index", loginController.index);
//? quando for para a roda register (você poe ela no method do forms,
//? ele irá chamar a função register que foi exportada)
route.post("/login/register", loginController.register);
route.post("/login/logar", loginController.logar);
route.get("/login/logout", loginController.logout);

// Rotas de contato
route.get("/contato/index", loginRequired, contatoController.index);
route.post("/contato/register", loginRequired, contatoController.register);
route.get("/contato/index/:id", loginRequired, contatoController.editIndex);
route.post("/contato/edit/:id", loginRequired, contatoController.edit);
route.get("/contato/delete/:id", loginRequired, contatoController.delete);

module.exports = route;
