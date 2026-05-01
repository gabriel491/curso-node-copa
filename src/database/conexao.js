const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306, // Porta padrão do MySQL
    user: "root",
    password: "123456",
    database: "dbcopa"
});

conexao.connect((err) => {
    if (err) {
        console.log("Erro ao conectar no banco: " + err);
    } else {
        console.log("Conectado ao MySQL com sucesso!");
    }
});

module.exports = conexao;