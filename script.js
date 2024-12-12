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

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('grafico').getContext('2d');
  let chartInstance;

  const configPadrao = (label, data, color) => ({
    type: 'line', 
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'], 
      datasets: [{
        label: label,
        data: data, 
        backgroundColor: `${color}33`,
        borderColor: color, 
        borderWidth: 2, 
        tension: 0.4, 
        fill: true 
      }]
    },
    options: {
      responsive: true, 
      maintainAspectRatio: false, 
      plugins: {
        legend: {
          display: true,
          position: 'top' 
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Meses'
          }
        },
        y: {
          beginAtZero: true, 
          title: {
            display: true,
            text: 'Valores'
          }
        }
      }
    }
  });

  const graficosConfig = {
    asterisk: configPadrao('Asterisk', [10, 20, 15, 30], 'rgba(75, 192, 192, 1)'),
    fail2ban: configPadrao('Fail2ban', [5, 15, 10, 25], 'rgba(153, 102, 255, 1)'),
    iptables: configPadrao('Iptables', [50, 40, 35, 25], 'rgba(255, 99, 132, 1)')
  };

  const renderGrafico = (id) => {
    if (chartInstance) {
      chartInstance.destroy(); 
    }
    chartInstance = new Chart(ctx, graficosConfig[id]);
  };

  renderGrafico('asterisk');

  document.getElementById('asterisk').addEventListener('click', () => renderGrafico('asterisk'));
  document.getElementById('fail2ban').addEventListener('click', () => renderGrafico('fail2ban'));
  document.getElementById('iptables').addEventListener('click', () => renderGrafico('iptables'));
});