let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

function abrirCarrinho() {
    const carrinho = document.querySelector('#carrinho'); // seletor do container do carrinho
    carrinho.classList.toggle('ativo'); // adiciona/remove classe para mostrar/esconder
}

// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Elementos do DOM
const carrinhoElement = document.getElementById('carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalElement = document.getElementById('total');
const btnCarrinho = document.getElementById('btn-carrinho');
const fecharCarrinho = document.getElementById('fechar-carrinho');
const finalizarPedido = document.getElementById('finalizar-pedido');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Função para abrir/fechar carrinho
function abrirCarrinho() {
    carrinhoElement.classList.add('ativo');
    overlay.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharCarrinhoFn() {
    carrinhoElement.classList.remove('ativo');
    overlay.classList.remove('ativo');
    document.body.style.overflow = 'auto';
}

// Event listeners
btnCarrinho.addEventListener('click', (e) => {
    e.preventDefault();
    abrirCarrinho();
});

fecharCarrinho.addEventListener('click', fecharCarrinhoFn);
overlay.addEventListener('click', fecharCarrinhoFn);

// Função para adicionar item ao carrinho
function adicionarCarrinho(nome, preco, imagem) {
    // Verificar se o item já está no carrinho
    const itemExistente = carrinho.find(item => item.nome === nome);
    
    if (itemExistente) {
        // Se já existe, aumenta a quantidade
        itemExistente.quantidade += 1;
    } else {
        // Se não existe, adiciona novo item
        carrinho.push({
            nome,
            preco,
            imagem,
            quantidade: 1
        });
    }
    
    // Atualizar carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualizar exibição do carrinho
    atualizarCarrinho();
    
    // Mostrar feedback visual
    mostrarFeedback(`${nome} adicionado ao carrinho!`);
    
    // Abrir carrinho automaticamente
    abrirCarrinho();
}

// Função para remover item do carrinho
function removerItem(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Função para atualizar quantidade
function atualizarQuantidade(nome, novaQuantidade) {
    if (novaQuantidade <= 0) {
        removerItem(nome);
        return;
    }
    
    const item = carrinho.find(item => item.nome === nome);
    if (item) {
        item.quantidade = novaQuantidade;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    // Limpar lista
    listaCarrinho.innerHTML = '';
    
    // Se o carrinho estiver vazio
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<div class="carrinho-vazio">Seu carrinho está vazio</div>';
        totalElement.textContent = '0.00';
        return;
    }
    
    // Calcular total
    let total = 0;
    
    // Adicionar cada item ao carrinho
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'item-carrinho';
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="info-item">
                <h4>${item.nome}</h4>
                <div class="preco-item">R$ ${item.preco.toFixed(2)}</div>
                <div class="controles-item">
                    <button onclick="atualizarQuantidade('${item.nome}', ${item.quantidade - 1})">-</button>
                    <span>${item.quantidade}</span>
                    <button onclick="atualizarQuantidade('${item.nome}', ${item.quantidade + 1})">+</button>
                </div>
                <button class="remover-item" onclick="removerItem('${item.nome}')">Remover</button>
            </div>
        `;
        
        listaCarrinho.appendChild(itemElement);
    });
    
    // Atualizar total
    totalElement.textContent = total.toFixed(2);
}

// Função para mostrar feedback visual
function mostrarFeedback(mensagem) {
    // Criar elemento de feedback
    const feedback = document.createElement('div');
    feedback.textContent = mensagem;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--green);
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 10001;
        font-size: 1.4rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    // Remover após 3 segundos
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Finalizar pedido
finalizarPedido.addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const confirmacao = confirm(`Confirmar pedido no valor de R$ ${total.toFixed(2)}?`);
    
    if (confirmacao) {
        alert('Pedido realizado com sucesso! Obrigado pela preferência.');
        // Limpar carrinho
        carrinho = [];
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarrinho();
        fecharCarrinhoFn();
    }
});

// Inicializar carrinho quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
});

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
