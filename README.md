# 🍔 Urban Burger — Sistema Web (V2)

Projeto web desenvolvido com **HTML, CSS e JavaScript puro**, simulando o site institucional e administrativo de uma hamburgueria fictícia chamada **Urban Burger**.  
Esta é a **versão 2 (V2)** do projeto, com foco em **organização de código, separação de responsabilidades e boas práticas de front-end**.

---

## 📌 Visão Geral

O Urban Burger é um projeto educacional criado para praticar conceitos fundamentais do desenvolvimento web, incluindo:

- Estruturação semântica com HTML
- Estilização moderna com CSS
- Interatividade e lógica de front-end com JavaScript
- Organização de arquivos e versionamento com Git/GitHub

A **V2** representa uma evolução significativa em relação à versão inicial, trazendo **estrutura profissional**, **tela de login** e **dashboard administrativo**.

---

## 🚀 Funcionalidades

### 🌐 Área Pública
- Página inicial institucional
- Página "Saiba Mais / Sobre Nós"
- Layout responsivo
- Design urbano e moderno

### 🔐 Área Administrativa
- Tela de login
- Dashboard administrativo
- Interface separada do site público
- Scripts dedicados para login e administração

> ⚠️ Observação:  
> O login é **simulado apenas no front-end**, sem back-end ou banco de dados.

---

## 🧱 Estrutura do Projeto (V2)

```text
Urban-Burger/
│
├── css/
│   ├── style.css          # Estilos principais do site
│   ├── style2.css         # Estilos complementares
│   ├── login.css          # Estilos da tela de login
│   └── adm.css            # Estilos do dashboard administrativo
│
├── imagens/
│   ├── fundo_img.png
│   ├── img_login.jpg
│   ├── usu-pic.png
│   └── demais imagens do projeto
│
├── script/
│   ├── script.js          # JS do site público
│   ├── login_script.js    # JS da tela de login
│   └── adm.js             # JS do dashboard
│
├── index.html             # Página inicial
├── saiba.html             # Página institucional
├── login.html             # Tela de login
├── adm.html               # Dashboard administrativo
└── README.md
