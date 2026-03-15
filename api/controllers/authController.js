let usuarios = [];

exports.register = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "username e password são obrigatórios" });
    }
    usuarios.push({ username, password });
    res.json({ message: "Usuário registrado", username });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = usuarios.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: "Usuário ou senha incorretos" });
    }
    res.json({ message: "Login realizado", username });
};