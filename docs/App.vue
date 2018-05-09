<template>
  <div>
    <v1-grid guides size="12x10" gap="10">
      <v1-cell size="12x1" />
      <v1-cell size="2x9" y="1">
        <h1>this is a random test to see how long cells get</h1>
        <v1-text rows="15" />
      </v1-cell>
      <v1-cell size="8x6" x="2" y="1" />
      <v1-cell size="8x2" x="2" y="7" />
      <v1-cell size="6x1" x="2" y="9" />
      <v1-cell size="2x9" x="10" y="1" />
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
