

class CriadorDoItem{
    constructor(nome,preco){
        if(this.constructor === CriadorDoItem){
            throw new Error("essa classe CriadorDeItem é abstrata")
        }
        this.nome = nome;
        this.preco = preco;
    }
    preparar(){
        throw new Error("O método preparar() é abstrato")
    }
}

class CriadorDePratoPrincipal extends CriadorDoItem{
    preparar(){
        return `Preparando o prato principal ${this.nome} que leva ${this.tempoPreparo} minutos`;
    }
}

class CriadorDeSobremesa extends CriadorDoItem{
    preparar(){
        return `Preparando a sobremesa ${this.nome} que leva ${this.tempoPreparo} minutos`;
    }
}

const pratoPrincipal = new CriadorDePratoPrincipal("Feijoada", 30);
console.log(pratoPrincipal.preparar());