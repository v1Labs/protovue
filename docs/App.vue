<template>
  <div>
    <v1-grid size="12x10" gap="0">
      <v1-cell flat borderBottom size="12x1">
        <v1-nav />
      </v1-cell>
      <v1-cell flat borderRight size="3x9" y="1">
        <v1-image center round width="70px" height="70px" />
        <v1-text center rows="3" />
        <v1-avatar count="4" />
      </v1-cell>
      <v1-cell flat borderLeft middle size="2x9" y="1" x="10">
        <v1-image center round width="100px" height="100px" />
        <v1-text center rows="7" />
      </v1-cell>
      <v1-cell flat middle size="7x8" y="1" x="3" style="text-align:center">
      </v1-cell>
      <v1-cell flat borderTop size="7x1" y="9" x="3">
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
