<template>
  <div class="footer">
    <div class="spacer" />
    <div
      class="link"
      v-for="link in Number(links)"
      :style="{
        'width': linkWidth(),
        'background': color
      }"
      :key="link"
    />
    <div class="spacer" />
  </div>
</template>

<script>
export default {
  props: {
    links: {
      default: function () {
        return 4
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    linkWidth () {
      const baseWidth = 40;
      const addedMax = 30;
      const addedWidth = baseWidth + (Math.random() * addedMax);
      return addedWidth + 'px';
    }
  }
}
</script>

<style scoped>
  .footer {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .spacer {
    flex-grow: 1;
  }

  .link {
    align-self: center;
    width: 60px;
    margin: 0 15px;
    height: 10px;
    border-radius: 5px;
    display: inline-block;
  }
</style>
