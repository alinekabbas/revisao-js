const telaA = "Componente A"
const telaB = "Componente B"
const telaC = "Componente C"

let telaAtiva = "A"

function renderizaTela() {
    switch (telaAtiva) {
        case "A":
            return telaA
        case "B":
            return telaB
        case "C":
            return telaC
        default:
            console.log("O caso é default.")
    }
}