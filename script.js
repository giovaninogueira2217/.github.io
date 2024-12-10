document.addEventListener('DOMContentLoaded',() => {
  const statusElements = document.querySelectorAll('.status');
  const ctx = document.getElementById('graficog').getContext('2d');
const data = [450, 15];
const graficog = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: data,
            backgroundColor: ['Green', 'red'],
        }]
    },
});

// Atualiza as informações no contêiner abaixo do gráfico
const infoGrafico = document.getElementById('info-grafico');
infoGrafico.innerHTML = `
    <p><span style="color: green;">Conectados:</span> ${data[0]}</p>
    <p><span style="color: red;">Falhas:</span> ${data[1]}</p>
`;

  statusElements.forEach(statusElement => {
    const statusText = statusElement.textContent.trim().toLowerCase();

    if (statusText === 'true') {
      statusElement.classList.add('status-true');
    } else if (statusText === 'false') {
      statusElement.classList.add('status-false');
    }
  });
});

   