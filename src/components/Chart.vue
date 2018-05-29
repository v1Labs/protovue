<template>
  <div
    class="chart"
    :id="`chart_${chartId}`"
  >
    <div
      class="svg-box"
      :style="{
        borderColor: color,
        width: chartWidth + 'px'
      }"
    >
      <svg
        class="svg"
        :width="chartWidth"
        :height="height"
      >
        <path
          :d="graphLine()"
          :style="{
            fill: color
          }"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: function () {
        return '200'
      }
    },
    margin: {
      type: String,
      default: function () {
        return '50'
      }
    }
  },
  data () {
    return {
      chartId: Math.floor(Math.random() * 100000),
      chartWidth: '0',
      randomLine: []
    }
  },
  methods: {
    generateLine: function() {
      var line = [];
      var num = 250;
      for(var i=0;i<100;i++) {
        num = num + 25 - (Math.random() * 50);
        if(num>500){ num=500; }
        if(num<0){ num=0; }
        line.push(Math.round(num));
      }

      this.randomLine = line;
    },
    graphLine: function() {
      let points = this.randomLine;
      let width = this.chartWidth;
      let height = this.height * .8;
      let max = 500;
      let xStep = width / points.length;
      let yStep = height / max;
      let x = 0;
      let y = height/2;
      let path = `M0 ${this.height}L 0 ${y}`;
      for(let i=0;i<points.length;i++){
        let point = points[i];
        x += xStep;
        y = (500 - point) * yStep;
        path += `L ${x} ${y}`;
      }
      path += `L ${x} ${this.height}z`;

      return path;
    }
  },
  mounted: function () {
    let width = document.getElementById(`chart_${this.chartId}`).offsetWidth;
    width -= Number(this.margin) * 2;
    this.chartWidth = width;

    this.generateLine();
  }
}
</script>

<style scoped>
  .svg-box {
    padding: 0 0 1px 5px;
    border: 2px solid grey;
    border-width: 0 0 2px 2px;
    display: inline-block;
  }

  path {
    fill: transparent;
    stroke-width: 3px;
  }
</style>
