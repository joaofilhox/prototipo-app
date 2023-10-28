
var carros = ["Carro A", "Carro B", "Carro C", "Carro D"];
var velocidades = [75, 82, 67, 95];
var cores = ["#FF5733", "#33FF57", "#3366FF", "#FF33AA"];

var ctx = document.getElementById("dadosGrafico").getContext("2d");

var grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: carros,
        datasets: [{
            data: velocidades,
            backgroundColor: cores
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Velocidades dos Carros (km/h)'
        }
    }
});