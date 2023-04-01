//bar chart 1
//src: https://wits.worldbank.org/trade/comtrade/en/country/SGP/year/2021/tradeflow/Imports/partner/ALL/product/081010#
const countries = ["Korea, Rep.", "United States", "Australia", "Japan",
    "New Zealand", "Egypt, Arab Rep.", "Netherlands", "Mexico",
    "Malaysia", "Greece", "China", "France", "United Kingdom",
    "Turkey", "Ethiopia(excludes Eritrea)", "Spain", "Indonesia",
    "South Africa", "Estonia", "Finland", "Vietnam", "Italy",
    "Georgia", "Thailand"];
const kilo = [1067010, 1406000, 563170, 114950, 70830, 36420, 29990, 22130, 48420,
    21580,4490, 3960, 9080, 9260, 4490, 3280, 1770, 500, 270, 870, 30, 30, 50];

const dataObj = {
    labels: countries,
    datasets: [
        {
            label: "Quanity of Imports(KG)",
            data: kilo,
            borderWidth: 2,
            backgroundColor: "hsla(20,100%,80%,0.8)",
            borderColor: "hsla(0,100%,50%,1)"
        }
    ]
};
new Chart("kilochart", {
    type: "bar",
    data: dataObj,
    options: { 
        responsive: false
    }
});

//line chart 2
//src: https://wits.worldbank.org/trade/comtrade/en/country/SGP/year/2021/tradeflow/Imports/partner/ALL/product/081010#
var year = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
var volume = [177.3, 163.2, 165.6, 164, 158.7, 159, 163.7, 161.8, 165.2, 159.2];

const dataObj2 = {
    labels: year,
    datasets: [
        {
            label: "Production Vol(in 1000 metric tons)",
            data: volume,
            borderWidth: 2,
            backgroundColor: "hsla(20,100%,80%,0.8)",
            borderColor: "hsla(0,100%,50%,1)"
        }
    ]
};
new Chart("volchart", {
    type: "line",
    data: dataObj2,
    options: { 
        responsive: false
    }
});
