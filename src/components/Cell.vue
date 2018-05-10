<template>
  <div
    class="cell"
    v-bind:style="{
      'grid-column-start': Number(colOffset) + 1,
      'grid-column-end': Number(cols) + Number(colOffset) + 1,
      'grid-row-start': Number(rowOffset) + 1,
      'grid-row-end': Number(rows) + Number(rowOffset) + 1,
      'background': flat ? 'transparent' : light,
      'color': dark
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
    bottom: Boolean
  },
  data () {
    return {
      cols: 1,
      rows: 1,
      colOffset: 0,
      rowOffset: 0,
      light: null,
      dark: null
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
    this.dark = this.$theme.dark;
    this.light = this.$theme.light;
  }
}
</script>

<style scoped>
  .cell {
    padding: 15px;
    position: relative;
    overflow: scroll;
    display: grid;
  }

  .cell h1 {
    color: inherit;
  }
</style>
