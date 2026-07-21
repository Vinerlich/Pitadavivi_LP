// BANCO DE DADOS EM ORDEM ALFABÉTICA
const bancoSabores = {
    antepastos: [
        { nome: "Caponata de Berinjela", preco: 26.00, desc: "Com uvas passas, castanhas e azeite extra virgem.", foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" }
    ],
    bolos: [
        { nome: "Bolo de Cenoura com Brigadeiro", preco: 28.00, desc: "Tradicional bolo caseiro com cobertura vulcão.", foto: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80" },
        { nome: "Bolo de Festa Red Velvet", preco: 85.00, desc: "Massa aveludada com recheio de cream cheese.", foto: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=150&q=80" }
    ],
    docinhos: [
        { nome: "Brigadeiro Gourmet (Unidade)", preco: 4.50, desc: "Chocolate belga 54% cacau granulado puro.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" },
        { nome: "Beijinho Artesanal (Unidade)", preco: 4.00, desc: "Cremosidade de coco com cravo da índia.", foto: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=150&q=80" }
    ],
    geleias: [
        { nome: "Geleia de Frutas Vermelhas", preco: 22.50, desc: "Pedaços de morango, amora e framboesa.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Geleia de Damasco com Pimenta", preco: 24.00, desc: "Agridoce marcante, perfeita para queijos.", foto: "https://images.unsplash.com/photo-1622484211148-7163014a706b?auto=format&fit=crop&w=150&q=80" }
    ],
    kits: [
        { nome: "Kit Café da Manhã Completo", preco: 95.00, desc: "1 Pão, 1 Geleia, 1 Bolo Caseiro pequeno.", foto: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=150&q=80" }
    ],
    marmitas: [
        { nome: "Nhoque de Mandioquinha ao Sugo", preco: 24.90, desc: "Ultracongelado, sabor de massa fresca.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" }
    ],
    paes: [
        { nome: "Pão Campanha Sourdough", preco: 24.00, desc: "Fermentação natural de 36 horas.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Baguete Francesa Clássica", preco: 14.00, desc: "Crocância perfeita com miolo leve.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" }
    ],
    pets: [
        { nome: "Biscoito Integral de Abóbora", preco: 14.00, desc: "Sem conservantes, saudável para cães.", foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" }
    ],
    sazonais: [
        { nome: "Panetone Artesanal Trançado", preco: 65.00, desc: "Disponível apenas sob encomenda.", foto: "https://images.unsplash.com/photo-1512414472151-512c06cfb0b3?auto=format&fit=crop&w=150&q=80" }
    ],
    sobremesas: [
        { nome: "Banoffee na Travessa", preco: 45.00, desc: "Doce de leite artesanal, bananas e chantilly.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" }
    ]
};

// CONTROLE DO MODAL FLUTUANTE
function abrirModal(categoria) {
    const modal = document.getElementById('modal-sabores');
    const titulo = document.getElementById('modal-titulo-categoria');
    const lista = document.getElementById('modal-lista-sabores');
    
    const titulosFormatados = {
        antepastos: "Antepastos da Casa", bolos: "Bolos Caseiros & Festa", docinhos: "Docinhos Especiais",
        geleias: "Geleias Artesanais", kits: "Kits & Presentes", marmitas: "Marmitas Congeladas",
        paes: "Pães de Fermentação Natural", pets: "Linha Pet Saudável", sazonais: "Produtos Sazonais", 
        sobremesas: "Sobremesas Finas"
    };

    titulo.innerText = titulosFormatados[categoria] || "Opções Disponíveis";
    lista.innerHTML = '';

    const sabores = bancoSabores[categoria] || [];
    
    sabores.forEach(sabor => {
        lista.innerHTML += `
            <div class="flavor-item-row">
                <img src="${sabor.foto}" alt="${sabor.nome}" class="flavor-mini-img">
                <div class="flavor-details">
                    <h4>${sabor.nome}</h4>
                    <p>${sabor.desc}</p>
                </div>
                <div class="flavor-action">
                    <span class="price">R$ ${sabor.preco.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-add" style="padding: 6px 12px; font-size: 12px;" 
                        onclick="adicionarAoCarrinho('${sabor.nome}', ${sabor.preco}); fecharModal();">
                        + Adicionar
                    </button>
                </div>
            </div>
        `;
    });

    modal.style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-sabores').style.display = 'none';
}

// Fechar modal ao clicar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modal-sabores');
    if (event.target == modal) {
        fecharModal();
    }
}

// ESTADO GLOBAL DA COMPRA
let carrinho = [];
let valorFreteGlobal = 0;

// REGRA DE NEGÓCIO: BLOQUEAR CALENDÁRIO PARA 72H (3 DIAS) DE ANTECEDÊNCIA
const dateInput = document.getElementById('delivery-date');
if(dateInput) {
    const dataMinima = new Date();
    dataMinima.setDate(dataMinima.getDate() + 3);

    const ano = dataMinima.getFullYear();
    const mes = String(dataMinima.getMonth() + 1).padStart(2, '0');
    const dia = String(dataMinima.getDate()).padStart(2, '0');
    
    dateInput.min = `${ano}-${mes}-${dia}`;
}

// Máscara Automática para o CEP
document.getElementById('postal-code').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
});

// ADICIONAR ITENS AO CARRINHO
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarInterfaceCarrinho();
}

// ATUALIZAR VALORES EM TELA
function atualizarInterfaceCarrinho() {
    const listaHtml = document.getElementById('carrinho-itens');
    const subtotalHtml = document.getElementById('subtotal-valor');
    const totalGeralHtml = document.getElementById('total-geral');
    
    if (carrinho.length === 0) {
        listaHtml.innerHTML = '<li class="empty-cart">Seu carrinho está vazio.</li>';
        subtotalHtml.innerText = 'R$ 0,00';
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
    let totalGeral = subtotal + valorFreteGlobal;
    totalGeralHtml.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

// CHAMADA POST CONECTADA DIRETAMENTE À SUA API .NET C#
async function calcularFreteEDirecionar() {
    const inputElement = document.getElementById('postal-code');
    const resultDiv = document.getElementById('api-result');
    const cepLimpo = inputElement.value.replace(/\D/g, '');

    if (!cepLimpo || cepLimpo.length !== 8) {
        resultDiv.className = "result-box error";
        resultDiv.innerHTML = "<strong>Erro:</strong> Digite um CEP com 8 números.";
        return;
    }

    resultDiv.className = "result-box loading";
    resultDiv.innerHTML = "<em>Consultando rota e valores na API Pitadavivi...</em>";

    const API_URL = "http://localhost:5253/api/frete"; 

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cepDestino: cepLimpo })
        });

        const data = await response.json();

        if (!response.ok) {
            valorFreteGlobal = 0;
            resultDiv.className = "result-box error";
            resultDiv.innerHTML = `<strong>Bloqueio de Entrega:</strong> ${data.mensagem}`;
            atualizarInterfaceCarrinho();
            return;
        }

        valorFreteGlobal = data.valorFrete;
        
        resultDiv.className = "result-box success";
        resultDiv.innerHTML = `
            <strong>✓ Rota Mapeada!</strong><br>
            📍 Região: ${data.logradouroDestino || 'Logradouro'}, ${data.bairroDestino}<br>
            🏙️ Cidade: ${data.cidadeDestino} - SP<br>
            🛣️ Distância Real: ${data.distanciaKm} km<br>
            💰 Taxa de Entrega: R$ ${data.valorFrete.toFixed(2).replace('.', ',')}
        `;

        atualizarInterfaceCarrinho();

    } catch (err) {
        valorFreteGlobal = 0;
        resultDiv.className = "result-box error";
        resultDiv.innerHTML = "<strong>Erro:</strong> Não foi possível se conectar à sua API local .NET.";
        atualizarInterfaceCarrinho();
    }
}

// CONFIRMAÇÃO DO PEDIDO
function finalizarPedidoCompleto() {
    const dataEntrega = document.getElementById('delivery-date').value;
    
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Escolha algum item acima.");
        return;
    }
    if (!dataEntrega) {
        alert("Por favor, selecione uma data no calendário para a sua entrega.");
        return;
    }
    if (valorFreteGlobal === 0) {
        alert("Por favor, calcule um CEP de entrega válido antes de finalizar.");
        return;
    }

    alert(`🎉 Pedido Confirmado com Sucesso!\nReservado para o dia: ${dataEntrega.split('-').reverse().join('/')}\nObrigado por comprar na Pitadavivi!`);
}