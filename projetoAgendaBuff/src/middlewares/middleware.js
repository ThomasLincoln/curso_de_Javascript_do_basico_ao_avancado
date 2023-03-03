exports.middlewareGlobal = (req, res, next) => {
  //capturando as flash messages de error que estão na requisição
  // ? precisamos criar uma variavel local para cada um dos tipos de flash messages
  res.locals.errorsLogin = req.flash("errorsLogin");
  res.locals.errors = req.flash("errors");
  res.locals.sucess = req.flash("sucess");
  res.locals.user = req.session.user
  next();
};

exports.checkCSRFError = (err, req, res, next) => {
  if (err) {
    return res.render("404");
  }
  next();

};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req,res,next) =>{
  if(!req.session.user){
    req.flash('errors', 'Você precisa fazer login para realizar essa operação.')
    req.session.save(()=> res.redirect('/login/index'));
    return;
  }
  next()
}