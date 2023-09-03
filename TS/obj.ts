// Objeto - sem previsibilidade
// não é uma boa pratica 
let pessoa: object = {
    nome: "Henrique",
    cidade:"SSA",
    }
    // Jeito correto de  criar obj
    // objeto Tipado - Com previsibilidade 
    type produtoLoja = {
        propriedade: string;
        propriedade1: number;
    }
    
    let produto: produtoLoja = {
        propriedade: "tipo Texto",
        propriedade1: 50,
    }
    