
import Chart from 'chart.js/auto';

new Chart(document.getElementById("chartJsCanvas"), {
  type: 'bar',
  data: {
    labels: ["01/2016","02/2016","03/2016","04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016"],
    datasets: [
        {
            "label": "Année N",
            "data": ["20","30","10","5","70","50","40","25","80","15","10","20"],
            "backgroundColor": "#1f78b4",
            "stack": "Stack Year N"
        },
        {
            "label": "Année N : AGEC",
            "data": ["20","20","20","20","20","20","20","20","20","20","20","20"],
            "backgroundColor": "#98d323",
            "stack": "Stack Year N"
        },
        
        {
            "label": "Année N : Produits vert",
            "data": ["20","30","10","5","70","50","40","25","80","15","10","20"],
            "backgroundColor": "#1e6f1b",
            "stack": "Stack Year N"
        },
        {
            "label": "Année N-1",
            "data": ["20","20","20","20","20","20","20","20","20","20","20","20"],
            "backgroundColor": "#11376f",
            "stack": "Stack Year N minus"
        },
        {
            "label": "Année N-1 : AGEC",
            "data": ["20","20","20","20","20","20","20","20","20","20","20","20"],
            "backgroundColor": "#98d323",
            "stack": "Stack Year N minus"
        },
        {
            "label": "Année N-1 : Produits vert",
            "data": ["20","20","20","20","20","20","20","20","20","20","20","20"],
            "backgroundColor": "#1e6f1b",
            "stack": "Stack Year N minus"
        }
    ]
  },
  options: {
      legend: { display: false },
      title: {
      display: false,
      text: 'Title'
      }
  }
});