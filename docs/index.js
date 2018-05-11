import Vue from "vue";
import App from './App.vue';
import Protovue from '../src/index.js';

Vue.use(Protovue, {
  color: '#dce3e4'
});

new Vue({
    el: "#app",
    components: {
      App
    },
    template: "<App/>"
});
