const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  return res.render("contato", { contato: {} });
};

exports.register = async (req, res) => {
  try {
    const contatoAux = new Contato(req.body);
    // console.log(contatoAux.prototype)
    await contatoAux.register();
    if (contatoAux.errors.length > 0) {
      req.flash("errors", contatoAux.errors);
      req.session.save(() => res.redirect(`/contato/index`));
      return;
    }
    req.flash("sucess", "Contato criado com sucesso");
    req.session.save(() =>
      res.redirect(`/contato/index/${contatoAux.contato._id}`)
    );
    return;
  } catch (e) {
    console.log(
      "-------------------------------------ERRROR-----------------------------------"
    );
    console.log(e);
    res.render("404");
  }
};

exports.editIndex = async (req, res) => {
  if (!req.params.id) return res.render("404");
  const contato = await Contato.buscaPorId(req.params.id);
  if (!contato) return res.render("404");
  res.render("contato", { contato });
};

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render("404");
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect(`/contato/index`));
      return;
    }
    req.flash("sucess", "Contato editado com sucesso");
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`)
    );
    return;
  } catch (e) {
    console.log(e);
    res.render("404");
  }
};

exports.delete = async (req, res) => {
  if (!req.params.id) return res.render("404");
  
  const contato = await Contato.delete(req.params.id);
  console.log(contato)
  if (!contato) return res.render("404");

  req.flash("sucess", "Contato apagado com sucesso");
  req.session.save(() =>
    res.redirect(`/`)
  );
};
