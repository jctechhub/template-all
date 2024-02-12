window.onload = function () {

document.getElementById('download').addEventListener('click', function() {
    var canvas = document.getElementById('myChart');
    var imgURL = canvas.toDataURL('image/png');
    
    var link = document.createElement('a');
    link.href = imgURL;
    link.download = 'chart.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

  var ctx = document.getElementById("myChart").getContext("2d");

  var chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Income",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  var chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Step 4: Create a new Chart object with your data and options
  var myChart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: chartOptions,
  });

  document.getElementById("chart-tab").addEventListener("click", function () {
    // Your code here

    var incomeAndExpenses = {};
    // Loop over the months
    [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ].forEach(function (month) {
      var income = document.getElementById("income-" + month).value;
      var expenses = document.getElementById("expense-" + month).value;

      incomeAndExpenses[month] = {
        income: income,
        expenses: expenses,
      };
    });
    var incomeData = [];
    var expensesData = [];
    [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ].forEach(function (month) {
      incomeData.push(incomeAndExpenses[month].income);
      expensesData.push(incomeAndExpenses[month].expenses);
    });

    console.log(incomeAndExpenses);

    // Step 3: Prepare your data and options
    // Update the data in the chart
    myChart.data.datasets[0].data = incomeData;
    myChart.data.datasets[1].data = expensesData;

    // Update the chart to reflect the new data
    myChart.update();
  });
};
