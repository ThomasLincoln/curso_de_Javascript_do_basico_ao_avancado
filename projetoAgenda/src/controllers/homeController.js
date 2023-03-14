const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContato();
    res.render('index', {contatos});
    // console.log(contatos)
    return;
}
