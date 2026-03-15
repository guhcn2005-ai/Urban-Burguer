let pedidos = [];

exports.listar = (req, res) => {
    res.json(pedidos);
};

exports.criar = (req, res) => {
    const { itens, total } = req.body;

    if (!itens || !Array.isArray(itens) || itens.length === 0) {
        return res.status(400).json({ error: "O campo 'itens' é obrigatório e deve ser um array" });
    }

    if (!total) {
        return res.status(400).json({ error: "O campo 'total' é obrigatório" });
    }

    const id = pedidos.length + 1;
    pedidos.push({ id, itens, total });
    res.json({ message: "Pedido criado com sucesso", id, itens, total });
};