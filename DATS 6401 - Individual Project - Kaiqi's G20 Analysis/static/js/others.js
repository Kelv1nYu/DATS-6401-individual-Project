google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawAllSheets);

function drawAllSheets() {                  
    drawSheetName('expenditure_growth', 'SELECT A,B,C,D,E,F,G', edu_ex_gro_ResponseHandler);
 
    drawSheetName('expenditure_growth', 'SELECT I,J,K,L,M,N,O', mil_ex_gro_ResponseHandler);                    
                
    drawSheetName('expenditure_growth', 'SELECT Q,R,S,T,U,V,W', heal_ex_gro_ResponsHandler);  
    
    drawSheetName('precent_growth', 'SELECT A,B,C,D,E,F,G', edu_pre_gro_ResponseHandler); 

    drawSheetName('precent_growth', 'SELECT I,J,K,L,M,N,O', mil_pre_gro_ResponseHandler);

    drawSheetName('precent_growth', 'SELECT Q,R,S,T,U,V,W', heal_pre_gro_ResponseHandler); 
    
    drawSheetName('percaptia_growth', 'SELECT A,B,C,D,E,F,G', edu_per_gro_ResponseHandler); 

    drawSheetName('percaptia_growth', 'SELECT I,J,K,L,M,N,O', mil_per_gro_ResponseHandler);

    drawSheetName('percaptia_growth', 'SELECT Q,R,S,T,U,V,W', heal_per_gro_ResponseHandler);
};


function drawSheetName(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1E0EF1T-9qS1gMFoirTqWv41zbmfxeDiH/gviz/tq?sheet=' +
    sheetName + '&headers=1&tq=' + queryString);
    query.send(responseHandler);
};

function edu_ex_gro_ResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
        vAxis: {title: 'Total Spending Growth (%)', textStyle:{color:'black'},
                titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
                textStyle:{color: 'black', fontSize:10}, 
                slantedText: true, 
                slantedTextAngle: 45,},

        title: "National Education Expenditure Growth (%)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };
        
    var chart = new google.visualization.ColumnChart(document.getElementById('edu_ex_gro_div'));        
    chart.draw(data, options);
};


function mil_ex_gro_ResponseHandler(response) {
	  var data = response.getDataTable();

	  var options = {
        vAxis: {title: 'Total Spending Growth (%)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "National Education Military Growth (%)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500
    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('mil_ex_gro_div'));
	  chart.draw(data, options);
};

function heal_ex_gro_ResponsHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Total Spending Growth (%)', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "National Healthcare Expenditure Growth (%)",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('heal_ex_gro_div'));
	  chart.draw(data, options);
};

function edu_pre_gro_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as % GDP Growth', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "The Growth in the proportion of total GDP spent on Education",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('edu_pre_gro_div'));
	  chart.draw(data, options);
};

function mil_pre_gro_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as % GDP Growth', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
        textStyle:{color: 'black', fontSize:10}, 
        slantedText: true, 
        slantedTextAngle: 45,},

        title: "The Growth in the proportion of total GDP spent on Military",
        titleTextStyle: { color: 'black', fontSize: 16 },

        backgroundColor: 'transparent',

        legend: {textStyle: {color: 'black'}},
        width: 950,
        height: 500

    };

	  var chart = new google.visualization.ColumnChart(document.getElementById('mil_pre_gro_div'));
	  chart.draw(data, options);
};

function heal_pre_gro_ResponseHandler(response) {
	  var data = response.getDataTable();
	  var options = {
        vAxis: {title: 'Spending as % GDP Growth', textStyle:{color:'black'},
        titleTextStyle:{color: 'black'}},

        hAxis: {title: 'Country',
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

	var chart = new google.visualization.ColumnChart(document.getElementById('heal_pre_gro_div'));
	chart.draw(data, options);
};

function edu_per_gro_ResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
      vAxis: {title: 'Spending Growth as Per Capita ($)', textStyle:{color:'black'},
      titleTextStyle:{color: 'black'}},

      hAxis: {title: 'Country',
      textStyle:{color: 'black', fontSize:10}, 
      slantedText: true, 
      slantedTextAngle: 45,},

      title: "Per Capita Education Expenditure Growth",
      titleTextStyle: { color: 'black', fontSize: 16 },

      backgroundColor: 'transparent',

      legend: {textStyle: {color: 'black'}},
      width: 950,
      height: 500

  };

  var chart = new google.visualization.ColumnChart(document.getElementById('edu_per_gro_div'));
  chart.draw(data, options);
};

function mil_per_gro_ResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
      vAxis: {title: 'Spending Growth as Per Capita ($)', textStyle:{color:'black'},
      titleTextStyle:{color: 'black'}},

      hAxis: {title: 'Country',
      textStyle:{color: 'black', fontSize:10}, 
      slantedText: true, 
      slantedTextAngle: 45,},

      title: "Per Capita Military Expenditure Growth",
      titleTextStyle: { color: 'black', fontSize: 16 },

      backgroundColor: 'transparent',

      legend: {textStyle: {color: 'black'}},
      width: 950,
      height: 500

  };

  var chart = new google.visualization.ColumnChart(document.getElementById('mil_per_gro_div'));
  chart.draw(data, options);
};

function heal_per_gro_ResponseHandler(response) {
    var data = response.getDataTable();
    var options = {
      vAxis: {title: 'Spending Growth as Per Capita ($)', textStyle:{color:'black'},
      titleTextStyle:{color: 'black'}},

      hAxis: {title: 'Country',
      textStyle:{color: 'black', fontSize:10}, 
      slantedText: true, 
      slantedTextAngle: 45,},

      title: "Per Capita Healthcare Expenditure Growth",
      titleTextStyle: { color: 'black', fontSize: 16 },

      backgroundColor: 'transparent',

      legend: {textStyle: {color: 'black'}},
      width: 950,
      height: 500

  };

  var chart = new google.visualization.ColumnChart(document.getElementById('heal_per_gro_div'));
  chart.draw(data, options);
}

$(document).ready(function() {
    $("#edu_ex_gro_div").show();
    $("#mil_ex_gro_div").hide();
    $("#heal_ex_gro_div").hide();
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Education')
      {
        $("#edu_ex_gro_div").fadeIn(1000);
      }
      else
      {
        $("#edu_ex_gro_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Military')
      {
        $("#mil_ex_gro_div").fadeIn(1000);
      }
      else
      {
        $("#mil_ex_gro_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Healthcare')
      {
        $("#heal_ex_gro_div").fadeIn(1000);
      }
      else
      {
        $("#heal_ex_gro_div").hide();
      }
    });
});

// CHART 2

$(document).ready(function() {
    $("#edu_pre_gro_div").show();
    $("#mil_pre_gro_div").hide();
    $("#heal_pre_gro_div").hide();
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Education')
      {
        $("#edu_pre_gro_div").fadeIn(1000);
      }
      else
      {
        $("#edu_pre_gro_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Military')
      {
        $("#mil_pre_gro_div").fadeIn(1000);
      }
      else
      {
        $("#mil_pre_gro_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Healthcare')
      {
        $("#heal_pre_gro_div").fadeIn(1000);
      }
      else
      {
        $("#heal_pre_gro_div").hide();
      }
    });
});


$(document).ready(function() {
    $("#edu_per_gro_div").show();
    $("#mil_per_gro_div").hide();
    $("#heal_per_gro_div").hide();
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Education')
      {
        $("#edu_per_gro_div").fadeIn(1000);
      }
      else
      {
        $("#edu_per_gro_div").hide();
      }
    });
});


$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Military')
      {
        $("#mil_per_gro_div").fadeIn(1000);
      }
      else
      {
        $("#mil_per_gro_div").hide();
      }
    });
});

$(document).ready(function(){
    $('#Dropdown').on('change', function() {
      if ( this.value == 'Healthcare')
      {
        $("#heal_per_gro_div").fadeIn(1000);
      }
      else
      {
        $("#heal_per_gro_div").hide();
      }
    });
});
