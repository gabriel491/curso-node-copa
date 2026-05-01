import conexao from "../database/conexao.js";

class SelecaoRepository {
  create(selecao, grupo) {
    const sql =
      "INSERT INTO selecoes (selecao, grupo, createdAt, updatedAt) VALUES (?, ?, NOW(), NOW())";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, grupo], (erro, resultado) => {
        if (erro) return reject("Não foi possível cadastrar a seleção");
        // fazer o parse do resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM selecoes";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) return reject("Não foi possível localizar");
        // fazer o parse do resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id = ?";

    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) return reject("Não foi possível localizar");
        // fazer o parse do resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id = ?";

    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id], (erro, resultado) => {
        if (erro) return reject("Não foi possível atualizar a seleção");
        // fazer o parse do resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id = ?";

    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) return reject("Não foi possível remover a seleção");
        // fazer o parse do resultado
        const row = JSON.parse(JSON.stringify(resultado));
        return resolve(row);
      });
    });
  }
}

export default new SelecaoRepository();