//CHARTS

//src: https://wits.worldbank.org/trade/comtrade/en/country/SGP/year/2021/tradeflow/Imports/partner/ALL/product/081010#
//src: 
const countries = ["Korea, Rep.", "United States", "Australia", "Japan", "New Zealand", "Egypt, Arab Rep.", "Netherlands", "Mexico",
  "Malaysia", "Greece"];
const kilo = [1067010, 1406000, 563170, 114950, 70830, 36420, 29990, 22130, 48420, 21580];
const money = [355204, 306900, 84049, 73408, 19972, 14012, 11108, 10357, 6776, 5832];

//bar chart
const dataObj = {
  labels: countries,
  datasets: [
    {
      label: "Quanity of Imports(KG)",
      data: kilo,
      borderWidth: 2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(201, 203, 207, 0.8)',
        'rgba(0, 204, 255, 0.8)',
        'rgba(255, 0, 255, 0.8)',
        'rgba(255, 204, 0, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgba(0, 204, 255)',
        'rgba(255, 0, 255)',
        'rgba(255, 204, 0)'
      ],
      borderWidth: 1
    }
  ],
  options: {
    responsive: false,
    title: {
      display: true,
      text: 'Singapore Strawberry Imports (In KG)',
      borderWidth: 2,
      fontSize: 24,
      fontColor: '#b22e16',
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: 'black',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: 'black',
        }
      }]
    }
  }
};

new Chart("kilochart", {
  type: "bar",
  data: dataObj,
  options: {
    responsive: false,
    title: {
      display: true,
      text: 'Singapore Strawberry Imports 2021 (In KG)',
      borderWidth: 2,
      fontSize: 24,
      fontColor: '#b22e16',
    },
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          color: "#1C7C54",
          lineWidth: 0.5,
          drawBorder: false,
        },
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
    },
  }
});
//END of barchart


//pie chart, adapted from bar chart + help from chat.gpt

// Get the canvas element
const pieChart = document.getElementById("pieChart");

// Define the data for the chart
const data = {
  labels: countries,
  datasets: [
    {
      label: "Singapore Strawberry Imports (In USD)",
      data: money,
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(201, 203, 207, 0.8)',
        'rgba(0, 204, 255, 0.8)',
        'rgba(255, 0, 255, 0.8)',
        'rgba(255, 204, 0, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgba(0, 204, 255)',
        'rgba(255, 0, 255)',
        'rgba(255, 204, 0)'
      ],
      hoverOffset: 4,
    },
  ],
};

// Create the chart
const myPieChart = new Chart(pieChart, {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Singapore Strawberry Imports 2021 (In USD)',
      borderWidth: 2,
      fontSize: 24,
      fontColor: '#b22e16',
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  },
});
// end of piechart

//bubble chart, adapted from chat.gpt
// Define data
var bubble = {
        datasets: [
          {
            label: 'Strawberry Exports',
            data: [
              {
                x: 833028.85,
                y: 201604000,
                r: 50,
                name: "Mexico",
                label: "Mexico"
              },
              {
                x: 733197.24,
                y: 274556000,
                r: 42.17,
                name: "Spain",
                label: "Spain"
              },
              {
                x: 595945.38,
                y: 146996000,
                r: 34.06,
                name: "United States",
                label: "United States"
              },
              {
                x: 300502.71,
                y: 60752900,
                r: 17.59,
                name: "Netherlands",
                label: "Netherlands"
              },
              {
                x: 268214.47,
                y: 73973800,
                r: 14.99,
                name: "European Union",
                label: "European Union"
              },
              {
                x: 153154.87,
                y: 35246300,
                r: 9.83,
                name: "Belgium",
                label: "Belgium"
              },
              {
                x: 137513.26,
                y: 75334800,
                r: 8.78,
                name: "Greece",
                label: "Greece"
              },
              {
                x: 117539.51,
                y: 24720700,
                r: 7.48,
                name: "Egypt, Arab Rep.",
                label: "Egypt, Arab Rep."
              },
              {
                x: 42023.98,
                y: 11673100,
                r: 5.55,
                name: "Italy",
                label: "Italy"
              },
              {
                x: 39860.91,
                y: 2183460,
                r: 5,
                name: "Japan",
                label: "Japan"
              },
              {
                x: 31564.66,
                y: 37386600,
                r: 5,
                name: "Turkey",
                label: "Turkey"
              },
              {
                x: 26052.62,
                y: 14271600,
                r: 4,
                name: "Poland",
                label: "Poland"
              },
              {
                x: 24809.00,
                y: 6866540,
                r: 3,
                name: "Germany",
                label: "Germany"
              },
              {
                x: 23505.31,
                y: 3527170,
                r: 3,
                name: "South Africa",
                label: "South Africa"
              },
              {
                x: 22620.92,
                y: 4437640,
                r: 3,
                name: "Canada",
                label: "Canada"
              },
              {
                x: 17912.89,
                y: 10083800,
                r: 2,
                name: "Azerbaijan",
                label: "Azerbaijan"
              },
              {
                x: 17559.12,
                y: 2247370,
                r: 2,
                name: "Australia",
                label: "Australia"
              }
            ],
            backgroundColor: ['rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(201, 203, 207, 0.8)',
            'rgba(0, 204, 255, 0.8)',
            'rgba(255, 0, 255, 0.8)',
            'rgba(255, 204, 0, 0.8)',
            'rgba(150, 201, 60, 0.8)', // light green
            'rgba(255, 102, 102, 0.8)', // light red
            'rgba(51, 153, 255, 0.8)', // blue
            'rgba(255, 153, 204, 0.8)', // light pink
            'rgba(102, 255, 178, 0.8)', // light green-blue
            'rgba(255, 153, 0, 0.8)', // orange
            'rgba(153, 0, 153, 0.8)' // purple
          ],
        hoverBackgroundColor: ['rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgba(0, 204, 255)',
            'rgba(255, 0, 255)',
            'rgba(255, 204, 0)',
            'rgb(150, 201, 60)', // light green
            'rgb(255, 102, 102)', // light red
            'rgb(51, 153, 255)', // blue
            'rgb(255, 153, 204)', // light pink
            'rgb(102, 255, 178)', // light green-blue
            'rgb(255, 153, 0)', // orange
            'rgb(153, 0, 153)' // purple
          ],
      hoverBorderWidth: 2,
      hoverBorderColor: 'black'
    }
  ]
};

// Set radius proportional to the data
bubble.datasets[0].data.forEach(function(point) {
  point.r = Math.sqrt(point.r) * 10;
});


// Create chart
var ctx = document.getElementById('bubble-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bubble',
  data: bubble,
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'World Strawberry Exports 2022',
      borderWidth: 2,
      fontSize: 24,
      fontColor: '#b22e16',
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          fontColor: '#1C7C54'
        },
        scaleLabel: {
          display: true,
          labelString: 'Quantity KG'
        }
      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        ticks: {
          fontColor: '#1C7C54'
        },
        scaleLabel: {
          display: true,
          labelString: 'Total Value USD'
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var point = dataset.data[tooltipItem.index];
          return point.label + ': $' + (point.y/1000).toLocaleString(undefined, {maximumFractionDigits: 0}) + 'k // ' + point.x.toLocaleString() + ' KG';
        }
      }
    },
    
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: 'black',
      fontSize: 14,
      generateLabels: function (chart) {
        var data = chart.data.datasets[0].data;
        return data.map(function (point, index) {
          return {
            text: point.label,
            fillStyle: point.backgroundColor,
            strokeStyle: point.borderColor,
            lineWidth: point.borderWidth,
            hidden: isNaN(point.x) || isNaN(point.y) || point.x === null || point.y === null,
            index: index
          };
        });
      }
    }
  }
});
// End of bubble chart


//slideshow, adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//End of slideshow


//button to top, adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//end of button to top 

//button to reveal text, adapted from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function myFunction() {
  var x = document.getElementById("myDIV");
  var computedStyle = window.getComputedStyle(x);
  if (computedStyle.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//end of button

//button to reveal text, adapted from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function secondBtn() {
  var x = document.getElementById("myDIV2");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//end of button

//button to reveal text, adapted from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function thirdBtn() {
  var x = document.getElementById("myDIV3");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//end of button to top

//Fade in, adapted from https://www.w3schools.com/css/css3_transitions.asp and chat.gpt
window.addEventListener('scroll', function () {
  const image = document.querySelector('#seasoninfo');
  const imageTop = image.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (imageTop < windowHeight) {
    image.classList.add('fade-in');
  }
});
//end of fade in

