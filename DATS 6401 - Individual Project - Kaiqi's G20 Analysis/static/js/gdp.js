google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets(){
    drawSheetsName('gdp', 'SELECT A,B,C,D,E,F,G', gdpResponseHandler);
    drawSheetsName('gdp', 'SELECT I,J,K,L,M,N,O', gdpperResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT A,B,C,D,E', gdp_compare_preResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT G,H,I,J,K', gdp_compare_perResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,N', gdpINDResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,O', gdpCHAResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,P', gdpCANResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,Q', gdpUSResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,R', gdpUKResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,S', gdpJPNResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,T', gdpITAResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,U', gdpDEUResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,V', gdpBRAResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,W', gdpAUSResponseHandler);
    drawSheetsName('gdp_compare', 'SELECT M,X', gdpFRAResponseHandler);
}

function drawSheetsName(sheetName, query, responsHandler){
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1E0EF1T-9qS1gMFoirTqWv41zbmfxeDiH/gviz/tq?sheet=' +
    sheetName + '&headers=1&tq=' + queryString);
    query.send(responsHandler);
};

function gdpResponseHandler(response){
    var data = response.getDataTable();
    var options = {
    vAxis:{title: 'GDP'},
    hAxis:{title: 'Country'},

    title: "GPD (2012-2017)",
    titleTextStyle: { color: 'black', fontSize: 20},

    backgroundColor: 'transparent',

    width: 900,
    height: 500
    }
    var chart = new google.visualization.ColumnChart(document.getElementById("gdp_chart_1"));
    chart.draw(data, options);
};

function gdpperResponseHandler(response){
    var data = response.getDataTable();
    var options = {
    vAxis:{title: 'GDP Per Captia'},
    hAxis:{title: 'Country'},
    
    title: "GPD Per Captia(2012-2017)",
    titleTextStyle: { color: 'black', fontSize: 20},

    backgroundColor: 'transparent',

    width: 900,
    height: 500
    }
    var chart = new google.visualization.ColumnChart(document.getElementById("gdp_chart_2"));
    chart.draw(data, options);
};

function gdp_compare_preResponseHandler(response) {
    var data = response.getDataTable();

    var options = {
        vAxis: {title: 'Percentage of GDP', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}, viewWindow: {min: 0, max: 28}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:12}},


        title: "Government Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        isStacked: true,

        width: 900,
        height: 500
      };
    

    var chart = new google.visualization.ColumnChart(document.getElementById("gdp_chart_3"));

    chart.draw(data, options);
};


function gdp_compare_perResponseHandler(response) {
    var data = response.getDataTable();

    var options = {
        vAxis: {title: 'Per Capita Spending ($)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}, viewWindow: {min: 0, max: 16000}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:12}},

        title: "Government Spending Per Capita in average",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        isStacked: true,
        width: 900,
        height: 500
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("gdp_chart_4"));

    chart.draw(data, options);
};

function gdpINDResponseHandler(response) {
    var data = response.getDataTable();

    var options = {

        title: "India Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},

        slices: {
            3: { color: '#22aa99' }
         },

        pieHole: 0.4,
        width: 900,
        height: 500

    };

    var chart = new google.visualization.PieChart(document.getElementById("IND_spending_div"));

    chart.draw(data, options);
};

function gdpCHAResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "China Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("CHN_spending_div"));
    chart.draw(data, options);
};

function gdpCANResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "Canda Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("CAN_spending_div"));
    chart.draw(data, options);
};

function gdpUSResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "United States Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("USA_spending_div"));
    chart.draw(data, options);
};

function gdpUKResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "United Kingdom Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("GBR_spending_div"));
    chart.draw(data, options);
};

function gdpJPNResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "Japan Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("JPN_spending_div"));
    chart.draw(data, options);
};

function gdpITAResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "Italy Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("ITA_spending_div"));
    chart.draw(data, options);
};

function gdpDEUResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "Germany Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("DEU_spending_div"));
    chart.draw(data, options);
};

function gdpBRAResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "Brazil Spending as Percentage of GDP in average",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("BRA_spending_div"));
    chart.draw(data, options);
};


function gdpAUSResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "Australia Spending as Percentage of GDP in 2017",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("AUS_spending_div"));
    chart.draw(data, options);
};

function gdpFRAResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        title: "France Spending as Percentage of GDP in 2017",
        titleTextStyle: { color: 'black', fontSize: 16 },
        backgroundColor: 'transparent',
        legend: {textStyle: {color: 'black'}},
        slices: {
            3: { color: '#22aa99' }
         },
        pieHole: 0.4,
        width: 900,
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById("FRA_spending_div"));
    chart.draw(data, options);
};

$(document).ready(function() {
    $("#IND_spending_div").show();
    $("#CHN_spending_div").hide();
    $("#CAN_spending_div").hide();
    $("#USA_spending_div").hide();
    $("#GBR_spending_div").hide();
    $("#JPN_spending_div").hide();
    $("#ITA_spending_div").hide();
    $("#DEU_spending_div").hide();
    $("#BRA_spending_div").hide();
    $("#AUS_spending_div").hide();
    $("#FRA_spending_div").hide();
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'IND')
      {
        $("#IND_spending_div").fadeIn(1000);
      }
      else
      {
        $("#IND_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'CHN')
      {
        $("#CHN_spending_div").fadeIn(1000);
      }
      else
      {
        $("#CHN_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'CAN')
      {
        $("#CAN_spending_div").fadeIn(1000);
      }
      else
      {
        $("#CAN_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'USA')
      {
        $("#USA_spending_div").fadeIn(1000);
      }
      else
      {
        $("#USA_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'GBR')
      {
        $("#GBR_spending_div").fadeIn(1000);
      }
      else
      {
        $("#GBR_spending_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'JPN')
      {
        $("#JPN_spending_div").fadeIn(1000);
      }
      else
      {
        $("#JPN_spending_div").hide();
      }
    });
});

$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == 'ITA')
    {
      $("#ITA_spending_div").fadeIn(1000);
    }
    else
    {
      $("#ITA_spending_div").hide();
    }
  });
});

$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == 'DEU')
    {
      $("#DEU_spending_div").fadeIn(1000);
    }
    else
    {
      $("#DEU_spending_div").hide();
    }
  });
});

$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == 'BRA')
    {
      $("#BRA_spending_div").fadeIn(1000);
    }
    else
    {
      $("#BRA_spending_div").hide();
    }
  });
});

$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == 'AUS')
    {
      $("#AUS_spending_div").fadeIn(1000);
    }
    else
    {
      $("#AUS_spending_div").hide();
    }
  });
});

$(document).ready(function(){
  $('#Dropdown').on('change', function() {
    if ( this.value == 'FRA')
    {
      $("#FRA_spending_div").fadeIn(1000);
    }
    else
    {
      $("#FRA_spending_div").hide();
    }
  });
});