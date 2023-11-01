let myChart;

document.addEventListener('DOMContentLoaded', (event) => {
    // Setup a context for the chart
    const ctx = document.getElementById('myChart').getContext('2d');
  
    // Create the chart using the context
    myChart = new Chart(ctx, {
      type: 'bar', // This defines the chart type
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        datasets: [{
          label: 'Rolls',
          data: new Array(20).fill(0), // Start with an array of 20 zeros
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: false, // if this is set to true, it makes the chart grow infinetly for some reason.  be careful.
        maintainAspectRatio: false, // to allow CSS to control the aspect ratio
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

// This will store the count of each roll
let rollCounts = new Array(20).fill(0);

// Function to record a roll and update the chart
function recordRoll(roll) {
    rollCounts[roll - 1]++; // Increment the count for the rolled number
    updateRollCount();
    updateChart(); // You will define this function to update the chart
}

// Function to update the chart
function updateChart() {
    // Assuming you've already created a chart instance named 'myChart'
    myChart.data.datasets[0].data = rollCounts;
    myChart.update();
}

// Function to update the number of rolls displayed
function updateRollCount() {
    const rollCountElement = document.getElementById('numberOfRolls');
    const totalRolls = rollCounts.reduce((acc, count) => acc + count, 0); // Sum up all the rolls
    rollCountElement.textContent = totalRolls; // Update the display
}

// Call this function whenever you update the chart or record a roll