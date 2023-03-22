/* eslint-disable quotes */
import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: "Thomas",
        sobrenome: "Lincoln",
        email: "thomas@gmail.com",
        idade: 1212,
        peso: 200,
        altura: 2.5,
        updated_at: '23',
      });
      console.log(novoAluno);
      res.json(novoAluno);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
