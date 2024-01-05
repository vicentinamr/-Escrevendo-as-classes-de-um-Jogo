class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque genérico";
        }

        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");

const heroi1JSON = JSON.stringify(heroi1);
const heroi2JSON = JSON.stringify(heroi2);

console.log(heroi1JSON);
console.log(heroi2JSON);
