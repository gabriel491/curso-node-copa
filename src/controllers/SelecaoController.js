import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  // Vai listar todas as seleções
  async index(req, res) {
    const row = await SelecaoRepository.findAll();
    res.status(200).json(row);
  }

  // vai listar uma seleção específica por id
  async show(req, res) {
    const id = req.params.id;
    const row = await SelecaoRepository.findById(id);
    res.status(200).json(row);
  }

  // vai cadastrar uma nova seleção
  async store(req, res) {
    // aqui vai pegar o corpo da requisição, no caso o objeto completo
    const { selecao, grupo } = req.body;
    const row = await SelecaoRepository.create(selecao, grupo);
    res.status(200).json(row);
  }

  async update(req, res) {
    const id = req.params.id;
    const selecao = req.body;
    const row = await SelecaoRepository.update(selecao, id);
    res.status(200).json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await SelecaoRepository.delete(id);
    res.status(200).json(row);
  }
}

// padrão singleton
export default new SelecaoController();