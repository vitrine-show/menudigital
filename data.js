/* Cardápio - Esquina do Espeto. Edite aqui nomes, preços e descrições. */
window.MENU = [
  { id: "espetinhos", nome: "Espetinhos", icone: "espeto", grupos: [{ itens: [
    ["Camarão", 16], ["Picanha", 30], ["Contra Filé", 14], ["Medalhão de Queijo", 12], ["Porco", 12],
    ["Linguiça Caseira", 12], ["Tulipa", 12], ["Coxinha da Asa", 12], ["Romeu e Julieta", 14], ["Kafta", 12],
    ["Almôndega Recheada", 12], ["Medalhão de Frango", 12], ["Coração", 12], ["Coração com Bacon", 12],
    ["Mussarela", 12], ["Pão de Alho", 10]
  ]}]},
  { id: "porcoes", nome: "Porções", icone: "porcao", grupos: [{ itens: [
    ["Picanha na Chapa 400gr", 89.9], ["Picanha 400gr na Mandioca 400gr", 119.9], ["Picanha 400gr com Fritas 400g", 119.9],
    ["Contra Filé 400gr", 69.9], ["Contra Filé 400gr com Fritas 400gr", 89.9], ["Filé de Tilápia 400gr", 49.9],
    ["Filé de Tilápia 400gr com Fritas 400gr", 64.9], ["Fígado Acebolado 250gr", 19.9], ["Fígado Acebolado 500gr", 29.9],
    ["Fritas 500gr", 25], ["Mandioquinha Crocante 300gr", 15.9], ["Mandioquinha Crocante 300gr com Torresmo 300gr", 19.9],
    ["Anel de Cebola 10 unid.", 12.9], ["Torresmo 300gr", 15.9], ["Macarrão na Chapa 500gr", 28],
    ["Porção de Arroz com Alho", 15.9], ["Acréscimo de Bacon e Queijo", 9.9], ["Purê de Batata 300gr", 8], ["Vinagrete 300gr", 8]
  ]}]},
  { id: "hamburguer", nome: "Hambúrguer", icone: "burger", grupos: [{ itens: [
    ["Hambúrguer Artesanal Feito na Brasa", 25, "Pão com gergelim, 120gr de carne bovina feita na brasa, bacon, muçarela, cebola, tomate e alface."]
  ]}]},
  { id: "jantinha", nome: "Jantinha", icone: "prato", grupos: [
    { itens: [
      ["Jantinha com 1 Espeto", 30, "Arroz branco com alho frito, purê de batata, farofa da casa e um espetinho de sua preferência. Opções de espeto no cardápio. Observação: exceto boi, picanha e camarão."],
      ["Jantinha com 2 Espetos", 35, "Arroz branco com alho frito, purê de batata, farofa da casa e dois espetinhos de sua preferência. Opções de espeto no cardápio. Observação: exceto boi, picanha e camarão."],
      ["Jantinha com 2 Espetos de Boi", 38, "Arroz branco com alho frito, purê de batata, farofa da casa e dois espetinhos de sua preferência. Opções de espeto no cardápio. Observação: exceto picanha e camarão."]
    ]}
  ]},
  { id: "strogonoff", nome: "Strogonoff", icone: "panela", grupos: [
    { itens: [
      ["Strogonoff de Carne Completo 500gr", 29.9, "Suculenta iscas de carne envolvidas por molho de strogonoff cremoso, arroz branco com alho frito e batata palha. Obs: Não possui champignon"],
      ["Strogonoff de Frango Completo 500gr", 29.9, "Suculentas iscas de frango envolvidos por um molho de strogonoff cremoso, arroz branco com alho frito, e batata palha. Obs: Não possui champignon"]
    ]}
  ]},
  { id: "natural", nome: "Água de Coco", icone: "copo", grupos: [{ itens: [
    ["Água de Coco", 9]
  ]}]},
  { id: "sucos", nome: "Suco de Frutas", icone: "copo", desc: "Consulte as opções disponíveis", grupos: [{ itens: [
    { nome: "Copo 330ml", msgNome: "Suco de Frutas - Copo 330ml", preco: 12 },
    { nome: "Jarra 1L", msgNome: "Suco de Frutas - Jarra 1L", preco: 25 }
  ]}]},
  { id: "bebidas", nome: "Bebidas", icone: "lata", grupos: [{ itens: [
    ["Coca-Cola KS", 7], ["Sprite KS", 7], ["Fanta KS", 7], ["Coca-Cola Lata 350ml", 8], ["Guaraná Lata 350ml", 7],
    ["Fanta Lata 350ml", 7], ["Sprite Lata 350ml", 7], ["Coca-Cola 220ml", 5], ["Fanta 220ml", 5], ["Guarapan 220ml", 5],
    ["Coca-Cola 1L", 10], ["Guaraná 1L", 9], ["Coca-Cola 2L", 17], ["Guaraná 2L", 13], ["Guaraná Zero 2L", 13],
    ["Fanta 2L", 12], ["Limoneto", 8], ["Suco Lata 290ml", 7], ["Suco Caixa 1L", 13], ["Água Mineral", 4],
    ["Água com Gás", 5], ["Red Bull 250ml", 13], ["Monster 473ml", 14]
  ]}]},
  { id: "cervejas", nome: "Cervejas", icone: "caneca", grupos: [
    { id: "garrafa", titulo: "Garrafa 600ml", itens: [
      ["Heineken 600ml", 16], ["Corona 600ml", 19], ["Stella Pure Gold 600ml", 19], ["Original 600ml", 14],
      ["Spaten 600ml", 14], ["Brahma 600ml", 12], ["Eisenbahn 600ml", 12]
    ]},
    { id: "latao", titulo: "Latão", itens: [
      ["Heineken Latão", 12], ["Original Latão", 8], ["Brahma Latão", 8], ["Skol Latão", 7], ["Kaiser Latão", 6]
    ]},
    { id: "longneck", titulo: "Long Neck", itens: [
      ["Corona Long Neck", 12], ["Heineken Long Neck", 12], ["Stella Pure Gold Long Neck", 12], ["Skol Beats Long Neck", 12],
      ["Heineken Zero Long Neck", 12], ["Budweiser Zero Long Neck", 9], ["Syn Lemon Ice Long Neck", 8], ["Smirnoff Ice Long Neck", 12]
    ]}
  ]},
  { id: "drinks", nome: "Drinks", icone: "taca", grupos: [{ itens: [
    ["Caipirinha", 16], ["Copão 1 Dose", 25], ["Copão 2 Doses", 30], ["Mascate", 16], ["Bang Bang", 15]
  ]}]},
  { id: "doses", nome: "Doses", icone: "dose", grupos: [{ itens: [
    ["Cachaça", 6], ["Para Tudo", 5], ["Gin Tanqueray", 18], ["Gin Gordon's", 15], ["Whisky Buchanan", 20],
    ["Whisky Old Parr 12 Anos", 18], ["Whisky Jack Daniels", 18], ["Whisky Red Label", 16],
    ["Campari com Laranja ou Limão", 15], ["Conhaque Dreher", 6], ["Conhaque Presidente", 6],
    ["Licor 43 Tradicional", 16], ["Tequila", 15]
  ]}]}
];
window.WHATSAPP = "5531996202280";
