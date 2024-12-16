document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("dynamicChart").getContext("2d");
  var minhaDiv = document.getElementById('number-host');

  const initialData = [85, 15];
  let chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Conectados", "Falhas"],
      datasets: [{
        label: "Dados Iniciais",
        data: initialData,
        backgroundColor: ["#0fc902", "#ff0000"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            generateLabels: (chart) => {
              const data = chart.data.datasets[0].data;
              const total = data.reduce((acc, value) => acc + value, 0);

              return chart.data.labels.map((label, i) => {
                const value = data[i];
                const percentage = ((value / total) * 100).toFixed(1); 
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: chart.data.datasets[0].backgroundColor[i]
                };
              });
            }
          }
        },
        hosts: {
          display: true,
          text: "Hosts:"
        },
        title: {
          display: true,
          text: "Asterisk"
        },
        padding: {
          top: 20,
          bottom: 30
        },
        font: {
          size: 0 
        },
        
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              const data = tooltipItem.dataset.data;
              const total = data.reduce((acc, value) => acc + value, 0);
              const value = data[tooltipItem.dataIndex];
              const percentage = ((value / total) * 100).toFixed(1);
              return `${tooltipItem.label}: ${value} (${percentage}%)`;
            }
          }
        },
        
        datalabels: {
          display: true,
          formatter: (value, context) => {
            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
            const percentage = ((value / total) * 100).toFixed(1); 
            return `${context.chart.options.plugins.title.text.hosts}`; 
          },
          color: '#fff', 
          font: {
            weight: 'bold',
            size: 20
          }
        }
      }
    }
  });

  
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach(item => {
    item.addEventListener("click", async (e) => {
      e.preventDefault();

      const chartType = item.dataset.chart;
      
      let newData;
      let newTitle; 
      let newHosts;

      switch (chartType) {
        case "asterisk":
          newHosts = "Hosts conectados:";
          newData = [70, 30];
          newTitle = "Dados do Asterisk";
          break;
        case "docker":
          newhosts = "Hosts conectados:";
          newData = [20, 80];
          newTitle = "Dados do Docker";
          break;
        case "fail2ban":
          newhosts = "Hosts conectados:";
          newData = [50, 50];
          newTitle = "Dados do Fail2ban";
          break;
        case "iptables":
          newhosts = "Hosts conectados:";
          newData = [75, 25];
          newTitle = "Dados do Iptables";
          break;
        case "iptell":
          newhosts = "Hosts conectados:";
          newData = [35, 65];
          newTitle = "Dados do Iptell";
          break;
        case "node":
          newhosts = "Hosts conectados:";
          newData = [99, 1];
          newTitle = "Dados do Node";
          break;
        default:
          newhosts = "Hosts conectados:";
          newData = [90, 10];
          newTitle = "Gráfico Dinâmico";
      }

      chartInstance.data.datasets[0].data = newData;
      chartInstance.options.plugins.title.text = newTitle;
      
      chartInstance.update();
    });
  });
});
