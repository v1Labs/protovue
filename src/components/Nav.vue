<template>
  <div class="nav">
    <div class="logo">
      <div
        class="img"
        v-bind:style="{
          'background': color
        }"
      />
      <div
        class="text"
        v-bind:style="{
          'background': color
        }"
      />
    </div>
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
      color: null
    }
  },
  methods: {
    linkWidth () {
      const baseWidth = 70;
      const addedMax = 40;
      const addedWidth = baseWidth + (Math.random() * addedMax);
      return addedWidth + 'px';
    }
  },
  created () {
    this.color = this.$theme.color;
  }
}
</script>

<style scoped>
  .nav {
    padding: 0 15px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .logo {
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
  }

  .logo .img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 10px;
    display: inline-block;
  }

  .logo .text {
    width: 160px;
    height: 10px;
    border-radius: 3px;
    display: inline-block;
  }

  .spacer {
    flex-grow: 1;
  }

  .link {
    width: 60px;
    margin-left: 30px;
    height: 10px;
    border-radius: 3px;
    display: inline-block;
  }
</style>
