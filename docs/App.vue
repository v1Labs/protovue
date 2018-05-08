<template>
  <div>
    <p-grid>
      <p-cell cols="3" rows="8">
        <p-text rows="5" />
      </p-cell>
      <p-cell cols="3" colOffset="3" rows="4" />
      <p-cell cols="3" colOffset="3" rows="4" rowOffset="4" />
      <p-cell cols="6" colOffset="6" rows="1" />
      <p-cell cols="6" colOffset="6" rows="1" />
      <p-cell cols="6" colOffset="6" rows="3" rowOffset="1" />
      <p-cell cols="6" colOffset="6" rows="3" rowOffset="4" />
      <p-cell cols="6" colOffset="6" rows="1" rowOffset="7" />
      <p-cell cols="12" rows="2" rowOffset="8" />
    </p-grid>
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
