// middleware que será respnsável por verificar login e passar dados adiante

import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['É necessáio realizar login'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    // token é válido
    const dadosUsuario = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dadosUsuario;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userEmail = email;
    req.userId = id;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
