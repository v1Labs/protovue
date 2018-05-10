<template>
  <div>
    <v1-grid size="10x8" gap="10">
      <v1-cell size="10x1">
        <v1-nav />
      </v1-cell>
      <v1-cell middle size="2x7" y="1">
        <v1-image center round width="100px" height="100px" />
        <v1-text center rows="7" />
      </v1-cell>
      <v1-cell size="8x6" y="1" x="2" />
      <v1-cell size="8x1" y="7" x="2">
        <v1-footer />
      </v1-cell>
    </v1-grid>
  </div>
</template>

<script>
export default {
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
