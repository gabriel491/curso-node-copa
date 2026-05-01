const express = require("express");
const app = express();
const { default: SelecaoController } = require("./controllers/SelecaoController");

// indicar para o Express ler o body com JSON
app.use(express.json());

// Rota para listar as seleções
app.get("/selecoes", SelecaoController.index);

// Rota para buscar seleção
app.get("/selecoes/:id", SelecaoController.show);

// Rota para cadastrar seleção
app.post("/selecoes/", SelecaoController.store);

//Rota para atualizar seleção
app.put("/selecoes/:id", SelecaoController.update);

// Rota para deletar seleção
app.delete("/selecoes/:id", SelecaoController.delete);

app.listen(8081, function () {
  console.log("Rodando na Porta: http://localhost:8081/");
});
