<template>
  <app-charts :chart-data="dataColelction"></app-charts>
</template>

<script>
import AppCharts from '../chart.js';

export default {
  components: {
    AppCharts,
  },
  data() {
    return {
      dataCollection: null,
    }
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.dataCollection = {
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Aout",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        dataSets: [{
          label: "Nb errors",
          backgroundColor: "#A02837",
          data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101],
        },
        {
          label: "",
          backgroundColor: "#A5CC82",
          data: [205, 408, 188, 190, 58, 200, 190, 400, 164, 254, 290, 201]
        }]
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

