<template>
  <div>
    <p
      v-for="row in Number(rows)"
      :style="{
        'width': rowWidth(row),
        'background': color
      }"
      :key="row"
    >
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      default: function () {
        return 3
      }
    }
  },
  data () {
    return {
      color: null,
      dark: null,
      light: null
    }
  },
  methods: {
    rowWidth (row) {
      const baseWidth = row == this.rows ? 10 : 80;
      const addedMax = row == this.rows ? 90 : 20;
      const addedWidth = baseWidth + (Math.random() * addedMax);
      return addedWidth + '%';
    }
  },
  created () {
    this.color = this.$theme.color;
    this.dark = this.$theme.dark;
    this.light = this.$theme.light;
  }
}
</script>

<style scoped>
p {
  height: 10px;
  margin-bottom: 15px;
}
</style>
