<template>
  <div
    class="grid"
    v-bind:style="{
      'grid-gap': `${cellGap}px`,
      'padding': `${cellGap}px`,
      'padding-bottom': 0,
      'grid-template-columns': `repeat(${cols}, 1fr)`,
      'grid-template-rows': `repeat(${rows}, 1fr)`,
      'width': `${width}px`,
      'height': `${height}px`
    }"
  >
    <slot />
    <div v-if="guides" class="guides">
      <div
        class="guide-x"
        v-for="row in (rows-1)"
        :key="row + '-guide-x'"
        v-bind:style="{
          'top': ((row / rows) * (height + cellGap)) + (cellGap/2) + 'px'
        }"
      />
      <div
        class="guide-y"
        v-for="col in (cols-1)"
        :key="col + '-guide-y'"
        v-bind:style="{
          'left': ((col / cols) * (width + cellGap)) + (cellGap/2) + 'px'
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guides: Boolean,
    size: String,
    gap: String
  },
  data () {
    return {
      cols: 12,
      rows: 10,
      cellGap: 10,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  },
  created () {
    if (this.size) {
      let sizes = this.size.split(/[x\s,]/);
      this.cols = Number(sizes[0]);
      this.rows = Number(sizes[1]);
    }
    if (this.gap) {
      this.cellGap = Number(this.gap);
      this.width = this.width - (this.cellGap * 2);
      this.height = this.height - (this.cellGap * 2);
    }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    position: relative;
  }

  .guides {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .guide-x {
    position: absolute;
    left: 0;
    right: 0;
    border-top: 1px solid #8dd4fd;
  }
  .guide-y {
    position: absolute;
    top: 0;
    bottom: 0;
    border-left: 1px solid #8dd4fd;
  }
</style>
