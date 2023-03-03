const Contato = require("../models/ContatoModel");

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContato(req.session.user._id);
    res.render('index', {contatos});
    // console.log(contatos)
    return;
}
