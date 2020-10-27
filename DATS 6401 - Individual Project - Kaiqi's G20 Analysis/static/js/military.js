google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawAllSheets);


function drawAllSheets() {                  
    drawSheetName('military', 'SELECT A,B,C,D,E,F,G', mil_percent_ResponseHandler);
 
    drawSheetName('military', 'SELECT I,J,K,L,M,N,O', totalMilitaryResponseHandler);                    
                
    drawSheetName('military', 'SELECT Q,R,S,T,U,V,W', mil_per_captiaResponsHandler);  
    
    drawSheetName('military_growth', 'SELECT A,B,C,D,E,F,G,H,I,J,K,L', growth_gdp_mil_ResponseHandler); 

    drawSheetName('military_growth', 'SELECT O,P,Q,R,S,T,U,V,W,X,Y,Z', growth_total_mil_ResponseHandler);

    drawSheetName('military_growth', 'SELECT AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM', growth_percap_mil_ResponseHandler);                         
}


function drawSheetName(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1E0EF1T-9qS1gMFoirTqWv41zbmfxeDiH/gviz/tq?sheet=' +
    sheetName + '&headers=1&tq=' + queryString);
    query.send(responseHandler);
}




function mil_percent_ResponseHandler(response) {
    var data = response.getDataTable();
    data.sort({column: 6, desc: true});
    var options = {
        vAxis: {title: 'Spending as % of GDP', textStyle:{color:'black'},
                titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
                textStyle:{color: 'black', fontSize:10}, 
                slantedText: true, 
                slantedTextAngle: 45,},

        title: "Country Spending on Military as % of GDP(2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };
        
    var chart = new google.visualization.ColumnChart(document.getElementById('mil_percent_div'));        
    chart.draw(data, options);
}


function totalMilitaryResponseHandler(response) {

	  var data = response.getDataTable();

	  var options = {
        vAxis: {title: 'Total Spending ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Total Spending on Military (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500
    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('totalMilitary_div'));
	  chart.draw(data, options);
}

function mil_per_captiaResponsHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as Per Capita ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Spending on Military Per Captia (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('mil_per_captia_div'));
	  chart.draw(data, options);
}

function growth_gdp_mil_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as % GDP for Growth', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Year',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45},

        title: "The Growth in the proportion of total GDP spent on Military",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.LineChart(document.getElementById('growth_gdp_mil_div'));
	  chart.draw(data, options);
}

function growth_total_mil_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Total Spending Growth (%)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Year',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Growth of Total Spending on Military (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.LineChart(document.getElementById('growth_total_mil_div'));
	  chart.draw(data, options);
}

function growth_percap_mil_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending Growth as Per Capita ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Year',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Growth of Spending on Military Per Captia (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.LineChart(document.getElementById('growth_percap_mil_div'));
	  chart.draw(data, options);
}

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'GDP_Percent')
      {
        $("#mil_percent_div").fadeIn(1000);
      }
      else
      {
        $("#mil_percent_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Total')
      {
        $("#totalMilitary_div").fadeIn(1000);
      }
      else
      {
        $("#totalMilitary_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Per_Captia')
      {
        $("#mil_per_captia_div").fadeIn(1000);
      }
      else
      {
        $("#mil_per_captia_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#mil_percent_div").show();
    $("#totalMilitary_div").hide();
    $("#mil_per_captia_div").hide();
});



// CHART 2

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'GDP_Percent')
      {
        $("#growth_gdp_mil_div").fadeIn(1000);
      }
      else
      {
        $("#growth_gdp_mil_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Total')
      {
        $("#growth_total_mil_div").fadeIn(1000);
      }
      else
      {
        $("#growth_total_mil_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Per_Captia')
      {
        $("#growth_percap_mil_div").fadeIn(1000);
      }
      else
      {
        $("#growth_percap_mil_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#growth_gdp_mil_div").show();
    $("#growth_total_mil_div").hide();
    $("#growth_percap_mil_div").hide();
});
