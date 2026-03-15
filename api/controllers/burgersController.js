const db = require('../models/db');

exports.listar = (req, res) => {
    db.query('SELECT * FROM burgers', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};        

exports.criar = (req, res) => {

    const { nome, preco} = req.body;

    db.query("INSERT INTO burgers (nome, preco) VALUES (?, ?)"),
    [nome, preco],
    (err, results) => {
        if (err) return res.status(500).json(err);

        res.json({
            message: "Burger criado com sucesso",
        });
    }
};