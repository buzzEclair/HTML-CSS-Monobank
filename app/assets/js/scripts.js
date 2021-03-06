/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2020. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var ctx = document.getElementById('myChart');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      xAxisID: 10000,
      data: {
        labels: ['Monday','Thuesday','wendesday','thuesday','friday','saturday','sunday'],
        datasets: [{ 
            data: [1200,1180,1000,750,750,600,250],
            borderColor: "#3e95cd",
            fill: false,
            label: 'Week depense'
          }
        ]
      },
      options: {
        
      }
    });
  });

})(jQuery, window, document);
