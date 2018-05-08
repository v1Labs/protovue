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
    cols: {
      default: function () {
        return 1
      }
    },
    rows: {
      default: function () {
        return 1
      }
    },
    colOffset: {
      default: function () {
        return 0
      }
    },
    rowOffset: {
      default: function () {
        return 0
      }
    }
  },
  data () {
    return {}
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
