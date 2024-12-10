document.addEventListener('DOMContentLoaded',() => {
  const statusElements = document.querySelectorAll('.status');
  const ctx = document.getElementById('grafico').getContext('2d');
  const grafico = new Chart(ctx, {

    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'], 
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['red', 'blue', 'yellow'],
        }]
    },
});
  statusElements.forEach(statusElement => {
    const statusText = statusElement.textContent.trim().toLowerCase();

    if (statusText === 'true') {
      statusElement.classList.add('status-true');
    } else if (statusText === 'false') {
      statusElement.classList.add('status-false');
    }
  });
});

   