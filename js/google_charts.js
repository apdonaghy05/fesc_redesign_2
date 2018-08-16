function onDOMLoad(){
 
  google.charts.load('current', {'packages':['corechart','bar','line']});
  google.charts.setOnLoadCallback(getData_1);
  google.charts.setOnLoadCallback(getData_2);
}

document.addEventListener("DOMContentLoaded", onDOMLoad)


function getData_1(){
  

  let request = new XMLHttpRequest()
  let requestUrl = "https://api.eia.gov/series/?api_key=34e42ef4da86eba37bc9b6ead84e01b6&series_id=SEDS.REPRB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }
  let response = JSON.parse(request.response)
    drawChart_1(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()

  
}


function getData_2(){

  let request = new XMLHttpRequest()
  let requestUrl = "https://api.eia.gov/series/?api_key=34e42ef4da86eba37bc9b6ead84e01b6&series_id=SEDS.TETCB.FL.A"
  request.open('GET', requestUrl, true)

  request.onload = function(){
    if(request.status !== 200){
      console.log("Something went wrong: ", request)
      return
    }
  let response = JSON.parse(request.response)
    drawChart_2(response.series[0].data)
  }

  request.error = function(err){
    console.log("error is: ", err)
    return
  }
  request.send()

  
}


    
    function drawChart_1(productionData) {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Billion BTUs');

      data.addRows(productionData);
        
        var options = {
          legend: { position: 'none' }, 
          chart: {
            title: 'Renewable energy production in Florida',
            subtitle: '1960-2015',
          },

          bars: 'vertical',
          vAxis: {
          title: 'Energy Production',
          format: 'decimal',
        },
          height: 325,
          colors: ['#0072E8']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

      }
    


   function drawChart_2(consumptionData) {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Billion BTUs');


      data.addRows(consumptionData);

      var options = {

        legend: { position: 'none' }, 
        chart: {
          title: 'Energy consumption in the state of Florida',
          subtitle: '1960 --2016',
        },
        vAxis: {
          title: 'Energy Consumption',
          format: 'decimal',
        },
         height: 375,
         colors: ['#FF3D38']

      };

      var chart = new google.charts.Line(document.getElementById('chart_2_div'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }



    
