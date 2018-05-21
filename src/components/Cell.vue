<template>
  <div
    class="cell"
    v-bind:class="{
      'border': border,
      'border-top': borderTop,
      'border-right': borderRight,
      'border-bottom': borderBottom,
      'border-left': borderLeft,
      'flat': flat
    }"
    v-bind:style="{
      'grid-column-start': Number(colOffset) + 1,
      'grid-column-end': Number(cols) + Number(colOffset) + 1,
      'grid-row-start': Number(rowOffset) + 1,
      'grid-row-end': Number(rows) + Number(rowOffset) + 1,
      'background': flat ? 'transparent' : light,
      'color': color,
      'border-color': color
    }"
  >
    <div
      class="content"
      :style="{
        'align-self': contentAlign()
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: String,
    x: String,
    y: String,
    flat: Boolean,
    middle: Boolean,
    bottom: Boolean,
    background: String,
    border: Boolean,
    borderTop: Boolean,
    borderRight: Boolean,
    borderBottom: Boolean,
    borderLeft: Boolean
  },
  data () {
    return {
      cols: 1,
      rows: 1,
      colOffset: 0,
      rowOffset: 0
    }
  },
  methods: {
    contentAlign () {
      let align = 'auto';
      if (this.bottom) { align = 'flex-end' }
      if (this.middle) { align = 'center' }
      return align;
    }
  },
  created () {
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
    padding: 15px;
    position: relative;
    overflow: scroll;
    display: grid;
    border-radius: 5px;
  }

  .flat {
    border-radius: 0;
  }

  .cell h1 {
    color: inherit;
  }

  .border {
    border-width: 1px;
    border-style: solid;
  }

  .border-top {
    border-top-width: 1px;
    border-top-style: solid;
  }

  .border-right {
    border-right-width: 1px;
    border-right-style: solid;
  }

  .border-bottom {
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }

  .border-left {
    border-left-width: 1px;
    border-left-style: solid;
  }
</style>
