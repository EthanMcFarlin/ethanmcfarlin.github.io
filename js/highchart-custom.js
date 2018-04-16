console.clear();
const chartColors=["#fca311","#00aeb5","#899299","#f93f26","#d6ce48","#007077","#51b5e0"];Highcharts.theme={colors:chartColors,chart:{backgroundColor:"transparent",style:{fontFamily:"Roboto Condensed, Arial, sans-serif"}},plotOptions:{pie:{innerSize:"65%",dataLabels:{enabled:!1},showInLegend:!0}},title:null,tooltip:{headerFormat:'<span style="font-size: 12px; color: #6b7782">{point.key}</span><br/>',borderWidth:0,backgroundColor:"#fff",style:{fontSize:"14px",color:"#50585f"}},credits:{enabled:!1}};Highcharts.setOptions(Highcharts.theme);

const context = {
	"assetMix": [
		{
			"assetClass": "Website Design",
			"holdings": 25,
			"marketValue": 'HTML, CSS, JS, jQuery, PHP, SQL'
		}, {
			"assetClass": "Graphic Design",
			"holdings": 30,
			"marketValue": 'Photoshop, Camtasia Studio, Adobe Premiere, Adobe After Effects'
		}, {
			"assetClass": "Other Languages",
			"holdings": 15,
			"marketValue": 'Java, Python, Scratch, MIT APP Inventor, XML'
		}, {
			"assetClass": "Entrepreneurship",
			"holdings": 30,
			"marketValue": 'Proffesional Writting, Marketing, Communication'
		}
	]
};

// handlebars stuff
Handlebars.registerHelper('formatCurrency', function(val) {
	return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});
var assetMixTemplateSource = $("#asset-mix-template").html();
var assetMixTemplate = Handlebars.compile(assetMixTemplateSource);
document.getElementById('handlebars-asset-mix').innerHTML = assetMixTemplate(context);


// PIE CHART
let pieData = [];
// create pie chart data array
context.assetMix.forEach(({assetClass, holdings}) => {
	pieData.push([assetClass, holdings])
});

const pieChartOptions = {
	chart: {
		type: 'pie',
		renderTo: 'pieChart'
	},
	tooltip: {
		pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y}<br/>',
		valueSuffix: '%'
	},
	legend: {
		enabled: false
	},
	series: [{
		type: 'pie',
		name: 'Percentages',
		data: pieData
	}]
};

// init highcharts graph
const pieChart = new Highcharts.Chart(pieChartOptions);
initCustomLegend(pieChart);

function initCustomLegend(chart) {
	const legendItem = document.querySelectorAll('.legend-item');
	legendItem.forEach((item, i) => {
		// add hover states to legend items
		item.addEventListener('mouseover', () => {
			chart.series[0].data[i].setState('hover');
	    chart.tooltip.refresh(chart.series[0].data[i]);
		});
		item.addEventListener('mouseout', () => {
			chart.series[0].data[i].setState();
	    chart.tooltip.hide();
		});

		// colour legend circles to match chart colours, if necessary
		const legendCircle = item.querySelector('.legend-circle');
		if (legendCircle) {
			legendCircle.style.backgroundColor = chart.series[0].data[i].color;
		}
	});
}






