import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { DatePipe } from '@angular/common';

@Injectable()
export class GraphProvider {

  constructor() {
  }

  plotLine(area, settings:any = {}) {

    Object.assign(settings, this.prepareData(settings.xAxes.timeScope || null, {labels: settings.labels, data: settings.data}));
    return new Chart(area, {
      type: 'line',
      data: {
        labels: settings.labels,
        datasets: [{
          label: settings.title,
          fill: true,
          borderWidth: 1.2,
          lineTension: 0.1,
          backgroundColor: "rgba(112,199,56,.2)",
          borderColor: settings.color || "rgba(112,199,56,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(100,100,100,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 1,
          pointRadius: 0,
          pointHitRadius: 0,
          data: settings.data,
          spanGaps: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: this.getTimexAxes(settings.xAxes.timeScope, {
            stepSize: settings.xAxes.stepSize,
            length: settings.data.length
          }),
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: settings.yAxes.beginAtZero !== undefined ? settings.yAxes.beginAtZero : true,
              max: settings.yAxes.max || 100,
              min: settings.yAxes.min || 0,
              callback: (value, index, values) => {
                return settings.yAxes.labelString ? settings.yAxes.labelString.replace('%d', value) : value;
              },
              fontSize: 12
            },
            scaleLabel: {
              display: !!settings.yAxes.scaleLabel,
              labelString: settings.yAxes.scaleLabel
            }
          }]
        },
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
            title: () => null,
          }
        },
        animation: {
          // onProgress: function(animation) {
          //   const value = animation.animationObject.currentStep / animation.animationObject.numSteps;
          // }
        }
      }
    });
  }

  getTimexAxes(scope = 'minute', options:any = {}) {
    let settings;
    switch (scope) {
      case 'minute':
      case 'hour':
        settings = [{
          type: 'time',
          time: {
            stepSize: options.stepSize || (scope == 'minute' ? 10 : 1),
            unit: scope,
            displayFormats: { hour: options.length < 48 ? 'H:mm' : 'MMM D', minute: scope == 'hour' && options.length > 48 ? 'MM/DD' : 'H:mm' },
            tooltipFormat: 'H:mm'
          },
          scaleLabel: {
            display: false
          }
        }]
        break;
      default:
        break;
      }
    return settings;
  }

  prepareData(scope = 'hour', object) {
    let aux = {};
    const datePipe = new DatePipe('en-US');

    object.labels.forEach((el, i) => {
      const d = new Date(el);
      switch (scope) {
        case 'hour':
          const key = datePipe.transform(d, 'yyyy-MM-dd H');
          if(!aux[key]) {
            aux[key] = {
              data: this.getAverage(object.data.filter((item, index) => {
                return key === datePipe.transform(object.labels[index], 'yyyy-MM-dd H')
              })),
              label: new Date(key + ':00:00').getTime()
            };
          }
          break;

        default:
          break;
      }
    });
    let newObject = {labels: [], data: []};
    if(Object.keys(aux).length > 0) {
      for(const k in aux) {
        newObject.data.push(aux[k].data);
        newObject.labels.push(aux[k].label);
      }
    }else {
      newObject = object;
    }
    return newObject;
  }

  getAverage(array) {
    const sum = array.reduce(function(a, b) { return a + b; });
    return parseFloat((sum / array.length).toFixed(2));
  }
}
