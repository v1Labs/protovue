<template>
  <div
    class="cell"
    v-bind:style="{
      'grid-column-start': Number(colOffset) + 1,
      'grid-column-end': Number(cols) + Number(colOffset) + 1,
      'grid-row-start': Number(rowOffset) + 1,
      'grid-row-end': Number(rows) + Number(rowOffset) + 1,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    x: Number,
    y: Number
  },
  data () {
    return {
      cols: 1,
      rows: 1,
      colOffset: 0,
      rowOffset: 0
    }
  },
  created () {
    console.log('s', this.size);
    console.log('x', this.x);
    console.log('y', this.y);
    if (this.size) {
      let sizes = this.size.split(/[x\s,]/);
      this.cols = sizes[0];
      this.rows = sizes[1];
    }
    if (this.x) {
      this.colOffset = this.x;
    }
    if (this.y) {
      this.rowOffset = this.y;
    }
  }
}
</script>

<style scoped>
  .cell {
    color: blue;
    padding: 15px;
    background: #eee;
  }
</style>
