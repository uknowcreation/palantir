import { Line,mixins } from 'vue-chartjs';

export default {
  name: 'app-charts',
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            }
          }],
          xAxes: [{
            gridLines: {
              display:true,
            }
          }],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
