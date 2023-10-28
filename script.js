document.getElementById("coletar-dados").addEventListener("click", function() {

    let carros = ["Carro A", "Carro B", "Carro C", "Carro D"]
    let temperaturas = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
    let velocidades = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]

    
    let tabela = document.querySelector("table")
    let tbody = tabela.querySelector("tbody")

    for (let i = 0; i < carros.length; i++) {
        let newRow = tbody.insertRow(tbody.rows.length)
        newRow.style.opacity = 0
        setTimeout(function (row) {
            return function () {
                row.style.opacity = 1
            }
        }(newRow), 100 * i)

        let cell1 = newRow.insertCell(0)
        let cell2 = newRow.insertCell(1)
        let cell3 = newRow.insertCell(2)
        cell1.innerHTML = carros[i]
        cell2.innerHTML = temperaturas[i].toFixed(2)
        cell3.innerHTML = velocidades[i].toFixed(2)

        let velocidadeAtual = parseFloat(velocidades[i])
        if (velocidadeAtual > 60) {
            cell3.style.color = "red" 
            alert("Velocidade superior a 60 km/h em " + carros[i])
        }
    }
})
