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
    <div v-if="guides">
      <div
        class="guide-x"
        v-for="row in rows"
        :key="row"
        v-bind:style="{
          'top': (row / rows * 100) + '%'
        }"
      />
      <div
        class="guide-y"
        v-for="column in columns"
        :key="column"
        v-bind:style="{
          'left': (column / columns * 100) + '%'
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guides: Boolean,
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
    height: 100vh;
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
