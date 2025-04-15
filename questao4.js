const { log } = require("console");

class ItemCardapio {
    constructor(nome, preco) {
      if (this.constructor === ItemCardapio) {
        throw new Error('Classe abstrata.');
    }
        this.nome = nome;
        this.preco = preco;
    }
  
    preparar() {
      throw new Error('Método abstrato preparar().');
    }
  }
  
  // Subclasses concretas
  class PratoPrincipal extends ItemCardapio {
    preparar() {
      return `Prato principal "${this.nome}" preparado!`;
    }
  }
  
  class Sobremesa extends ItemCardapio {
    preparar() {
      return `Sobremesa "${this.nome}" pronta!`;
    }
  }
  
  class Bebida extends ItemCardapio {
    preparar() {
      return `Bebida "${this.nome}" servida gelada!`;
    }
  }
  

  class CriadorDeItem {
    criarItem() {
      throw new Error('Método abstrato.');
    }
  }
  

  class CriadorDePratoPrincipal extends CriadorDeItem {
    criarItem() {
      return new PratoPrincipal('Filé com fritas', 32.0);
    }
  }
  
  class CriadorDeSobremesa extends CriadorDeItem {
    criarItem() {
      return new Sobremesa('Brigadeiro', 8.0);
    }
  }
  
  class CriadorDeBebida extends CriadorDeItem {
    criarItem() {
      return new Bebida('Suco de laranja', 6.0);
    }
  }
  
  class Pedido {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    resumirPedido() {
        console.log('Resumo do pedido:');
      this.itens.forEach((item, i) => {
        console.log(`Item ${i + 1}:`);
        console.log(`- Nome: ${item.nome}`);
        console.log(`- Preço: R$${item.preco.toFixed(2)}`);
        console.log(`- ${item.preparar()}`);
      });
    }
  }
  

  const pedido = new Pedido();
  
  const prato = new CriadorDePratoPrincipal().criarItem();
  const sobremesa = new CriadorDeSobremesa().criarItem();
  const bebida = new CriadorDeBebida().criarItem();
  
  pedido.adicionarItem(prato);
  pedido.adicionarItem(sobremesa);
  pedido.adicionarItem(bebida);
  
  console.log(pedido.resumirPedido())
  
  
    