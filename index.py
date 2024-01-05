class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataque = ""
        if self.tipo == "mago":
            ataque = "usou magia"
        elif self.tipo == "guerreiro":
            ataque = "usou espada"
        elif self.tipo == "monge":
            ataque = "usou artes marciais"
        elif self.tipo == "ninja":
            ataque = "usou shuriken"

        print(f"O {self.tipo} {self.nome} atacou usando {ataque}")


# Exemplo de uso
heroi1 = Heroi("Gandalf", 1000, "mago")
heroi2 = Heroi("Aragorn", 35, "guerreiro")

heroi1.atacar()
heroi2.atacar()
