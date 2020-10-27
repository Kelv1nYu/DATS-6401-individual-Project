google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawAllSheets);


function drawAllSheets() {                  
    drawSheetName('healthcare', 'SELECT A,B,C,D,E,F,G', heal_percent_ResponseHandler);
 
    drawSheetName('healthcare', 'SELECT I,J,K,L,M,N,O', totalHealthcareResponseHandler);                    
                
    drawSheetName('healthcare', 'SELECT Q,R,S,T,U,V,W', heal_per_captiaResponsHandler);  
    
    drawSheetName('health_growth', 'SELECT A,B,C,D,E,F,G,H,I,J,K,L', growth_gdp_heal_ResponseHandler); 

    drawSheetName('health_growth', 'SELECT N,O,P,Q,R,S,T,U,V,W,X,Y', growth_total_heal_ResponseHandler);

    drawSheetName('health_growth', 'SELECT AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL', growth_percap_heal_ResponseHandler);                         
}


function drawSheetName(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1E0EF1T-9qS1gMFoirTqWv41zbmfxeDiH/gviz/tq?sheet=' +
    sheetName + '&headers=1&tq=' + queryString);
    query.send(responseHandler);
}




function heal_percent_ResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        vAxis: {title: 'Spending as % of GDP', textStyle:{color:'black'},
                titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
                textStyle:{color: 'black', fontSize:10}, 
                slantedText: true, 
                slantedTextAngle: 45,},

        title: "Country Spending on Healthcare as % of GDP(2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };
        
    var chart = new google.visualization.ColumnChart(document.getElementById('heal_percent_div'));        
    chart.draw(data, options);
}


function totalHealthcareResponseHandler(response) {
	  var data = response.getDataTable();

	  var options = {
        vAxis: {title: 'Total Spending ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Total Spending on Healthcare (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500
    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('totalHealthcare_div'));
	  chart.draw(data, options);
}

function heal_per_captiaResponsHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as Per Capita ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Spending on Healthcare Per Captia (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('heal_per_captia_div'));
	  chart.draw(data, options);
}

function growth_gdp_heal_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as % GDP for Growth', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Year',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "The Growth in the proportion of total GDP spent on Healthcare",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.LineChart(document.getElementById('growth_gdp_heal_div'));
	  chart.draw(data, options);
}

function growth_total_heal_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Total Spending Growth (%)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Year',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Growth of Total Spending on Healthcare (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.LineChart(document.getElementById('growth_total_heal_div'));
	  chart.draw(data, options);
}

function growth_percap_heal_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending Growth as Per Capita ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Year',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "Growth of Spending on Healthcare Per Captia (2012-2017)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	var chart = new google.visualization.LineChart(document.getElementById('growth_percap_heal_div'));
	chart.draw(data, options);
}

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'GDP_Percent')
      {
        $("#heal_percent_div").fadeIn(1000);
      }
      else
      {
        $("#heal_percent_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Total')
      {
        $("#totalHealthcare_div").fadeIn(1000);
      }
      else
      {
        $("#totalHealthcare_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Per_Captia')
      {
        $("#heal_per_captia_div").fadeIn(1000);
      }
      else
      {
        $("#heal_per_captia_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#heal_percent_div").show();
    $("#totalHealthcare_div").hide();
    $("#heal_per_captia_div").hide();
});



// CHART 2

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'GDP_Percent')
      {
        $("#growth_gdp_heal_div").fadeIn(1000);
      }
      else
      {
        $("#growth_gdp_heal_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Total')
      {
        $("#growth_total_heal_div").fadeIn(1000);
      }
      else
      {
        $("#growth_total_heal_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Per_Captia')
      {
        $("#growth_percap_heal_div").fadeIn(1000);
      }
      else
      {
        $("#growth_percap_heal_div").hide();
      }
    });
});

$(document).ready(function() {
    $("#growth_gdp_heal_div").show();
    $("#growth_total_heal_div").hide();
    $("#growth_percap_heal_div").hide();
});
