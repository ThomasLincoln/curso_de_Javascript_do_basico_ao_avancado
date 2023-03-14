const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  if(req.session.user) return res.render('login-logado')
  return res.render("login");
};

// ? função para registrar usuário (precisa ser async, por conta do register
// ? será executado por baixo dos panos)
exports.register = async function (req, res) {
  try {
    // ? Aqui criamos um objeto login com as informações do nosso form
    const login = new Login(req.body);
    // res.send("some text")
    await login.register();

    // ? Se no processo do register, nós adcionarmos algum erro, ele irá retornar para o user
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login/index");
      });
      return;
    }
    // ? caso tudo de certo, ele irá retornar para o usuário
    req.flash("sucess", "Seu usuário foi criado");
    req.session.save(function () {
      return res.redirect("/login/index");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.logar = async (req, res) => {
  try {
    const user = new Login(req.body);
    await user.loginUser();

    if (user.errorsLogin.length > 0) {
      req.flash("errorsLogin", user.errorsLogin);
      req.session.save(function () {
        return res.redirect("/login/index");
      });
      return;
    }
    req.session.save(function () {
      req.session.user = user.user;
      return res.redirect("/");
    });


  } catch (e) {
    console.log('-------------------------')
    console.log(e);
    console.log('-------------------------')
    console.log(user.errorsLogin)
    return res.render('404')
  }
};

exports.logout = (req, res) =>{
  req.session.destroy();
  res.redirect('/')
}