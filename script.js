document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os elementos com a classe "status"
  const statusElements = document.querySelectorAll('.status');

  // Itera sobre cada elemento e ajusta a classe com base no texto
  statusElements.forEach(statusElement => {
    const statusText = statusElement.textContent.trim().toLowerCase();

    if (statusText === 'true') {
      statusElement.classList.add('status-true');
    } else if (statusText === 'false') {
      statusElement.classList.add('status-false');
    }
  });
});

const script = document.createElement('script');
const ctx = document.getElementById('graficopizza').getContext('2d');
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
script.onload = () => {
    console.log("Chart.js carregado com sucesso!");
    const data = {
      labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D'],
      datasets: [{
        label: 'Distribuição',
        data: [25, 35, 20, 20], // Valores em porcentagem
        backgroundColor: [
          '#ff9999',
          '#66b3ff',
          '#99ff99',
          '#ffcc99'
        ],
        hoverOffset: 4 // Destaque ao passar o mouse
      }]
    };
    
    // Criação do gráfico
    const graficoPizza = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
};
script.onerror = () => {
    console.error("Erro ao carregar o Chart.js");
};
document.head.appendChild(script);