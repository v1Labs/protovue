<template>
  <div>
    <p
      v-for="row in Number(rows)"
      :style="{
        'width': rowWidth(row)
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
    return {}
  },
  methods: {
    rowWidth (row) {
      const baseWidth = row == this.rows ? 10 : 80;
      const addedMax = row == this.rows ? 90 : 20;
      const addedWidth = baseWidth + (Math.random() * addedMax);
      return addedWidth + '%';
    }
  }
}
</script>

<style scoped>
p {
  height: 10px;
  background: #aaa;
  margin-bottom: 15px;
}
</style>
