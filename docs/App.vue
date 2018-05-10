<template>
  <div>
    <v1-grid size="12x10" gap="10">
      <v1-cell size="12x1">
        <v1-nav links="5" />
      </v1-cell>
      <v1-cell middle size="2x9" y="1">
        <v1-text center rows="5" />
      </v1-cell>
      <v1-cell size="8x6" x="2" y="1" />
      <v1-cell size="8x2" x="2" y="7" />
      <v1-cell size="2x9" x="10" y="1" />
      <v1-cell size="8x1" x="2" y="9">
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
