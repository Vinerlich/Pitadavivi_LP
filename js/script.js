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
        { nome: "Biscoito Integral de Abóbora", precoUnitario: 14.00, precoCento: null, desc: "Sem conservantes, saudável para cães.", foto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80" }
    ],
    especiais: [
        // ==========================================
        // TEMPORADA: FIM DE ANO (Natal e Ano Novo)
        // Abertura: 15 de Novembro | Fechamento: 31 de Dezembro
        // ==========================================
        { 
            nome: "Ceia Completa de Fim de Ano (Sob Encomenda)", 
            precoUnitario: 450.00, 
            inicioMes: 11, inicioDia: 15, 
            fimMes: 12, fimDia: 31, 
            desc: "Cardápio especial sob encomenda para Natal ou Ano Novo. Consulte pratos e porções disponíveis.", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Panetone Artesanal Especial (500g)", 
            precoUnitario: 75.00, 
            inicioMes: 11, inicioDia: 15, 
            fimMes: 12, fimDia: 31, 
            desc: "Panetone de fabricação própria, extremamente macio, aromático e recheado de sabor.", 
            foto: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Tostadas de Panetone Exclusivas", 
            precoUnitario: 65.00, 
            inicioMes: 11, inicioDia: 15, 
            fimMes: 12, fimDia: 31, 
            desc: "Nossas exclusivas tostadas artesanais feitas com panetone de fabricação própria. Edição limitada de fim de ano[cite: 1].", 
            foto: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Rosca Natalina Artesanal", 
            precoUnitario: 85.00, 
            inicioMes: 11, inicioDia: 15, 
            fimMes: 12, fimDia: 31, 
            desc: "Rosca artesanal festiva decorada, perfeita para a mesa de Natal ou café da manhã.", 
            foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Natalino (Panetone + Mini Geleias)", 
            precoUnitario: 110.00, 
            inicioMes: 11, inicioDia: 15, 
            fimMes: 12, fimDia: 31, 
            desc: "Panetone artesanal acompanhado de caixa com 4 mini geleias artesanais variadas.", 
            foto: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=150&q=80" 
        },

        // ==========================================
        // TEMPORADA: DIA DAS MÃES (Segundo domingo de Maio)
        // Abertura: 20 de Abril | Fechamento: 10 de Maio
        // ==========================================
        { 
            nome: "Cesta Especial Café da Manhã - Dia das Mães", 
            precoUnitario: 180.00, 
            inicioMes: 4, inicioDia: 20, 
            fimMes: 5, fimDia: 10, 
            desc: "Cesta artesanal afetiva e completa sob encomenda para presentear no Dia das Mães.", 
            foto: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80" 
        },

        // ==========================================
        // TEMPORADA: DIA DOS NAMORADOS (12 de Junho)
        // Abertura: 20 de Maio | Fechamento: 12 de Junho
        // ==========================================
        { 
            nome: "Kit Romântico Tábua de Frios & Vinho - Namorados", 
            precoUnitario: 240.00, 
            inicioMes: 5, inicioDia: 20, 
            fimMes: 6, fimDia: 12, 
            desc: "Combo especial com vinho selecionado, queijos finos, pães rústicos e doces para dois.", 
            foto: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=150&q=80" 
        },

        // ==========================================
        // TEMPORADA: FESTA JUNINA (Junho)
        // Abertura: 1º de Junho | Fechamento: 30 de Junho
        // ==========================================
        { 
            nome: "Kit Quitutes Arraiá Pitadavivi", 
            precoUnitario: 130.00, 
            inicioMes: 6, inicioDia: 1, 
            fimMes: 6, fimDia: 30, 
            desc: "Seleção especial de bolos rústicos, doces típicos artesanais e quitutes juninos.", 
            foto: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80" 
        },

        // ==========================================
        // TEMPORADA: DIA DOS PAIS (Segundo domingo de Agosto)
        // Abertura: 20 de Julho | Fechamento: 10 de Agosto
        // ==========================================
        { 
            nome: "Kit Especial Dia dos Pais (Aperitivos & Cervejas)", 
            precoUnitario: 160.00, 
            inicioMes: 7, inicioDia: 20, 
            fimMes: 8, fimDia: 10, 
            desc: "Kit artesanal com cervejas especiais, pães rústicos, antipastos e petiscos selecionados.", 
            foto: "https://images.unsplash.com/photo-1608270105740-23a54d550e1d?auto=format&fit=crop&w=150&q=80" 
        },

        // ==========================================
        // TEMPORADA: DIA DAS CRIANÇAS E PROFESSORES (Outubro)
        // Abertura: 20 de Setembro | Fechamento: 15 de Outubro
        // ==========================================
        { 
            nome: "Caixa Presenteável Doce Afeto (Professores / Crianças)", 
            precoUnitario: 85.00, 
            inicioMes: 9, inicioDia: 20, 
            fimMes: 10, fimDia: 15, 
            desc: "Caixa decorada com seleção de doces artesanais e guloseimas para presentear com carinho.", 
            foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" 
        },

        // ==========================================
        // KITS FIXOS (Disponíveis o ano todo quando não houver campanha ativa)
        // ==========================================
        { 
            nome: "Caixa Degustação de Doces Finos", 
            precoUnitario: 95.00, 
            desc: "Seleção especial sob encomenda dos nossos melhores doces gourmet.", 
            foto: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=150&q=80" 
        },
        { 
            nome: "Kit Chá da Tarde Aconchego", 
            precoUnitario: 140.00, 
            desc: "Composto por bolo caseiro, geleia artesanal, biscoitos amanteigados e sachês de chá.", 
            foto: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&q=80" 
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
    ],
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
        geleias: "Geleias & Acompanhamentos (150g)", 
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