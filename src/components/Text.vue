<template>
  <div
    class="text"
    :style="{
      'text-align': center ? 'center' : 'left'
    }"
  >
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
    center: Boolean,
    rows: {
      default: function () {
        return 3
      }
    }
  },
  data () {
    return {
    }
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
  .text {
    padding-top: 25px;
  }

  p {
    height: 10px;
    margin: 0 auto 15px auto;
    border-radius: 5px;
    display: inline-block;
  }
</style>
