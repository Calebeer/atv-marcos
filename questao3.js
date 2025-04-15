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
  

  class CriadorDeItem {
    criarItem() {
      throw new Error('Método abstrato.');
    }
}
  

  class CriadorDePratoPrincipal extends CriadorDeItem {
    criarItem() {
      return new PratoPrincipal('Carne Acebolada', 32.0);
    }
  }
  
  class CriadorDeSobremesa extends CriadorDeItem {
    criarItem() {
      return new Sobremesa('Doce de morango', 8.0);
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
      this.itens.forEach((item, i) => {
        console.log(`Item ${i + 1}:`);
        console.log(`Nome: ${item.nome}`);
        console.log(`Preço: R$${item.preco.toFixed(2)}`);
        console.log(`${item.preparar()}`);
      });
    }
  }
  

  const pedido = new Pedido();
  
  const prato = new CriadorDePratoPrincipal().criarItem();
  const sobremesa = new CriadorDeSobremesa().criarItem();
  
  pedido.adicionarItem(prato);
  pedido.adicionarItem(sobremesa);
  
  pedido.resumirPedido();
  
