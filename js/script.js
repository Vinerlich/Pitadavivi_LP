// BANCO DE DADOS COMPLETO E ORGANIZADO POR CATEGORIAS
const bancoSabores = {
    antepastos: [
        { 
            nome: "Alichela", 
            precoUnitario: 33.00, 
            precoCento: null, 
            desc: "Clássica iguaria italiana à base de filés de anchova selecionados, salsinha, alcaparras e azeite extra virgem, com sabor intenso e marcante.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Babaganuche", 
            precoUnitario: 16.50, 
            precoCento: null, 
            desc: "Tradicional pasta de berinjela defumada na brasa, delicadamente temperada com tahine, limão e azeite de oliva.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Caponata de abobrinha", 
            precoUnitario: 18.00, 
            precoCento: null, 
            desc: "Delicada seleção de abobrinhas frescas refogadas lentamente com cebola, pimentões coloridos, azeitonas e ervas aromáticas no azeite.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Caponata de berinjela", 
            precoUnitario: 18.00, 
            precoCento: null, 
            desc: "Sofisticada receita mediterrânea de berinjelas cortadas em cubos, assadas com uvas-passas, nozes tostadas, pimentões e azeite de oliva de primeira linha.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Homus", 
            precoUnitario: 22.50, 
            precoCento: null, 
            desc: "Aveludada pasta de grão-de-bico finalizada com tahine artesanal, azeite extra virgem e um toque cítrico refrescante.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Patê de cebola", 
            precoUnitario: 13.50, 
            precoCento: null, 
            desc: "Creme leve e acetinado com cebolas levemente caramelizadas e um blend exclusivo de ervas finas.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Patê de ricota com damasco", 
            precoUnitario: 22.50, 
            precoCento: null, 
            desc: "Harmoniosa combinação de ricota fresca e artesanal com delicados pedaços de damascos turcos selecionados.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Patê tomate com manjericão", 
            precoUnitario: 15.00, 
            precoCento: null, 
            desc: "Preparação aromática de tomates maduros reduzidos lentamente, coroados com folhas frescas de manjericão.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Sardela", 
            precoUnitario: 16.50, 
            precoCento: null, 
            desc: "Tradicional iguaria mediterrânea à base de pimentões tostados, anchovas selecionadas e especiarias de sabor marcante.", 
            foto: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=150&q=80" 
        }
    ],
    bolos: [
        { nome: "Bolo de Cenoura com Brigadeiro", precoUnitario: 28.00, precoCento: null, desc: "Tradicional bolo caseiro com cobertura vulcão.", foto: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80" },
        { nome: "Bolo Red Velvet", precoUnitario: 85.00, precoCento: null, desc: "Massa aveludada com recheio de cream cheese.", foto: "./img/RedVelvet.jpg" }
    ],
    docinhos: [
        { nome: "Brigadeiro", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Beijinho", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Bicho de pé / Morango", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Ninho", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Paçoca", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Cajuzinho", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Ninho com uva", precoUnitario: 5.00, precoCento: 280.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Ninho com Nutella", precoUnitario: 5.00, precoCento: 280.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Churros", precoUnitario: 5.00, precoCento: 280.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Pistache", precoUnitario: 5.00, precoCento: 280.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Nozes", precoUnitario: 5.00, precoCento: 280.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Belga", precoUnitario: 5.00, precoCento: 280.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" }
    ],
    geleias: [
        { nome: "Geleia: Amora com manjericão (150g)", precoUnitario: 55.00, precoCento: null, desc: "Feita artesanalmente com amoras frescas e um toque aromático de manjericão.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Geleia: Damasco (150g)", precoUnitario: 55.00, precoCento: null, desc: "Doçura equilibrada e pedaços selecionados de damasco.", foto: "https://images.unsplash.com/photo-1622484211148-7163014a706b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Geleia: Manga com maracujá (150g)", precoUnitario: 45.00, precoCento: null, desc: "A harmonia perfeita entre a doçura da manga e a acidez do maracujá.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Geleia: Morango (150g)", precoUnitario: 40.00, precoCento: null, desc: "Clássica geleia artesanal com pedaços suculentos de morango.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Geleia: Goiaba (150g)", precoUnitario: 40.00, precoCento: null, desc: "Sabor caseiro marcante de goiaba fresca.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Acompanhamento para Salgado: Alho", precoUnitario: 50.00, precoCento: null, desc: "Especial para acompanhar petiscos e salgados.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Acompanhamento para Salgado: Chutney cebola roxa", precoUnitario: 50.00, precoCento: null, desc: "Agridoce sofisticado de cebola roxa.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Acompanhamento para Salgado: Pimenta", precoUnitario: 50.00, precoCento: null, desc: "Geleia ou conserva picante artesanal.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Acompanhamento para Salgado: Tomate com pimenta", precoUnitario: 50.00, precoCento: null, desc: "Combinação saborosa de tomate com um toque de pimenta.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" }
    ],
    kits: [
        { nome: "Kit Café da Manhã Completo", precoUnitario: 95.00, precoCento: null, desc: "1 Pão, 1 Geleia, 1 Bolo Caseiro pequeno.", foto: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=150&q=80" }
    ],
    marmitas: [
        { nome: "Marmita: Almôndegas de Carne", precoUnitario: 22.00, precoCento: null, desc: "Almôndegas de carne bovina, macarrão fusilli ou purê de batatas, molho ao sugo.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Berinjela ou Abobrinha Recheada", precoUnitario: 22.00, precoCento: null, desc: "Recheada com carne moída bovina ou frango desfiado, molho ao sugo, arroz.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Carne com Abobrinha", precoUnitario: 24.00, precoCento: null, desc: "Carne bovina refogada com abobrinha, purê de batatas.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Carne Moída", precoUnitario: 20.00, precoCento: null, desc: "Carne bovina, arroz, feijão carioca, legumes.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Escondidinho", precoUnitario: 22.00, precoCento: null, desc: "Carne bovina ou frango, purê de batatas salpicado com queijo.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Frango Grelhado", precoUnitario: 20.00, precoCento: null, desc: "Filé grelhado, arroz, feijão carioca, mix de legumes.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Frango em Tiras", precoUnitario: 20.00, precoCento: null, desc: "Tiras de frango grelhado, arroz à grega.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita: Strogonoff", precoUnitario: 24.00, precoCento: null, desc: "Carne ou frango, arroz, batata assada.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita Gourmet: Filé Suíno", precoUnitario: 35.00, precoCento: null, desc: "Filé mignon suíno ao molho de cerveja, arroz com brócolis.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita Gourmet: Salmão", precoUnitario: 42.00, precoCento: null, desc: "Posta de salmão ao molho de maracujá, arroz à grega.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" }
    ],
    leves: [
        { nome: "Lanche Natural: Atum", precoUnitario: 20.00, precoCento: null, desc: "Patê atum defumado, alface americana, tomate, cenoura, cebola roxa.", foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" },
        { nome: "Lanche Natural: Frango", precoUnitario: 20.00, precoCento: null, desc: "Patê frango desfiado, alface americana, cenoura, tomate, cebola roxa.", foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" },
        { nome: "Lanche Natural: Peito de Peru", precoUnitario: 20.00, precoCento: null, desc: "Peito de peru, alface americana, tomate, cenoura, ricota.", foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" },
        { nome: "Salada: Atum", precoUnitario: 20.00, precoCento: null, desc: "Atum defumado, mix de folhas, tomate, cenoura, cebola roxa, molho.", foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
        { nome: "Salada: Frango", precoUnitario: 20.00, precoCento: null, desc: "Frango desfiado, mix de folhas, cenoura, pepino, tomate, cebola roxa, molho.", foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
        { nome: "Salada: Macarrão", precoUnitario: 20.00, precoCento: null, desc: "Atum defumado ou frango desfiado, macarrão fusili, tomate, cenoura, cebola roxa, molho.", foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho: Limão", precoUnitario: 5.00, precoCento: null, desc: "Molho especial à base de limão.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho: Iogurte", precoUnitario: 5.00, precoCento: null, desc: "Molho leve e cremoso de iogurte.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho: Mostarda e Mel", precoUnitario: 5.00, precoCento: null, desc: "Clássica combinação agridoce de mostarda e mel.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho: Maionese Verde", precoUnitario: 5.00, precoCento: null, desc: "Maionese verde artesanal temperada.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" }
    ],
    paes: [
        { nome: "Pão de Alecrim ", precoUnitario: 24.00, precoCento: null, desc: "Massa fofinha com delocioso aroma e sabor do Alecrim.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Baguete Recheada Frango", precoUnitario: 14.00, precoCento: null, desc: "Crocância perfeita com miolo leve.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Roscas Doces: Coco", precoUnitario: 90.00, precoCento: null, desc: "Rosca artesanal doce sabor coco.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Roscas Doces: Ricota com frutas", precoUnitario: 90.00, precoCento: null, desc: "Rosca artesanal doce recheada com ricota e frutas.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Roscas Doces: Romeu e Julieta", precoUnitario: 90.00, precoCento: null, desc: "Rosca artesanal doce sabor goiabada com queijo.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Roscas Salgadas: Berinjela com ricota", precoUnitario: 110.00, precoCento: null, desc: "Rosca artesanal salgada recheada com berinjela e ricota.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Roscas Salgadas: Espinafre com ricota e nozes", precoUnitario: 110.00, precoCento: null, desc: "Rosca artesanal salgada recheada com espinafre, ricota e nozes.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Roscas Salgadas: Linguiça portuguesa", precoUnitario: 110.00, precoCento: null, desc: "Rosca artesanal salgada recheada com linguiça portuguesa.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" }
    ],
    pets: [
        { nome: "Biscoito Integral de Abóbora", precoUnitario: 14.00, precoCento: null, desc: "Sem conservantes, saudável para cães.", foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" }
    ],
    sazonais: [
        { nome: "Panetone Artesanal Trançado", precoUnitario: 65.00, precoCento: null, desc: "Disponível apenas sob encomenda.", foto: "https://images.unsplash.com/photo-1512414472151-512c06cfb0b3?auto=format&fit=crop&w=150&q=80" }
    ],
    sobremesas: [
        { nome: "Doce de Abóbora", precoUnitario: 50.00, precoCento: null, desc: "Doce artesanal caseiro tradicional.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Doce de abóbora com coco", precoUnitario: 55.00, precoCento: null, desc: "Doce artesanal de abóbora com toque de coco fresco.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Doce de banana com cacau", precoUnitario: 55.00, precoCento: null, desc: "Combinação deliciosa e nutritiva de banana com cacau.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Banoffee", precoUnitario: 140.00, precoCento: null, desc: "Torta artesanal de doce de leite, bananas e chantilly.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pavê (chocolate, maracujá)", precoUnitario: 130.00, precoCento: null, desc: "Camadas cremosas de chocolate ou maracujá.", foto: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pavê nozes", precoUnitario: 150.00, precoCento: null, desc: "Pavê especial recheado com nozes selecionadas.", foto: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pudim de leite", precoUnitario: 95.00, precoCento: null, desc: "Pudim de leite condensado tradicional, liso e com calda de caramelo.", foto: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pudim tipo caçarola", precoUnitario: 90.00, precoCento: null, desc: "Pudim com textura rústica e sabor caseiro incomparável.", foto: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=150&q=80" },
        { nome: "Surpresa de uva ou morango", precoUnitario: 130.00, precoCento: null, desc: "Doce fino recheado com fruta fresca selecionada.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" },
        { nome: "Torta (limão, maçã, morango)", precoUnitario: 110.00, precoCento: null, desc: "Torta fina disponível nos sabores limão, maçã ou morango.", foto: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=150&q=80" },
        { nome: "Torta (chocolate, chocolate c/nozes)", precoUnitario: 150.00, precoCento: null, desc: "Torta rica em chocolate puro, com opção com nozes.", foto: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=150&q=80" }
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

// CONTROLE DO MODAL DE SELEÇÃO DE SABORES COM ESCOLHA DE UNIDADE OU CENTO
function abrirModal(categoria) {
    const modal = document.getElementById('modal-sabores');
    const titulo = document.getElementById('modal-titulo-categoria');
    const lista = document.getElementById('modal-lista-sabores');
    
    const titulosFormatados = {
        antepastos: "Antepastos e Patês (150g)", 
        bolos: "Bolos Caseiros & Festa", 
        docinhos: "Docinhos para Festas",
        geleias: "Geleias & Acompanhamentos", 
        kits: "Kits & Presentes", 
        marmitas: "Marmitas Caseiras & Gourmet",
        leves: "Lanches Naturais, Saladas & Molhos",
        paes: "Pães Artesanais & Roscas", 
        pets: "Linha Pet Saudável", 
        sazonais: "Produtos Sazonais", 
        sobremesas: "Doces e Sobremesas"
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
            sabores.forEach((sabor, index) => {
                let opcoesHtml = '';
                
                // Se o produto tiver opção de cento, criamos os seletores
                if (sabor.precoCento) {
                    opcoesHtml = `
                        <div class="flavor-options">
                            <label><input type="radio" name="opcao-${index}" value="unitario" checked onchange="atualizarPrecoModal(${index}, ${sabor.precoUnitario}, ${sabor.precoCento})"> Unidade (R$ ${sabor.precoUnitario.toFixed(2).replace('.', ',')})</label>
                            <label><input type="radio" name="opcao-${index}" value="cento" onchange="atualizarPrecoModal(${index}, ${sabor.precoUnitario}, ${sabor.precoCento})"> Cento (R$ ${sabor.precoCento.toFixed(2).replace('.', ',')})</label>
                        </div>
                    `;
                }

                lista.innerHTML += `
                    <div class="flavor-item-row">
                        <img src="${sabor.foto}" alt="${sabor.nome}" class="flavor-mini-img">
                        <div class="flavor-details">
                            <h4>${sabor.nome}</h4>
                            <p>${sabor.desc}</p>
                            ${opcoesHtml}
                        </div>
                        <div class="flavor-action">
                            <span id="preco-exibido-${index}" class="price">R$ ${sabor.precoUnitario.toFixed(2).replace('.', ',')}</span>
                            <button class="btn-add" style="padding: 6px 12px; font-size: 12px;" 
                                onclick="adicionarItemComOpcao('${sabor.nome}', ${sabor.precoUnitario}, ${sabor.precoCento || 'null'}, ${index}); fecharModal();">
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

// ATUALIZAR O PREÇO NA TELA QUANDO O CLIENTE ESCOLHER ENTRE UNIDADE OU CENTO
function atualizarPrecoModal(index, precoUnit, precoCento) {
    const radioCento = document.querySelector(`input[name="opcao-${index}"][value="cento"]`);
    const spanPreco = document.getElementById(`preco-exibido-${index}`);
    
    if (spanPreco) {
        const precoAtual = (radioCento && radioCento.checked) ? precoCento : precoUnit;
        spanPreco.innerText = `R$ ${precoAtual.toFixed(2).replace('.', ',')}`;
    }
}

// ADICIONAR AO CARRINHO CONSIDERANDO A ESCOLHA (UNIDADE OU CENTO)
function adicionarItemComOpcao(nomeBase, precoUnit, precoCento, index) {
    let precoFinal = precoUnit;
    let sufixo = " (Unidade)";

    if (precoCento) {
        const radioCento = document.querySelector(`input[name="opcao-${index}"][value="cento"]`);
        if (radioCento && radioCento.checked) {
            precoFinal = precoCento;
            sufixo = " (Cento)";
        }
    }

    const nomeCompleto = nomeBase + sufixo;
    adicionarAoCarrinho(nomeCompleto, precoFinal);
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