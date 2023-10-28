document.getElementById("coletar-dados").addEventListener("click", function () {
    let carros = ["Carro A", "Carro B", "Carro C", "Carro D"]
    let tabelaBody = document.querySelector("tbody")
    tabelaBody.innerHTML = ""
    carros.forEach(function (carro) {
        let temperatura = Math.random() * 100
        let desgaste = Math.random() * 5
        let velocidade = Math.random() * 100
        let tamanho = getRandomTamanho()

        let novaLinha = tabelaBody.insertRow()
        novaLinha.innerHTML = `
            <td>${carro}</td>
            <td>${temperatura.toFixed(2)} °C</td>
            <td>${desgaste.toFixed(2)}</td>
            <td>${velocidade.toFixed(2)} km/h</td>
            <td>${tamanho} m</td>
        `

        if (velocidade > 60) {
            novaLinha.cells[3].style.color = "red"
            alert(`Velocidade superior a 60 km/h em ${carro}`)
        }
    })
})

function getRandomTamanho() {
    let tamanhos = ["4.0", "4.2", "4.5", "4.8", "5.0", "5.2"]
    let randomIndex = Math.floor(Math.random() * tamanhos.length)
    return tamanhos[randomIndex]
}
