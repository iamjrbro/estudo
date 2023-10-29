//define uma nova propriedade diretamente em um objeto ou modifica uma proprieda já existente em um objetoe e retorna um objeto.

//trava a propriedade do objeto, setando-a e gerando precisão

function product(name, price,storage){
    this.name = name;
    this.price = price;
    this.storage = storage;

    Object.defineProperty(this, "storage,", {
        enumerable: true,
        value: storage,
        writable: false,
        configurable: !true
    });
}