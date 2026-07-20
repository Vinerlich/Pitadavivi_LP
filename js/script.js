// ==========================================
// BANCO DE DADOS EM ORDEM ALFABÉTICA COM SABORES INTERNOS
// ==========================================
const bancoProdutosModal = {
    antepastos: {
        titulo: "Antepastos da Casa",
        itens: [
            { id: 4, nome: "Caponata de Berinjela", preco: 26.00, tag: "Artesanal", desc: "Com uvas passas, castanhas e azeite extra virgem.", foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    bolos: {
        titulo: "Bolos de Festa",
        itens: [
            { id: 5, nome: "Bolo de Festa Red Velvet", preco: 85.00, tag: "Pitada de Amor", desc: "Massa aveludada vermelha com recheio cremoso de cream cheese.", foto: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    caseirinhos: {
        titulo: "Caseirinhos Especiais",
        itens: [
            { id: 6, nome: "Bolo de Cenoura Vulcão", preco: 28.00, tag: "Mais Pedido", desc: "Tradicional bolo fofinho com cobertura generosa de brigadeiro.", foto: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    docinhos: {
        titulo: "Docinhos Finos",
        itens: [
            { id: 7, nome: "Brigadeiro Gourmet (Unidade)", preco: 4.50, tag: "Gourmet", desc: "Feito com chocolate belga 54% cacau.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    geleias: {
        titulo: "Geleias Artesanais",
        itens: [
            { id: 1, nome: "Geleia de Amora com manjericão", preco: 18.50, tag: "Pitada de Amor", desc: "Pedaços frescos de amora silvestre e toque sutil de manjericão.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
            { id: 2, nome: "Geleia de Damasco Artesanal", preco: 22.00, tag: "Pitada de Amor", desc: "Textura cremosa e pedaços marcantes de damasco selecionado.", foto: "https://images.unsplash.com/photo-1622484211148-7163014a706b?auto=format&fit=crop&w=150&q=80" },
            { id: 3, nome: "Geleia de Pimenta Premium", preco: 24.50, tag: "Pitada Quentinha", desc: "Equilíbrio perfeito de ardência média e doçura.", foto: "https://images.unsplash.com/photo-1589135061613-7924ef9ff715?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    kits: {
        titulo: "Kits & Presentes",
        itens: [
            { id: 8, nome: "Kit Café da Manhã Completo", preco: 95.00, tag: "Especial", desc: "Acompanha 1 Pão, 1 Geleia da sua escolha e 1 Caseirinho pequeno.", foto: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    "paes-doces": { titulo: "Pães Doces", itens: [] },
    "paes-salgados": {
        titulo: "Pães de Fermentação Natural",
        itens: [
            { id: 9, nome: "Pão Campanha Sourdough", preco: 24.00, tag: "Sourdough", desc: "Fermentação lenta de 36 horas, miolo aerado e casca rústica.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" }
        ]
    },
    "tortas-doces": { titulo: "Tortas Doces", itens: [] },
    "tortas-salgadas": { titulo: "Tortas Salgadas", itens: [] }
};

// ==========================================
// ESTADO GLOBAL DA APLICAÇÃO
// ==========================================
let carrinho = [];
let valorFreteGlobal = 0;

// INICIALIZAÇÃO DO SITE
document.addEventListener("DOMContentLoaded", () => {
    configurarCalendario72h();
});

// ==========================================
// CONTROLE DO POP-UP (MODAL DE SABORES)
// ==========================================
function abrirModal(categoriaChave) {
    const modal = document.getElementById('modal-sabores');
    const titulo = document.getElementById('modal-titulo-categoria');
    const lista = document.getElementById('modal-lista-sabores');
    
    const categoria = bancoProdutosModal[categoriaChave] || { titulo: "Opções Disponíveis", itens: [] };

    titulo.innerText = categoria.titulo;
    lista.innerHTML = '';

    if (!categoria.itens || categoria.itens.length === 0) {
        lista.innerHTML = "<p style='text-align: center; color: #7e6e65; font-style: italic; padding: 20px 0;'>Nenhum sabor cadastrado nesta categoria no momento.</p>";
        modal.style.display = 'flex';
        return;
    }

    // Injeta a linha de sabores com seletores numéricos individuais dentro do pop-up
    categoria.itens.forEach(item => {
        const tagClass = item.tag === "Pitada Quentinha" ? "product-tag quentinha" : "product-tag";
        lista.innerHTML += `
            <div class="flavor-item-row" style="position: relative; overflow: hidden;">
                <img src="${item.foto}" alt="${item.nome}" class="flavor-mini-img">
                <div class="flavor-details">
                    <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 2px;">${item.nome}</h4>
                    <p style="font-size: 13px; color: var(--text-muted); line-height: 1.4;">${item.desc}</p>
                    <span class="${tagClass}" style="position: static; font-size: 9px; padding: 2px 6px; margin-top: 5px; display: inline-block;">${item.tag}</span>
                </div>
                <div class="flavor-action" style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
                    <span class="price" style="color: #2BA662; font-weight: 700; font-size: 15px;">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
                    <div style="display: flex; gap: 6px; align-items: center;">
                        <input type="number" id="modal-qty-${item.id}" class="qty-input" value="1" min="1" style="width: 40px; padding: 2px;">
                        <button class="btn-order-action" style="padding: 6px 12px; font-size: 12px; border-radius: 4px;" 
                            onclick="adicionarDoModal(${item.id}, '${item.nome}', ${item.preco})">
                            + Carrinho
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    modal.style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-sabores').style.display = 'none';
}

// Fecha o modal ao clicar fora do card branco
window.onclick = function(event) {
    const modal = document.getElementById('modal-sabores');
    if (event.target == modal) {
        fecharModal();
    }
}

// CAPTURA QUANTIDADE E ADICIONA À SACOLA
function adicionarDoModal(id, nome, preco) {
    const qty = parseInt(document.getElementById(`modal-qty-${id}`).value) || 1;
    
    for(let i = 0; i < qty; i++) {
        carrinho.push({ nome, preco });
    }
    
    fecharModal();
    atualizarInterfaceCarrinho();
}

// ==========================================
// INTERFACE E RECALCULO DO CARRINHO
// ==========================================
function atualizarInterfaceCarrinho() {
    const listaHtml = document.getElementById('carrinho-itens');
    const subtotalHtml = document.getElementById('subtotal-valor');
    const totalGeralHtml = document.getElementById('total-geral');
    
    document.getElementById('top-cart-count').innerText = `${carrinho.length} itens`;

    if (carrinho.length === 0) {
        listaHtml.innerHTML = '<li class="empty-cart">Seu carrinho está vazio.</li>';
        subtotalHtml.innerText = 'R$ 0,00';
        document.getElementById('top-cart-total').innerText = 'R$ 0,00';
        totalGeralHtml.innerText = `R$ ${valorFreteGlobal.toFixed(2).replace('.', ',')}`;
        return;
    }

    listaHtml.innerHTML = '';
    let subtotal = 0;
    
    carrinho.forEach(item => {
        subtotal += item.preco;
        listaHtml.innerHTML += `
            <li class="cart-item">
                <span>${item.nome}</span>
                <strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong>
            </li>
        `;
    });

    subtotalHtml.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('top-cart-total').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    let totalGeral = subtotal + valorFreteGlobal;
    totalGeralHtml.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

// ==========================================
// REGRAS DE NEGÓCIO: CALENDÁRIO & CEP
// ==========================================
function configurarCalendario72h() {
    const dateInput = document.getElementById('delivery-date');
    if (dateInput) {
        const dataMinima = new Date();
        dataMinima.setDate(dataMinima.getDate() + 3);

        const ano = dataMinima.getFullYear();
        const mes = String(dataMinima.getMonth() + 1).padStart(2, '0');
        const dia = String(dataMinima.getDate()).padStart(2, '0');
        
        dateInput.min = `${ano}-${mes}-${dia}`;
    }
}

document.getElementById('postal-code').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});

// FRETE CONECTADO À API EM .NET
async function calcularFreteEDirecionar() {
    const inputElement = document.getElementById('postal-code');
    const resultDiv = document.getElementById('api-result');
    const cepLimpo = inputElement.value.replace(/\D/g, '');

    if (!cepLimpo || cepLimpo.length !== 8) {
        resultDiv.className = "result-box error";
        resultDiv.innerHTML = "<strong>Erro:</strong> Digite um CEP com 8 dígitos.";
        return;
    }

    resultDiv.className = "result-box loading";
    resultDiv.innerHTML = "<em>Mapeando frete na API Pitadavivi...</em>";

    try {
        const response = await fetch("http://localhost:5253/api/frete", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cepDestino: cepLimpo })
        });

        const data = await response.json();

        if (!response.ok) {
            valorFreteGlobal = 0;
            resultDiv.className = "result-box error";
            resultDiv.innerHTML = `<strong>Aviso:</strong> ${data.mensagem}`;
            atualizarInterfaceCarrinho();
            return;
        }

        valorFreteGlobal = data.valorFrete;
        resultDiv.className = "result-box success";
        resultDiv.innerHTML = `
            <strong>✓ Rota Atendida!</strong><br>
            📍 Região: ${data.logradouroDestino || 'Rua'}, ${data.bairroDestino}<br>
            🏙️ Cidade: ${data.cidadeDestino} - SP<br>
            💰 Taxa de Entrega: R$ ${data.valorFrete.toFixed(2).replace('.', ',')}
        `;
        atualizarInterfaceCarrinho();
    } catch (err) {
        valorFreteGlobal = 0;
        resultDiv.className = "result-box error";
        resultDiv.innerHTML = "<strong>Erro:</strong> Não foi possível conectar ao seu backend local .NET.";
        atualizarInterfaceCarrinho();
    }
}

function finalizarPedidoCompleto() {
    const dataEntrega = document.getElementById('delivery-date').value;
    if (carrinho.length === 0 || !dataEntrega || valorFreteGlobal === 0) {
        alert("Por favor, monte seu carrinho, selecione a data e calcule o seu frete.");
        return;
    }
    alert(`🎉 Encomenda Confirmada!\n📅 Reservado para: ${dataEntrega.split('-').reverse().join('/')}\nObrigado por comprar na Pitadavivi!`);
}