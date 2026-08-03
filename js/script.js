// BANCO DE DADOS COMPLETO E ORGANIZADO POR CATEGORIAS
const bancoSabores = {
    antepastos: [
        { 
            nome: "Alichela (150g)", 
            preco: 33.00, 
            desc: "Clássica iguaria italiana à base de filés de anchova selecionados, salsinha, alcaparras e azeite extra virgem, com sabor intenso e marcante.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Babaganuche (150g)", 
            preco: 16.50, 
            desc: "Tradicional pasta de berinjela defumada na brasa, delicadamente temperada com tahine, limão e azeite de oliva.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Caponata de abobrinha (150g)", 
            preco: 18.00, 
            desc: "Delicada seleção de abobrinhas frescas refogadas lentamente com cebola, pimentões coloridos, azeitonas e ervas aromáticas no azeite.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Caponata de berinjela (150g)", 
            preco: 18.00, 
            desc: "Sofisticada receita mediterrânea de berinjelas cortadas em cubos, assadas com uvas-passas, nozes tostadas, pimentões e azeite de oliva de primeira linha.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Homus (150g)", 
            preco: 22.50, 
            desc: "Aveludada pasta de grão-de-bico finalizada com tahine artesanal, azeite extra virgem e um toque cítrico refrescante.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Patê de cebola (150g)", 
            preco: 13.50, 
            desc: "Creme leve e acetinado com cebolas levemente caramelizadas e um blend exclusivo de ervas finas.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Patê de ricota com damasco (150g)", 
            preco: 22.50, 
            desc: "Harmoniosa combinação de ricota fresca e artesanal com delicados pedaços de damascos turcos selecionados.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Patê tomate com manjericão (150g)", 
            preco: 15.00, 
            desc: "Preparação aromática de tomates maduros reduzidos lentamente, coroados com folhas frescas de manjericão.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Sardela (150g)", 
            preco: 16.50, 
            desc: "Tradicional iguaria mediterrânea à base de pimentões tostados, anchovas selecionadas e especiarias de sabor marcante.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        }
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
        { 
            nome: "Marmita: Almôndegas de Carne", 
            preco: 22.00, 
            desc: "Almôndegas de carne bovina, macarrão fusilli ou purê de batatas, molho ao sugo.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Berinjela ou Abobrinha Recheada", 
            preco: 22.00, 
            desc: "Recheada com carne moída bovina ou frango desfiado, molho ao sugo, arroz.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Carne com Abobrinha", 
            preco: 24.00, 
            desc: "Carne bovina refogada com abobrinha, purê de batatas.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Carne Moída", 
            preco: 20.00, 
            desc: "Carne bovina, arroz, feijão carioca, legumes.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Escondidinho", 
            preco: 22.00, 
            desc: "Carne bovina ou frango, purê de batatas salpicado com queijo.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Frango Grelhado", 
            preco: 20.00, 
            desc: "Filé grelhado, arroz, feijão carioca, mix de legumes.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Frango em Tiras", 
            preco: 20.00, 
            desc: "Tiras de frango grelhado, arroz à grega.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita: Strogonoff", 
            preco: 24.00, 
            desc: "Carne ou frango, arroz, batata assada.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita Gourmet: Filé Suíno", 
            preco: 35.00, 
            desc: "Filé mignon suíno ao molho de cerveja, arroz com brócolis.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Marmita Gourmet: Salmão", 
            preco: 42.00, 
            desc: "Posta de salmão ao molho de maracujá, arroz à grega.", 
            foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" 
        }
    ],
    leves: [
        { 
            nome: "Lanche Natural: Atum", 
            preco: 20.00, 
            desc: "Patê atum defumado, alface americana, tomate, cenoura, cebola roxa.", 
            foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Lanche Natural: Frango", 
            preco: 20.00, 
            desc: "Patê frango desfiado, alface americana, cenoura, tomate, cebola roxa.", 
            foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Lanche Natural: Peito de Peru", 
            preco: 20.00, 
            desc: "Peito de peru, alface americana, tomate, cenoura, ricota.", 
            foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Salada: Atum", 
            preco: 20.00, 
            desc: "Atum defumado, mix de folhas, tomate, cenoura, cebola roxa, molho.", 
            foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Salada: Frango", 
            preco: 20.00, 
            desc: "Frango desfiado, mix de folhas, cenoura, pepino, tomate, cebola roxa, molho.", 
            foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Salada: Macarrão", 
            preco: 20.00, 
            desc: "Atum defumado ou frango desfiado, mix de folhas, tomate, cenoura, cebola roxa, molho.", 
            foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Molho: Limão", 
            preco: 5.00, 
            desc: "Molho especial à base de limão.", 
            foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Molho: Iogurte", 
            preco: 5.00, 
            desc: "Molho leve e cremoso de iogurte.", 
            foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Molho: Mostarda e Mel", 
            preco: 5.00, 
            desc: "Clássica combinação agridoce de mostarda e mel.", 
            foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Molho: Maionese Verde", 
            preco: 5.00, 
            desc: "Maionese verde artesanal temperada.", 
            foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" 
        }
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

// CONSTANTES E ESTADO GLOBAL DA COMPRA
const META_FRETE_GRATIS = 150.00;
let carrinho = [];
let valorFreteGlobal = 0;
let freteCalculadoDaApi = 0;

// EXIBIR OU OCULTAR POPOVER DO CARRINHO
function toggleCarrinho() {
    const popover = document.getElementById('carrinho-popover');
    if (popover) {
        popover.classList.toggle('active');
    }
}

// FECHAR POPOVER AO CLICAR FORA DELE
document.addEventListener('click', function(event) {
    const wrapper = document.querySelector('.cart-dropdown-wrapper');
    if (wrapper && !wrapper.contains(event.target)) {
        const popover = document.getElementById('carrinho-popover');
        if (popover && popover.classList.contains('active')) {
            popover.classList.remove('active');
        }
    }
});

// CONTROLE DO MODAL DE SELEÇÃO DE SABORES (FOCADO POR CATEGORIA)
function abrirModal(categoria) {
    const modal = document.getElementById('modal-sabores');
    const titulo = document.getElementById('modal-titulo-categoria');
    const lista = document.getElementById('modal-lista-sabores');
    
    const titulosFormatados = {
        antepastos: "Antepastos e Patês (150g)", 
        bolos: "Bolos Caseiros & Festa", 
        docinhos: "Docinhos Especiais",
        geleias: "Geleias Artesanais", 
        kits: "Kits & Presentes", 
        marmitas: "Marmitas Caseiras & Gourmet",
        leves: "Lanches Naturais, Saladas & Molhos",
        paes: "Pães de Fermentação Natural", 
        pets: "Linha Pet Saudável", 
        sazonais: "Produtos Sazonais", 
        sobremesas: "Sobremesas Finas"
    };

    if (titulo) {
        titulo.innerText = titulosFormatados[categoria] || "Opções Disponíveis";
    }

    if (lista) {
        lista.innerHTML = '';
        const sabores = bancoSabores[categoria] || [];
        
        if (sabores.length === 0) {
            lista.innerHTML = '<p class="empty-text">Nenhum item disponível nesta categoria no momento.</p>';
        } else {
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
        }
    }

    if (modal) {
        modal.style.display = 'flex';
    }
}

function fecharModal() {
    const modal = document.getElementById('modal-sabores');
    if (modal) {
        modal.style.display = 'none';
    }
}

// REGRAS DE INICIALIZAÇÃO DE INPUTS (DATA E MÁSCARA CEP)
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('delivery-date');
    if (dateInput) {
        const dataMinima = new Date();
        dataMinima.setDate(dataMinima.getDate() + 3);

        const ano = dataMinima.getFullYear();
        const mes = String(dataMinima.getMonth() + 1).padStart(2, '0');
        const dia = String(dataMinima.getDate()).padStart(2, '0');
        
        dateInput.min = `${ano}-${mes}-${dia}`;
    }

    const postalInput = document.getElementById('postal-code');
    if (postalInput) {
        postalInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 5) {
                value = value.substring(0, 5) + '-' + value.substring(5, 8);
            }
            e.target.value = value;
        });
    }
});

// ADICIONAR ITENS AO CARRINHO
function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            nome: nome,
            preco: parseFloat(preco),
            quantidade: 1
        });
    }

    atualizarInterfaceCarrinho();
    
    const popover = document.getElementById('carrinho-popover');
    if (popover) {
        popover.classList.add('active');
    }
}

// ALTERAR QUANTIDADE (+ / -)
function alterarQuantidade(index, mudanca) {
    carrinho[index].quantidade += mudanca;

    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1);
    }

    atualizarInterfaceCarrinho();
}

// ATUALIZAR INTERFACE DO POPOVER E BOTÃO PRINCIPAL
function atualizarInterfaceCarrinho() {
    const cartCounter = document.getElementById('cart-counter');
    const carrinhoConteudo = document.getElementById('carrinho-conteudo');
    const shippingText = document.getElementById('shipping-text');
    const progressBar = document.getElementById('shipping-progress-bar');
    
    let totalItens = 0;
    let subtotal = 0;

    carrinho.forEach(item => {
        totalItens += item.quantidade;
        subtotal += item.preco * item.quantidade;
    });

    if (cartCounter) {
        cartCounter.innerText = `${totalItens} ${totalItens === 1 ? 'item' : 'itens'} | R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }

    if (carrinhoConteudo) {
        if (carrinho.length === 0) {
            carrinhoConteudo.innerHTML = `
                <p class="empty-cart-text">
                    <em>Seu carrinho ainda está vazio... Que tal recheá-lo com nossas delícias? 👩‍🍳</em>
                </p>`;
        } else {
            let listaHTML = '<ul class="cart-items-list">';
            carrinho.forEach((item, index) => {
                listaHTML += `
                    <li class="cart-item-row">
                        <span><strong>${item.quantidade}x</strong> ${item.nome}</span>
                        <div class="cart-item-actions">
                            <span>R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
                            <button class="cart-qty-btn" onclick="alterarQuantidade(${index}, -1)">-</button>
                            <button class="cart-qty-btn" onclick="alterarQuantidade(${index}, 1)">+</button>
                        </div>
                    </li>`;
            });
            listaHTML += '</ul>';
            carrinhoConteudo.innerHTML = listaHTML;
        }
    }

    if (subtotal >= META_FRETE_GRATIS && carrinho.length > 0) {
        if (shippingText) shippingText.innerHTML = '🎉 Você ganhou <strong>Frete Grátis!</strong>';
        if (progressBar) {
            progressBar.style.width = '100%';
            progressBar.style.backgroundColor = '#25D366';
        }
        valorFreteGlobal = 0;
    } else {
        const falta = META_FRETE_GRATIS - subtotal;
        const porcentagem = Math.min((subtotal / META_FRETE_GRATIS) * 100, 100);

        if (shippingText) {
            shippingText.innerHTML = `Faltam apenas <strong>R$ ${falta.toFixed(2).replace('.', ',')}</strong> para você ganhar <strong>Frete Grátis!</strong>`;
        }
        if (progressBar) {
            progressBar.style.width = `${porcentagem}%`;
            progressBar.style.backgroundColor = 'var(--primary-orange)';
        }
        valorFreteGlobal = freteCalculadoDaApi;
    }
}

// REQUISITAR CÁLCULO DE FRETE COM A API .NET
async function calcularFreteEDirecionar() {
    const inputElement = document.getElementById('postal-code');
    const resultDiv = document.getElementById('api-result');
    
    if (!inputElement || !resultDiv) return;

    const cepLimpo = inputElement.value.replace(/\D/g, '');

    if (!cepLimpo || cepLimpo.length !== 8) {
        resultDiv.className = "result-box error";
        resultDiv.innerHTML = "<strong>Erro:</strong> Digite um CEP com 8 números.";
        return;
    }

    resultDiv.className = "result-box loading";
    resultDiv.innerHTML = "<em>Consultando taxa de entrega...</em>";

    const API_URL = "http://localhost:5253/api/frete"; 

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cepDestino: cepLimpo })
        });

        const data = await response.json();

        if (!response.ok) {
            freteCalculadoDaApi = 0;
            valorFreteGlobal = 0;
            resultDiv.className = "result-box error";
            resultDiv.innerHTML = `<strong>Aviso:</strong> ${data.mensagem}`;
            atualizarInterfaceCarrinho();
            return;
        }

        freteCalculadoDaApi = Number(data.valorFrete) || 0;
        
        resultDiv.className = "result-box success";
        resultDiv.innerHTML = `
            📍 Região: ${data.bairroDestino || 'Mapeada'}<br>
            🛣️ Distância: ${data.distanciaKm} km<br>
            💰 Taxa: R$ ${freteCalculadoDaApi.toFixed(2).replace('.', ',')}
        `;

        atualizarInterfaceCarrinho();

    } catch (err) {
        freteCalculadoDaApi = 0;
        valorFreteGlobal = 0;
        resultDiv.className = "result-box error";
        resultDiv.innerHTML = "<strong>Erro:</strong> Falha de conexão com a API de frete.";
        atualizarInterfaceCarrinho();
    }
}

// GERAR MENSAGEM FORMATADA E FINALIZAR PELO WHATSAPP
function finalizarWhatsApp() {
    const dataEntregaInput = document.getElementById('delivery-date');
    const dataEntrega = dataEntregaInput ? dataEntregaInput.value : '';

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Escolha algum item no menu.");
        return;
    }

    if (!dataEntrega) {
        alert("Por favor, escolha a data do agendamento!");
        return;
    }

    let subtotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    let totalGeral = subtotal + valorFreteGlobal;

    let mensagem = `*Olá, Pitadavivi! Gostaria de fazer o seguinte pedido:*\n\n`;
    
    carrinho.forEach(item => {
        mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}\n`;
    });

    mensagem += `\n*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    
    if (subtotal >= META_FRETE_GRATIS) {
        mensagem += `\n*Frete:* GRÁTIS 🎉`;
    } else {
        mensagem += `\n*Frete:* R$ ${valorFreteGlobal.toFixed(2).replace('.', ',')}`;
    }

    mensagem += `\n*Total Geral:* R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
    mensagem += `\n*Data Agendada:* ${dataEntrega.split('-').reverse().join('/')}`;

    const numeroWhatsApp = "5511987342562";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}