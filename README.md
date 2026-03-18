# 🍔 Urban Burger v3

Projeto completo de aplicação para gerenciamento de pedidos de uma hamburgueria.

## 📌 Sobre o projeto

O **Urban Burger** é uma aplicação desenvolvida com foco em aprendizado de desenvolvimento backend, permitindo o gerenciamento de produtos, pedidos e usuários.

Este projeto demonstra habilidades práticas em construção de APIs, integração com banco de dados e organização de código em camadas.

---

## 🚀 Tecnologias utilizadas

### Backend

* Node.js (Express)
* API REST
* MySQL

### Ferramentas

* Git & GitHub
* Postman
* MySQL Workbench

---

## 🧱 Arquitetura

O projeto segue uma arquitetura organizada em camadas no backend:

* **Controllers** → Controlam as requisições e respostas
* **Routes** → Definem os endpoints da API
* **Models** → Conexão e estrutura do banco de dados
* **Server** → Inicialização da aplicação

Além disso, possui um **frontend separado** com páginas HTML, CSS e JavaScript.

---

## ⚙️ Funcionalidades

* Cadastro de produtos
* Listagem de produtos
* Criação de pedidos
* Gerenciamento de usuários
* Integração com banco de dados

---

## 📂 Estrutura do projeto

```
/api
 ├── controllers
 │    ├── authController.js
 │    ├── burgersController.js
 │    └── pedidosController.js
 │
 ├── models
 │    └── db.js
 │
 ├── routes
 │    ├── auth.js
 │    ├── burgers.js
 │    └── pedidos.js
 │
 ├── server.js
 ├── package.json

/frontend
 ├── css
 ├── imagens
 ├── script
 ├── adm.html
 ├── index.html
 ├── login.html
 └── saiba.html
```

/src
├── controller
├── service
├── repository
├── model
└── config

```

---

## 🔌 Endpoints principais

### Produtos
- `GET /products` → Lista todos os produtos
- `POST /products` → Cria um produto

### Pedidos
- `GET /orders` → Lista pedidos
- `POST /orders` → Cria pedido

### Usuários
- `POST /auth/register` → Cadastro
- `POST /auth/login` → Login

---

## 🛠️ Como rodar o projeto

### 1. Clonar o repositório
```

git clone [https://github.com/guhcn2005-ai/Urban-Burger.git]

```

### 2. Entrar na pasta
```

cd Urban-Burger

```

### 3. Configurar o banco de dados
- Criar banco no MySQL
- Atualizar credenciais no projeto

### 4. Rodar aplicação

#### Node.js:
```

npm install
npm start

```
```

---

## 🧪 Testes

Utilize o Postman para testar os endpoints da API.

---

## 📈 Melhorias futuras

* Autenticação com JWT
* Deploy em nuvem (AWS, Railway, etc)
* Interface frontend
* Sistema de pagamento

---

## 👨‍💻 Autor

Desenvolvido por Gustavo Henrique

---

## 📄 Licença

Este projeto está sob a licença MIT.
