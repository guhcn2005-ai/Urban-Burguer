const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '443518Gg@',
    database: 'burgers_db'
});

// Inserir um burger
const nome = "X-Burger";
const preco = 25;

const sql = 'INSERT INTO burgers (nome, preco) VALUES (?, ?)';
connection.query(sql, [nome, preco], (err, results) => {
    if (err) {
        console.error("Erro no MySQL:", err);
        return;
    }
    console.log("Burger inserido com sucesso:", results);
});