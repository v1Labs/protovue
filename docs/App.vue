<template>
  <div>
    <v1-intro>
    </v1-intro>
    <v1-grid size="12x10" gap="10">
      <v1-cell size="12x1">
        <v1-nav />
      </v1-cell>
      <v1-cell size="3x9" y="1">
        <v1-image center round width="70px" height="70px" />
        <v1-text center rows="3" />
        <v1-avatar count="4" />
      </v1-cell>
      <v1-cell middle size="2x9" y="1" x="10">
        <v1-image center round width="100px" height="100px" />
        <v1-text center rows="7" />
      </v1-cell>
      <v1-cell middle size="7x8" y="1" x="3" style="text-align:center">
        <div style="display:inline-block;width:400px;height:400px;position:relative;overflow:hidden;border-radius:100%">
          <img src="https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif" width="400" height="400" />
        </div>
      </v1-cell>
      <v1-cell size="7x1" y="9" x="3">
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
