<template>
  <div>
    <v1-grid guides size="8x4" gap="30">
      <v1-cell />
      <v1-cell y="1" />
      <v1-cell y="2" />
      <v1-cell y="3" />
      <v1-cell />
      <v1-cell x="1" />
      <v1-cell x="1" y="1" />
      <v1-cell x="1" y="2" />
      <v1-cell x="1" y="3" />
      <v1-cell size="1x4" x="2" />
      <v1-cell size="1x2" x="3" />
    </v1-grid>
  </div>
</template>

<script>
import Components from '../src/components';

export default {
  components: {
    ...Components
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet">
  body {
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
</style>
