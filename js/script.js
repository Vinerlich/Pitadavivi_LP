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
        { nome: "Cenoura com Brigadeiro", precoUnitario: 28.00, precoCento: null, desc: "Tradicional bolo caseiro com cobertura vulcão de brigadeiro.", foto: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80" },
        { nome: "Red Velvet", precoUnitario: 85.00, precoCento: null, desc: "Massa aveludada com recheio de cream cheese.", foto: "./img/RedVelvet.jpg" },
        { nome: "Fubá Cremoso", precoUnitario: 30.00, precoCento: null, desc: "Bolo caseiro com textura cremosa e sabor de infância.", foto: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Laranja Caseiro", precoUnitario: 26.00, precoCento: null, desc: "Bolo fofinho com calda leve de laranja fresca.", foto: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Chocolate com Calda", precoUnitario: 32.00, precoCento: null, desc: "Massa fofinha de chocolate com cobertura generosa.", foto: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80" },
        { nome: "Limão com Iogurte", precoUnitario: 28.00, precoCento: null, desc: "Massa leve e fofinha com glacê refrescante de limão.", foto: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Maçã com Canela e Nozes", precoUnitario: 34.00, precoCento: null, desc: "Bolo rústico aromático com pedaços de maçã e toque de canela.", foto: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Festa: Bem-Casado", precoUnitario: 90.00, precoCento: null, desc: "Massa delicada recheada com doce de leite artesanal.", foto: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Festa: Prestígio Gourmet", precoUnitario: 95.00, precoCento: null, desc: "Massa de chocolate molhadinha recheada com coco fresco.", foto: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=150&q=80" },
        { nome: "Festa: Abacaxi com Coco", precoUnitario: 90.00, precoCento: null, desc: "Recheio cremoso de coco com pedaços suculentos de abacaxi.", foto: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=150&q=80" }
    ],
   docinhos: [
        { nome: "Brigadeiro", precoUnitario: 4.00, precoCento: 180.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Beijinho", precoUnitario: 4.00, precoCento: 180.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Bicho de pé / Morango", precoUnitario: 4.00, precoCento: 180.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Ninho", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Paçoca", precoUnitario: 4.00, precoCento: 180.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Cajuzinho", precoUnitario: 4.00, precoCento: 180.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Abacaxi Vidrado", precoUnitario: 4.00, precoCento: 200.00, desc: "Doce tradicional para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "tradicional" },
        { nome: "Ninho com uva", precoUnitario: 5.00, precoCento: 210.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Ninho com Nutella", precoUnitario: 5.00, precoCento: 210.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Churros", precoUnitario: 5.00, precoCento: 210.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Pistache", precoUnitario: 5.00, precoCento: 220.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Nozes", precoUnitario: 5.00, precoCento: 220.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" },
        { nome: "Belga", precoUnitario: 5.00, precoCento: 220.00, desc: "Doce especial gourmet para festas.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80", tipo: "especial" }
    ],
   geleias: [
        { nome: "Amora com Manjericão", precoUnitario: 55.00, precoCento: null, desc: "Feita artesanalmente com amoras frescas e um toque aromático de manjericão.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Damasco", precoUnitario: 55.00, precoCento: null, desc: "Doçura equilibrada e pedaços selecionados de damasco.", foto: "https://images.unsplash.com/photo-1622484211148-7163014a706b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Manga com Maracujá", precoUnitario: 45.00, precoCento: null, desc: "A harmonia perfeita entre a doçura da manga e a acidez do maracujá.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Morango", precoUnitario: 40.00, precoCento: null, desc: "Clássica geleia artesanal com pedaços suculentos de morango.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Goiaba", precoUnitario: 40.00, precoCento: null, desc: "Sabor caseiro marcante de goiaba fresca.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Geleia de Alho", precoUnitario: 50.00, precoCento: null, desc: "Especial para acompanhar petiscos, churrasco.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Chutney de Cebola Roxa", precoUnitario: 50.00, precoCento: null, desc: "Agridoce sofisticado de cebola roxa para carnes e petiscos.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pimenta", precoUnitario: 50.00, precoCento: null, desc: "Geleia agridoce e picante artesanalmente equilibrada, perfeita para queijos e salgados.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" },
        { nome: "Tomate com Pimenta ", precoUnitario: 50.00, precoCento: null, desc: "Combinação saborosa de tomate artesanal com um toque de pimenta.", foto: "https://images.unsplash.com/photo-1590005354167-6da97870c913?auto=format&fit=crop&w=150&q=80" }
    ],
    kits: [
        { nome: "Kit Café da Manhã Completo", precoUnitario: 95.00, precoCento: null, desc: "1 Pão, 1 Geleia, 1 Bolo Caseiro pequeno.", foto: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=150&q=80" }
    ],
   marmitas: [
        { nome: "Almôndegas de Carne", precoUnitario: 22.00, precoCento: null, desc: "Almôndegas de carne bovina, macarrão fusilli ou purê de batatas, molho ao sugo.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Berinjela ou Abobrinha Recheada", precoUnitario: 22.00, precoCento: null, desc: "Recheada com carne moída bovina ou frango desfiado, molho ao sugo, arroz.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Carne com Abobrinha", precoUnitario: 24.00, precoCento: null, desc: "Carne bovina refogada com abobrinha, purê de batatas.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Carne Moída", precoUnitario: 20.00, precoCento: null, desc: "Carne bovina, arroz, feijão carioca, legumes.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Escondidinho", precoUnitario: 22.00, precoCento: null, desc: "Carne bovina ou frango, purê de batatas salpicado com queijo.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Frango Grelhado", precoUnitario: 20.00, precoCento: null, desc: "Filé grelhado, arroz, feijão carioca, mix de legumes.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Frango em Tiras", precoUnitario: 20.00, precoCento: null, desc: "Tiras de frango grelhado, arroz à grega.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Strogonoff", precoUnitario: 24.00, precoCento: null, desc: "Carne ou frango, arroz, batata assada.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita Gourmet: Filé Suíno", precoUnitario: 35.00, precoCento: null, desc: "Filé mignon suíno ao molho de cerveja, arroz com brócolis.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" },
        { nome: "Marmita Gourmet: Salmão", precoUnitario: 42.00, precoCento: null, desc: "Posta de salmão ao molho de maracujá, arroz à grega.", foto: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&q=80" }
    ],
    leves: [
        { nome: "Lanche de Atum", precoUnitario: 20.00, precoCento: null, desc: "Patê atum defumado, alface americana, tomate, cenoura, cebola roxa.", foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" },
        { nome: "Lanche de Frango", precoUnitario: 20.00, precoCento: null, desc: "Patê frango desfiado, alface americana, cenoura, tomate, cebola roxa.", foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" },
        { nome: "Lanche de Peito de Peru", precoUnitario: 20.00, precoCento: null, desc: "Peito de peru, alface americana, tomate, cenoura, ricota.", foto: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&q=80" },
        { nome: "Salada de Atum", precoUnitario: 20.00, precoCento: null, desc: "Atum defumado, mix de folhas, tomate, cenoura, cebola roxa, molho.", foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
        { nome: "Salada de Frango", precoUnitario: 20.00, precoCento: null, desc: "Frango desfiado, mix de folhas, cenoura, pepino, tomate, cebola roxa, molho.", foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
        { nome: "Salada de Macarrão", precoUnitario: 20.00, precoCento: null, desc: "Atum defumado ou frango desfiado, macarrão fusili, tomate, cenoura, cebola roxa, molho.", foto: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho de Limão", precoUnitario: 5.00, precoCento: null, desc: "Molho especial à base de limão.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho de Iogurte", precoUnitario: 5.00, precoCento: null, desc: "Molho leve e cremoso de iogurte.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho de Mostarda e Mel", precoUnitario: 5.00, precoCento: null, desc: "Clássica combinação agridoce de mostarda e mel.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" },
        { nome: "Molho Maionese Verde", precoUnitario: 5.00, precoCento: null, desc: "Maionese verde artesanal temperada.", foto: "https://images.unsplash.com/photo-1472393365320-db77a5595c2f?auto=format&fit=crop&w=150&q=80" }
    ],
    paes: [
        { nome: "Pão de Alecrim", precoUnitario: 24.00, precoCento: null, desc: "Massa fofinha com delicioso aroma e sabor do Alecrim.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Baguete Recheada de Frango", precoUnitario: 14.00, precoCento: null, desc: "Crocância perfeita com miolo leve e recheio suculento.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Rosca de Coco", precoUnitario: 90.00, precoCento: null, desc: "Rosca artesanal doce sabor coco.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Rosca de Ricota com Frutas", precoUnitario: 90.00, precoCento: null, desc: "Rosca artesanal doce recheada com ricota e frutas.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Rosca Romeu e Julieta", precoUnitario: 90.00, precoCento: null, desc: "Rosca artesanal doce sabor goiabada com queijo.", foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" },
        { nome: "Rosca de Berinjela com Ricota", precoUnitario: 110.00, precoCento: null, desc: "Rosca artesanal salgada recheada com berinjela e ricota.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Rosca de Espinafre com Ricota e Nozes", precoUnitario: 110.00, precoCento: null, desc: "Rosca artesanal salgada recheada com espinafre, ricota e nozes.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" },
        { nome: "Rosca de Linguiça Portuguesa", precoUnitario: 110.00, precoCento: null, desc: "Rosca artesanal salgada recheada com linguiça portuguesa.", foto: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80" }
    ],
    pets: [
        { 
            nome: "Bolo Pet Gourmet", 
            precoUnitario: 65.00, 
            opcoesTamanho: [
                { nome: "P (300g)", preco: 65.00 },
                { nome: "M (600g)", preco: 105.00 }
            ],
            desc: "Confeitaria 100% natural & funcional[cite: 10]. Sabores disponíveis: Morango, Maçã, Banana e Blueberry[cite: 10]. Seguro para pets (sem corantes, conservantes ou açúcar)[cite: 10].", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Muffin Pet Gourmet (100g)", 
            precoUnitario: 19.00, 
            desc: "Muffin funcional artesanal para cães. Sabores disponíveis: Morango, Maçã, Banana e Blueberry[cite: 10].", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Biscoitos Crocantes Pet (100g)", 
            precoUnitario: 25.00, 
            desc: "Biscoitos crocantes artesanais[cite: 10]. Opções: Maçã c/ Beterraba, Banana c/ Batata-Doce, Frango c/ Abóbora ou Carne c/ Batata-Doce[cite: 10].", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Brigaudeiros Artesanais Pet (Mín. 6 un.)", 
            precoUnitario: 5.00, 
            desc: "Deliciosos docinhos pet-friendly (valor unitário, pedido mínimo de 6 unidades)[cite: 10].", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Festa Pet P", 
            precoUnitario: 169.00, 
            desc: "Inclui: 1 Bolo P + 2 Muffins + 6 Brigaudeiros + 1 pacote de biscoitos[cite: 10]. Ideal para comemorações de 1 a 3 cães[cite: 10].", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Festa Pet M", 
            precoUnitario: 299.00, 
            desc: "Inclui: 1 Bolo M + 4 Muffins + 12 Brigaudeiros + 2 pacotes de biscoitos[cite: 10]. Ideal para festas de 4 a 8 cães[cite: 10].", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Festa Pet G", 
            precoUnitario: 389.00, 
            desc: "Inclui: 1 Bolo M (600g) + 6 Muffins + 18 Brigaudeiros + 3 pacotes de biscoitos. Ideal para grandes festas ou cães de porte G.", 
            foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" 
        }
    ],
    especiais: [
        { 
            nome: "Kit Trenó (Geleia Morango 150g + Tostada)", 
            precoUnitario: 75.00, 
            desc: "Kit presenteável com geleia artesanal de morango (150g) acompanhada de tostadas de panetone.", 
            foto: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Rena (Geleia Morango 150g + Tostada + Chocotone 500g)", 
            precoUnitario: 150.00, 
            desc: "Kit festivo contendo geleia artesanal de morango (150g), tostadas de panetone e 1 chocotone artesanal de 500g.", 
            foto: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Noel (Geleia + Tostada + Chocotone 500g + Antepasto)", 
            precoUnitario: 180.00, 
            desc: "Kit presente completo com geleia de morango (150g), tostadas, chocotone artesanal (500g) e antepasto italiano artesanal.", 
            foto: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Cesta Natalina Pitadavivi", 
            precoUnitario: 100.00, 
            opcoesTamanho: [
                { nome: "Tamanho P", preco: 100.00 },
                { nome: "Tamanho M", preco: 170.00 },
                { nome: "Tamanho G", preco: 210.00 }
            ],
            desc: "Cesta artesanal recheada de delícias natalinas da casa. Disponível nos tamanhos P, M ou G.", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Confeiteiro Natalino", 
            precoUnitario: 50.00, 
            desc: "Kit interativo para confeitar e se divertir em família no Natal.", 
            foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Mini Geleias (4 Unidades Sortidas - 240g)", 
            precoUnitario: 40.00, 
            desc: "Caixa presenteável com seleção de 4 mini geleias artesanais sortidas.", 
            foto: "https://images.unsplash.com/photo-1587735243615-c03f25c51445?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Caixinha Mini Tones (6 Unidades Sortidas)", 
            precoUnitario: 35.00, 
            desc: "Seleção com 6 mini panetones artesanais em sabores variados.", 
            foto: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Tostadas Exclusivas de Panetone", 
            precoUnitario: 35.00, 
            desc: "Nossas crocantes e exclusivas tostadas artesanais feitas com panetone de fabricação própria.", 
            foto: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Panetone Tradicional ou Chocotone", 
            precoUnitario: 70.00, 
            opcoesTamanho: [
                { nome: "100g", preco: 15.00 },
                { nome: "250g", preco: 35.00 },
                { nome: "500g", preco: 70.00 }
            ],
            desc: "Panetone ou Chocotone artesanal de fabricação própria. Escolha o tamanho ideal.", 
            foto: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Panetone Recheado Gourmet", 
            precoUnitario: 80.00, 
            opcoesTamanho: [
                { nome: "250g", preco: 40.00 },
                { nome: "500g", preco: 80.00 }
            ],
            desc: "Recheios gourmet à escolha: Chocolate, Café, Goiabada ou Maracujá. Escolha o tamanho.", 
            foto: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Panetone Recheado Premium", 
            precoUnitario: 120.00, 
            opcoesTamanho: [
                { nome: "250g", preco: 60.00 },
                { nome: "500g", preco: 120.00 }
            ],
            desc: "Recheios especiais: Doce de Leite com Nozes ou Pistache. Escolha o tamanho.", 
            foto: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Peru Assado com Manteiga de Ervas (3kg)", 
            precoUnitario: 360.00, 
            desc: "Peru marinado e assado lentamente com manteiga de ervas finas (3kg).", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Salmão ao Molho de Maracujá (1kg)", 
            precoUnitario: 250.00, 
            desc: "Filé de salmão grelhado regado com molho artesanal refinado de maracujá (1kg).", 
            foto: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Maminha na Manteiga de Ervas (1kg)", 
            precoUnitario: 200.00, 
            desc: "Maminha nobre marinada e assada com manteiga aromática de ervas (1kg).", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Tender ao Molho de Mostarda, Mel e Cerveja Preta (1kg)", 
            precoUnitario: 200.00, 
            desc: "Tender fatiado glaceado no molho agridoce especial de mostarda, mel e cerveja preta (1kg).", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Lombo Recheado com Farofa (1kg)", 
            precoUnitario: 180.00, 
            desc: "Lombo suíno recheado com farofa em leito de cebolas ao molho da cocção (1kg).", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Pernil Assado com Batata Bolinha ao Alecrim (1kg)", 
            precoUnitario: 150.00, 
            desc: "Pernil suíno assado e suculento, acompanhado de batatas bolinha temperadas com alecrim (1kg).", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Cuscuz Marroquino Festivo (500g)", 
            precoUnitario: 80.00, 
            desc: "Cuscuz marroquino perfumado com castanhas, ingredientes selecionados e especiarias (500g).", 
            foto: "https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Salpicão Especial de Frango (500g)", 
            precoUnitario: 80.00, 
            desc: "Salpicão artesanal cremoso com frango desfiado, vegetais frescos e milho (500g).", 
            foto: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Caponata de Berinjela ou Abobrinha (500g)", 
            precoUnitario: 60.00, 
            desc: "Caponata artesanal rica em azeite, pimentões e temperos da casa (500g).", 
            foto: "https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Maionese Artesanal Festiva (500g)", 
            precoUnitario: 60.00, 
            desc: "Salada de maionese caseira cremosa com batatas e legumes selecionados (500g).", 
            foto: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Farofa Tradicional ou Natalina (500g)", 
            precoUnitario: 50.00, 
            desc: "Farofa artesanal crocante com bacon, linguiça e frutas secas (500g).", 
            foto: "https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Lentilha da Sorte / Salada de Lentilha (500g)", 
            precoUnitario: 50.00, 
            desc: "Prato tradicional de lentilha bem temperada para o Ano Novo (500g).", 
            foto: "https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Arroz à Grega, Natalino ou com Lentilha (500g)", 
            precoUnitario: 40.00, 
            desc: "Arroz soltinho e colorido temperado com passas, cenoura e pimentões ou lentilhas (500g).", 
            foto: "https://images.unsplash.com/photo-1541518763669-27fef04b14da?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Sobremesa Especial (Bombom Aberto, Banana Pudding ou Maracujá com Chocolate)", 
            precoUnitario: 105.00, 
            desc: "Travessa festiva generosa de 900g a 1.1kg. Sabores: Bombom de Uva/Morango, Banana Pudding ou Maracujá com Chocolate.", 
            foto: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Pudim de Leite Condensado Tradicional", 
            precoUnitario: 80.00, 
            desc: "Pudim artesanal extremamente cremoso sem furinhos com calda de caramelo perfeita.", 
            foto: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Torta de Maçã Festiva", 
            precoUnitario: 50.00, 
            desc: "Torta artesanal de maçã aromatizada com canela e massa folhada / amanteigada.", 
            foto: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Rosca Natalina de Frutas Cristalizadas", 
            precoUnitario: 45.00, 
            desc: "Massa fofinha artesanal recheada com ricota e frutas cristalizadas, exclusiva para a mesa de Natal.", 
            foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" 
        }
    ],
    sobremesas: [
        { nome: "Abóbora (500g)", precoUnitario: 50.00, precoCento: null, desc: "Doce artesanal caseiro tradicional.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Abóbora com Coco (500g)", precoUnitario: 55.00, precoCento: null, desc: "Doce artesanal de abóbora com toque de coco fresco.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Banana com Cacau (500g)", precoUnitario: 55.00, precoCento: null, desc: "Combinação deliciosa e nutritiva de banana com cacau.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Banoffee (Aprox. 1kg)", precoUnitario: 140.00, precoCento: null, desc: "Torta artesanal de doce de leite, bananas e chantilly.", foto: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pavê de Chocolate ou Maracujá (Aprox. 1kg)", precoUnitario: 130.00, precoCento: null, desc: "Camadas cremosas de chocolate ou maracujá.", foto: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pavê de Nozes (Aprox. 1kg)", precoUnitario: 150.00, precoCento: null, desc: "Pavê especial recheado com nozes selecionadas.", foto: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pudim de Leite Condensado (Inteiro)", precoUnitario: 95.00, precoCento: null, desc: "Pudim tradicional, liso e com calda de caramelo.", foto: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=150&q=80" },
        { nome: "Pudim Tipo Caçarola (Inteiro)", precoUnitario: 90.00, precoCento: null, desc: "Pudim com textura rústica e sabor caseiro incomparável.", foto: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=150&q=80" },
        { nome: "Surpresa de Uva ou Morango (Aprox. 1kg)", precoUnitario: 130.00, precoCento: null, desc: "Doce fino recheado com fruta fresca selecionada.", foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" },
        { nome: "Torta de Limão, Maçã ou Morango (Inteira)", precoUnitario: 110.00, precoCento: null, desc: "Torta fina disponível nos sabores limão, maçã ou morango.", foto: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=150&q=80" },
        { nome: "Torta de Chocolate / Nozes (Inteira)", precoUnitario: 150.00, precoCento: null, desc: "Torta rica em chocolate puro, com opção com nozes.", foto: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=150&q=80" }
    ],
    bebidas: [
        { nome: "Espumante Brut Premium (750ml)", precoUnitario: 85.00, precoCento: null, desc: "Espumante elegante com notas cítricas. Harmoniza perfeitamente com tábuas de frios, castanhas e massas leves.", foto: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=150&q=80" },
        { nome: "Espumante Moscatel Doce (750ml)", precoUnitario: 80.00, precoCento: null, desc: "Bebida leve e adocicada. Ideal para harmonizar com bolos caseiros, tortas de frutas e sobremesas finas.", foto: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=150&q=80" },
        { nome: "Vinho Tinto Fino Seco (750ml)", precoUnitario: 70.00, precoCento: null, desc: "Rótulo encorpado com notas de frutas vermelhas. Perfeito para acompanhar massas ao molho sugo, carne e petiscos salgados.", foto: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=150&q=80" },
        { nome: "Vinho Tinto Suave (750ml)", precoUnitario: 65.00, precoCento: null, desc: "Vinho macio e agradável ao paladar. Harmoniza muito bem com pratos agridoces e tortas rústicas.", foto: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=150&q=80" },
        { nome: "Vinho Branco Fino Seco (750ml)", precoUnitario: 70.00, precoCento: null, desc: "Refrescante e frutado. Excelente opção para harmonizar com aves grelhadas, saladas e tortas de limão.", foto: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=150&q=80" },
        { nome: "Vinho Rosé Fino (750ml)", precoUnitario: 72.00, precoCento: null, desc: "Versátil e delicado. Harmoniza perfeitamente com lanches naturais, quiches e tábuas de frios finos.", foto: "https://images.unsplash.com/photo-1558001377-765f0423d9b4?auto=format&fit=crop&w=150&q=80" },
        { nome: "Gin Importado (750ml)", precoUnitario: 120.00, precoCento: null, desc: "Gin clássico para drinks refrescantes. Harmoniza perfeitamente com tábuas de queijos finos, castanhas e frutas cítricas.", foto: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Uísque Blended Scotch (750ml)", precoUnitario: 140.00, precoCento: null, desc: "Uísque sofisticado de sabor marcante. Ideal para compor kits de presentes especiais e acompanhar petiscos nozes e amendoins.", foto: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Cerveja Artesanal IPA (500ml)", precoUnitario: 28.00, precoCento: null, desc: "Cerveja forte com amargor equilibrado e notas cítricas. Harmoniza com pratos condimentados e salgados assados.", foto: "https://images.unsplash.com/photo-1608270105740-23a54d550e1d?auto=format&fit=crop&w=150&q=80" },
        { nome: "Cerveja Artesanal Stout (500ml)", precoUnitario: 28.00, precoCento: null, desc: "Cerveja escura com notas de chocolate e café. Combina perfeitamente com bolos de chocolate e sobremesas à base de cacau.", foto: "https://images.unsplash.com/photo-1608270105740-23a54d550e1d?auto=format&fit=crop&w=150&q=80" },
        { nome: "Licor Fino Artesanal (375ml)", precoUnitario: 55.00, precoCento: null, desc: "Bebida cremosa e adocicada. Excelente companhia para acompanhar docinhos finos, brigadeiros gourmet e café.", foto: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=150&q=80" },
        { nome: "Café Especial Gourmet em Grãos ou Moído (250g)", precoUnitario: 35.00, precoCento: null, desc: "Café artesanal especial de torra média. Essencial para cestas de café da manhã, harmonizando com bolos e pães.", foto: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=150&q=80" }
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

// CONTROLE DO MODAL DE SELEÇÃO DE SABORES
function abrirModal(categoria) {
    const modal = document.getElementById('modal-sabores');
    const titulo = document.getElementById('modal-titulo-categoria');
    
    const titulosFormatados = {
        antepastos: "Antepastos e Patês (150g)", 
        bolos: "Bolos Caseiros & Festa", 
        docinhos: "Docinhos para Festas",
        geleias: "Geleias & Acompanhamentos (150g)", 
        kits: "Kits & Presentes", 
        marmitas: "Marmitas Caseiras & Gourmet",
        leves: "Lanches Naturais, Saladas & Molhos",
        paes: "Pães Artesanais & Roscas", 
        pets: "Linha Pet Gourmet & Funcional", 
        bebidas: "Bebidas & Harmonizações", 
        sobremesas: "Doces e Sobremesas",
        especiais: "Momentos & Sabores"
    };

    if (titulo) {
        titulo.innerText = titulosFormatados[categoria] || "Opções Disponíveis";
    }

    if (categoria === 'especiais') {
        renderizarModalEspeciais();
    } else {
        renderizarModalPadrao(categoria);
    }

    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
    }
}

// RENDERIZAR CATEGORIAS CONVENCIONAIS DO CARDÁPIO (COM SUPORTE A TAMANHOS COMO PETS/CESTAS)
function renderizarModalPadrao(categoria) {
    const lista = document.getElementById('modal-lista-sabores');
    if (!lista) return;

    lista.innerHTML = '';
    const sabores = bancoSabores[categoria] || [];
    
    if (sabores.length === 0) {
        lista.innerHTML = '<p class="empty-text">Nenhum item disponível nesta categoria no momento.</p>';
        return;
    }

    sabores.forEach((sabor, index) => {
        let opcoesHtml = '';
        let precoInicial = sabor.precoUnitario;
        
        if (sabor.precoCento) {
            opcoesHtml = `
                <div class="flavor-options">
                    <label><input type="radio" name="opcao-${index}" value="unitario" checked onchange="atualizarPrecoModal(${index}, ${sabor.precoUnitario}, ${sabor.precoCento})"> Unidade (R$ ${sabor.precoUnitario.toFixed(2).replace('.', ',')})</label>
                    <label><input type="radio" name="opcao-${index}" value="cento" onchange="atualizarPrecoModal(${index}, ${sabor.precoUnitario}, ${sabor.precoCento})"> Cento (R$ ${sabor.precoCento.toFixed(2).replace('.', ',')})</label>
                </div>
            `;
        } else if (sabor.opcoesTamanho && sabor.opcoesTamanho.length > 0) {
            precoInicial = sabor.opcoesTamanho[0].preco;
            opcoesHtml = `<div class="flavor-options" style="margin: 6px 0; font-size: 0.85rem;">`;
            
            sabor.opcoesTamanho.forEach((opcao, optIdx) => {
                const isChecked = optIdx === 0 ? 'checked' : '';
                opcoesHtml += `
                    <label style="margin-right: 10px; cursor: pointer;">
                        <input type="radio" name="padrao-opcao-${categoria}-${index}" value="${optIdx}" ${isChecked} 
                            onchange="atualizarPrecoPadraoComTamanho('${categoria}', ${index}, ${optIdx})"> 
                        ${opcao.nome} (R$ ${opcao.preco.toFixed(2).replace('.', ',')})
                    </label>
                `;
            });
            opcoesHtml += `</div>`;
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
                    <span id="preco-exibido-${categoria}-${index}" class="price">R$ ${precoInicial.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-add" style="padding: 6px 12px; font-size: 12px;" 
                        onclick="adicionarItemPadraoComOpcao('${categoria}', ${index}); fecharModal();">
                        + Adicionar
                    </button>
                </div>
            </div>
        `;
    });
}

// ATUALIZAR PREÇO PARA ITENS PADRÃO COM OPÇÃO DE TAMANHO
function atualizarPrecoPadraoComTamanho(categoria, index, optIdx) {
    const item = bancoSabores[categoria][index];
    const spanPreco = document.getElementById(`preco-exibido-${categoria}-${index}`);
    
    if (spanPreco && item && item.opcoesTamanho) {
        const precoSelecionado = item.opcoesTamanho[optIdx].preco;
        spanPreco.innerText = `R$ ${precoSelecionado.toFixed(2).replace('.', ',')}`;
    }
}

// ADICIONAR ITEM PADRÃO CONSIDERANDO TAMANHO OU CENTO
function adicionarItemPadraoComOpcao(categoria, index) {
    const item = bancoSabores[categoria][index];
    let nomeFinal = item.nome;
    let precoFinal = item.precoUnitario;

    if (item.precoCento) {
        const radioCento = document.querySelector(`input[name="opcao-${index}"][value="cento"]`);
        if (radioCento && radioCento.checked) {
            precoFinal = item.precoCento;
            nomeFinal = `${item.nome} (Cento)`;
        } else {
            nomeFinal = `${item.nome} (Unidade)`;
        }
    } else if (item.opcoesTamanho && item.opcoesTamanho.length > 0) {
        const radioSelecionado = document.querySelector(`input[name="padrao-opcao-${categoria}-${index}"]:checked`);
        if (radioSelecionado) {
            const optIdx = parseInt(radioSelecionado.value);
            const opcao = item.opcoesTamanho[optIdx];
            nomeFinal = `${item.nome} (${opcao.nome})`;
            precoFinal = opcao.preco;
        }
    }

    adicionarAoCarrinho(nomeFinal, precoFinal);
}

// RENDERIZAR O MODAL MOMENTOS & SABORES COM SUPORTE A TAMANHOS (PANETONES E CESTAS)
function renderizarModalEspeciais() {
    const container = document.getElementById('modal-lista-sabores');
    if (!container) return;

    container.innerHTML = '';

    // Dica Pitadavivi no topo com link clicável para a categoria Pães
    const avisoHtml = `
        <div class="aviso-sazonal" style="grid-column: 1 / -1; background-color: #fff9e6; border-left: 4px solid #d4a373; padding: 12px 16px; margin-bottom: 15px; border-radius: 6px; font-size: 0.9rem; color: #5a3e2b;">
            💡 <strong>Dica Pitadavivi:</strong> Quer incluir nossas roscas tradicionais da casa na sua ceia? Elas ficam disponíveis o ano todo na aba 
            <a href="javascript:void(0)" onclick="fecharModalEIrPara('paes')" style="color: #d4a373; font-weight: bold; text-decoration: underline;">Pães</a> do cardápio!
        </div>
    `;
    container.innerHTML += avisoHtml;

    const listaEspeciais = bancoSabores.especiais || [];

    listaEspeciais.forEach((item, index) => {
        let opcoesHtml = '';
        let precoInicial = item.precoUnitario;

        if (item.opcoesTamanho && item.opcoesTamanho.length > 0) {
            precoInicial = item.opcoesTamanho[item.opcoesTamanho.length - 1].preco;
            opcoesHtml = `<div class="flavor-options" style="margin: 6px 0; font-size: 0.85rem;">`;
            
            item.opcoesTamanho.forEach((opcao, optIdx) => {
                const isChecked = optIdx === item.opcoesTamanho.length - 1 ? 'checked' : '';
                opcoesHtml += `
                    <label style="margin-right: 10px; cursor: pointer;">
                        <input type="radio" name="especial-opcao-${index}" value="${optIdx}" ${isChecked} 
                            onchange="atualizarPrecoEspecial(${index}, ${optIdx})"> 
                        ${opcao.nome} (R$ ${opcao.preco.toFixed(2).replace('.', ',')})
                    </label>
                `;
            });
            opcoesHtml += `</div>`;
        }

        container.innerHTML += `
            <div class="flavor-item-row">
                <img src="${item.foto}" alt="${item.nome}" class="flavor-mini-img">
                <div class="flavor-details">
                    <h4>${item.nome}</h4>
                    <p>${item.desc}</p>
                    ${opcoesHtml}
                </div>
                <div class="flavor-action">
                    <span id="preco-especial-${index}" class="price">R$ ${precoInicial.toFixed(2).replace('.', ',')}</span>
                    <button class="btn-add" style="padding: 6px 12px; font-size: 12px;" 
                        onclick="adicionarEspecialComOpcao(${index}); fecharModal();">
                        + Adicionar
                    </button>
                </div>
            </div>
        `;
    });
}

// ATUALIZAR PREÇO AO ESCOLHER O TAMANHO NO MODAL ESPECIAIS
function atualizarPrecoEspecial(index, optIdx) {
    const item = bancoSabores.especiais[index];
    const spanPreco = document.getElementById(`preco-especial-${index}`);
    
    if (spanPreco && item && item.opcoesTamanho) {
        const precoSelecionado = item.opcoesTamanho[optIdx].preco;
        spanPreco.innerText = `R$ ${precoSelecionado.toFixed(2).replace('.', ',')}`;
    }
}

// ADICIONAR ITEM ESPECIAL AO CARRINHO CONSIDERANDO O TAMANHO ESCOLHIDO
function adicionarEspecialComOpcao(index) {
    const item = bancoSabores.especiais[index];
    let nomeFinal = item.nome;
    let precoFinal = item.precoUnitario;

    if (item.opcoesTamanho && item.opcoesTamanho.length > 0) {
        const radioSelecionado = document.querySelector(`input[name="especial-opcao-${index}"]:checked`);
        if (radioSelecionado) {
            const optIdx = parseInt(radioSelecionado.value);
            const opcao = item.opcoesTamanho[optIdx];
            nomeFinal = `${item.nome} (${opcao.nome})`;
            precoFinal = opcao.preco;
        }
    }

    adicionarAoCarrinho(nomeFinal, precoFinal);
}

// ATUALIZAR O PREÇO NA TELA QUANDO O CLIENTE ESCOLHER ENTRE UNIDADE OU CENTO (MODAL PADRÃO ANTIGO)
function atualizarPrecoModal(index, precoUnit, precoCento) {
    const radioCento = document.querySelector(`input[name="opcao-${index}"][value="cento"]`);
    const spanPreco = document.getElementById(`preco-exibido-docinhos-${index}`) || document.getElementById(`preco-exibido-${index}`);
    
    if (spanPreco) {
        const precoAtual = (radioCento && radioCento.checked) ? precoCento : precoUnit;
        spanPreco.innerText = `R$ ${precoAtual.toFixed(2).replace('.', ',')}`;
    }
}

// FECHAR MODAL
function fecharModal() {
    const modal = document.getElementById('modal-sabores');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
    }
}

// FECHAR MODAL E ROLAR ATÉ A CATEGORIA DE DESTINO (PÃES)
function fecharModalEIrPara(categoriaId) {
    fecharModal();
    
    const elementoDestino = document.getElementById(categoriaId + '-card') || document.getElementById(categoriaId);
    if (elementoDestino) {
        elementoDestino.scrollIntoView({ behavior: 'smooth', block: 'center' });
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