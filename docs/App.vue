<template>
  <div>
    <v1-grid guides gap="0">
      <v1-cell size="2x5">
        <v1-text rows="5" />
      </v1-cell>
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
