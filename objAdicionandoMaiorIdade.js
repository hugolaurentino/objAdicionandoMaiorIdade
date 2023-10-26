const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    }
]

const novoUsuario = []

for (const acrescentar of usuarios) {
    acrescentar.idade >= 18 ? novoUsuario.push({ ...acrescentar, maior_idade: true }) :
        novoUsuario.push({ ...acrescentar, maior_idade: false })
}

console.log(novoUsuario);
