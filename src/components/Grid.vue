<template>
  <div
    class="grid"
    v-bind:style="{
      'grid-gap': `${Number(gap)}px`,
      'padding': `${Number(gap)}px`,
      'grid-template-columns': `repeat(${columns}, 1fr)`,
      'grid-template-rows': `repeat(${rows}, 1fr)`
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      default: function () {
        return 12
      }
    },
    rows: {
      default: function () {
        return  10
      }
    },
    gap: {
      default: function () {
        return 5
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    height: calc(100vh - 10px);
  }
</style>
